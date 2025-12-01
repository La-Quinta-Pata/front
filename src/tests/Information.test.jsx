import { render, screen } from "@testing-library/react";
import Information from "../components/sections/Information";

describe("Information", () => {
  it("renderiza los textos correctamente", () => {
    render(<Information />);
    const mainText = screen.getByText(/La Quinta Pata/i);
    const paragraph = screen.getByText(/Es una Asociación Cultural generadora/i);
    expect(mainText).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
