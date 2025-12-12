import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Card from "../components/videos/Card";

describe("Card", () => {
  const defaultProps = {
    image: "img.jpg",
    author: "Juan",
    country: "Argentina",
    axis: "Cultura",
    description: "Descripción test",
    onClick: vi.fn(),
  };

  it("renderiza los datos correctamente", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText("Juan")).toBeDefined();
    expect(screen.getByText("Argentina")).toBeDefined();
    expect(screen.getByText("Cultura")).toBeDefined();
    expect(screen.getByText("Descripción test")).toBeDefined();
    expect(screen.getByRole("img")).toHaveAttribute("src", "img.jpg");
  });

  it("llama onClick al hacer click", () => {
    const { container } = render(<Card {...defaultProps} />);

    const cardElement = container.querySelector("article");
    fireEvent.click(cardElement);

    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("renderiza acciones cuando están presentes", () => {
    const Action = <button>Editar</button>;
    render(<Card {...defaultProps} actions={Action} />);

    expect(screen.getByText("Editar")).toBeDefined();
  });
});
