import { render, screen } from "@testing-library/react";
import Information from "../components/sections/Information";

describe("Information", () => {
  it("renderiza los textos correctamente", () => {
    render(<Information />);
    const mainText = screen.getByText(/lorem ipsum/i);
    const paragraph = screen.getByText(/Lorem, ipsum dolor sit amet/i);
    expect(mainText).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
