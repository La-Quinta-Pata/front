import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";

describe("Filters", () => {
  it("renderiza el filtro y ejecuta el callback", () => {
    const mockFn = vi.fn();

    render(<Filters onFilterChange={mockFn} />);

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "arte" } });

    expect(mockFn).toHaveBeenCalledWith("arte");
  });
});
