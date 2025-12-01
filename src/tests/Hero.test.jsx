import { render, screen } from "@testing-library/react";
import Hero from "../components/sections/Hero";

describe("Hero", () => {
  it("renderiza el título correctamente", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { name: /La Quinta Pata/i });
    expect(heading).toBeInTheDocument();
  });
});
