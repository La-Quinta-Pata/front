import { render, screen } from "@testing-library/react";
import Hero from "../components/sections/Hero";
import "../translation"

describe("Hero", () => {
  it("renderiza el título correctamente", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { name: /Memorias Migrantes/i });
    expect(heading).toBeInTheDocument();
  });
});
