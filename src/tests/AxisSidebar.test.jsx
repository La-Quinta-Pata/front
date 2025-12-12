import { render, screen, fireEvent } from "@testing-library/react";
import AxisSidebar from "../components/videos/AxisSidebar";

describe("AxisSidebar", () => {
  const axisOptions = ["Feminismos", "Cultura", "Tecnología"];
  const onSelectAxis = vi.fn();

  function setup(selectedAxis = null) {
    onSelectAxis.mockClear();
    render(
      <AxisSidebar
        axisOptions={axisOptions}
        selectedAxis={selectedAxis}
        onSelectAxis={onSelectAxis}
      />
    );
  }

  test("renderiza el botón 'Todos' y los botones de ejes", () => {
    setup();

    expect(screen.getAllByRole("button", { name: "Todos" })).toHaveLength(2);
    axisOptions.forEach((axis) => {
      expect(screen.getAllByRole("button", { name: axis }).length).toBeGreaterThan(
        0
      );
    });
  });

  test("marca aria-pressed correctamente según selectedAxis", () => {
    setup("Cultura");

    const culturaBtns = screen.getAllByRole("button", { name: "Cultura" });
    culturaBtns.forEach((btn) => expect(btn).toHaveAttribute("aria-pressed", "true"));

    const todosBtns = screen.getAllByRole("button", { name: "Todos" });
    todosBtns.forEach((btn) =>
      expect(btn).toHaveAttribute("aria-pressed", "false")
    );
  });

  test("llama a onSelectAxis(null) cuando se hace click en 'Todos'", () => {
    setup("Cultura");

    const todosBtns = screen.getAllByRole("button", { name: "Todos" });
    fireEvent.click(todosBtns[0]);

    expect(onSelectAxis).toHaveBeenCalledTimes(1);
    expect(onSelectAxis).toHaveBeenCalledWith(null);
  });

  test("llama a onSelectAxis con el eje seleccionado", () => {
    setup();

    const btn = screen.getAllByRole("button", { name: "Tecnología" })[0];
    fireEvent.click(btn);

    expect(onSelectAxis).toHaveBeenCalledTimes(1);
    expect(onSelectAxis).toHaveBeenCalledWith("Tecnología");
  });
});
