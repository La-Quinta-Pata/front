import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegisterForm from "../components/login/RegisterForm";
import { usersApi } from "../services/user";
import toast from "react-hot-toast";

// mocks
vi.mock("../services/user", () => ({
  usersApi: { create: vi.fn() }
}));

vi.mock("react-hot-toast", () => ({
  default: { custom: vi.fn(), dismiss: vi.fn() }
}));

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("RegisterForm", () => {
  beforeEach(() => vi.clearAllMocks());

  const setup = (onCancel) =>
    render(
      <MemoryRouter>
        <RegisterForm onCancel={onCancel} />
      </MemoryRouter>
    );

  it("renderiza todos los campos y botones", () => {
    setup();
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/mínimo 8 caracteres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rol/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /crear usuario/i })).toBeInTheDocument();
  });

  it("muestra errores de validación con inputs inválidos", async () => {
    setup();

    const nameInput = screen.getByLabelText(/nombre completo/i);
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByPlaceholderText(/mínimo 8 caracteres/i);
    const submitButton = screen.getByRole("button", { name: /crear usuario/i });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "Ma" } });
      fireEvent.change(emailInput, { target: { value: "malemail" } });
      fireEvent.change(passwordInput, { target: { value: "123" } });
      fireEvent.submit(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText(/debe tener al menos 3 caracteres/i)).toBeInTheDocument();
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
      expect(screen.getByText(/debe tener mínimo 8 caracteres/i)).toBeInTheDocument();
    });
  });

  it("habilita el botón cuando todos los inputs son válidos", async () => {
    setup();

    const nameInput = screen.getByLabelText(/nombre completo/i);
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByPlaceholderText(/mínimo 8 caracteres/i);
    const submitButton = screen.getByRole("button", { name: /crear usuario/i });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "María López" } });
      fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
      fireEvent.change(passwordInput, { target: { value: "12345678" } });
    });

    await waitFor(() => expect(submitButton).not.toBeDisabled());
  });

  it("toggle de mostrar/ocultar contraseña funciona", async () => {
    setup();
    const passwordInput = screen.getByPlaceholderText(/mínimo 8 caracteres/i);
    const toggleButton = screen.getByRole("button", { name: /mostrar contraseña/i });

    expect(passwordInput.type).toBe("password");

    await act(async () => fireEvent.click(toggleButton));

    expect(passwordInput.type).toBe("text");
  });

  it("muestra error de backend cuando usersApi.create falla", async () => {
    usersApi.create.mockRejectedValueOnce(new Error("exists"));

    setup();
    const nameInput = screen.getByLabelText(/nombre completo/i);
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByPlaceholderText(/mínimo 8 caracteres/i);
    const submitButton = screen.getByRole("button", { name: /crear usuario/i });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "María López" } });
      fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
      fireEvent.change(passwordInput, { target: { value: "12345678" } });
      fireEvent.submit(submitButton);
    });

    const backendError = await screen.findByRole("alert");
    expect(backendError).toHaveTextContent(/el correo ya está registrado/i);
    expect(toast.custom).toHaveBeenCalled();
  });

  it("navega a /panel cuando la creación es exitosa", async () => {
    usersApi.create.mockResolvedValueOnce({ success: true });

    vi.useFakeTimers();
    setup();

    const nameInput = screen.getByLabelText(/nombre completo/i);
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByPlaceholderText(/mínimo 8 caracteres/i);
    const submitButton = screen.getByRole("button", { name: /crear usuario/i });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "María López" } });
      fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
      fireEvent.change(passwordInput, { target: { value: "12345678" } });
      fireEvent.submit(submitButton);
    });

    await act(async () => {
      vi.advanceTimersByTime(1000); // avanzar el setTimeout
    });

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/panel");
      expect(toast.custom).toHaveBeenCalled();
    });

    vi.useRealTimers();
  });

  it("llama onCancel si se pasa la prop", async () => {
    const onCancelMock = vi.fn();
    setup(onCancelMock);

    const cancelButton = screen.getByRole("button", { name: /cancelar/i });

    await act(async () => fireEvent.click(cancelButton));

    expect(onCancelMock).toHaveBeenCalled();
  });
});
