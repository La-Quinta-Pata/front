import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import { useAuth } from "../hooks/useAuth";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock
  };
});

vi.mock("../hooks/useAuth", () => ({
  useAuth: vi.fn()
}));

describe("LoginForm", () => {
  let mockLogin;

  beforeEach(() => {
    mockLogin = vi.fn();
    navigateMock.mockReset();
    useAuth.mockReturnValue({ login: mockLogin });
  });

  const setup = () =>
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

  it("renderiza correctamente los campos", () => {
    setup();
    expect(screen.getByLabelText(/email/i, { selector: "input" })).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i, { selector: "input" })).toBeInTheDocument();
  });

  it("mantiene el botón deshabilitado cuando los inputs son inválidos", async () => {
    setup();

    const button = screen.getByRole("button", { name: /entrar/i });
    expect(button).toBeDisabled();

    const emailInput = screen.getByLabelText(/email/i, { selector: "input" });
    const passwordInput = screen.getByLabelText(/contraseña/i, { selector: "input" });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "malformato" } });
      fireEvent.blur(emailInput);

      fireEvent.change(passwordInput, { target: { value: "123" } });
      fireEvent.blur(passwordInput);
    });

    // El botón sigue deshabilitado
    expect(button).toBeDisabled();

    // Verificamos que los valores se actualizaron
    expect(emailInput.value).toBe("malformato");
    expect(passwordInput.value).toBe("123");
  });

  it("habilita el botón cuando email y password son válidos", async () => {
    setup();

    const emailInput = screen.getByLabelText(/email/i, { selector: "input" });
    const passwordInput = screen.getByLabelText(/contraseña/i, { selector: "input" });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
      fireEvent.change(passwordInput, { target: { value: "12345678" } });
    });

    const button = screen.getByRole("button", { name: /entrar/i });
    expect(button).not.toBeDisabled();
  });

  it("toggle de mostrar/ocultar contraseña funciona", async () => {
    setup();

    const passwordInput = screen.getByLabelText(/contraseña/i, { selector: "input" });
    const toggleButton = screen.getByRole("button", {
      name: /mostrar contraseña/i
    });

    expect(passwordInput.type).toBe("password");

    await act(async () => {
      fireEvent.click(toggleButton);
    });

    expect(passwordInput.type).toBe("text");
  });

  it("muestra error cuando login falla", async () => {
    mockLogin.mockResolvedValueOnce({ success: false });

    setup();

    const emailInput = screen.getByLabelText(/email/i, { selector: "input" });
    const passwordInput = screen.getByLabelText(/contraseña/i, { selector: "input" });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
      fireEvent.change(passwordInput, { target: { value: "12345678" } });
      fireEvent.submit(screen.getByRole("button", { name: /entrar/i }));
    });

    const alert = await screen.findByText(/contraseña o el email es incorrecto/i);
    expect(alert).toBeInTheDocument();
  });

  it("navega a /panel cuando login es exitoso", async () => {
    mockLogin.mockResolvedValueOnce({ success: true });

    setup();

    const emailInput = screen.getByLabelText(/email/i, { selector: "input" });
    const passwordInput = screen.getByLabelText(/contraseña/i, { selector: "input" });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
      fireEvent.change(passwordInput, { target: { value: "12345678" } });
      fireEvent.submit(screen.getByRole("button", { name: /entrar/i }));
    });

    expect(navigateMock).toHaveBeenCalledWith("/panel");
  });
});
