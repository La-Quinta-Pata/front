import { render, screen } from "@testing-library/react";
import GlobeExperience from "../components/map/GlobeExperience";
import { vi } from "vitest";

describe("GlobeExperience", () => {
  it("renderiza el canvas de GlobeScene", () => {
    render(<GlobeExperience />);
    const canvas = screen.getByRole("img", { hidden: true }); // Canvas no tiene role, pero se puede seleccionar con hidden:true
    expect(canvas).toBeInTheDocument();
  });

  it("renderiza el iframe después de showMap", () => {
    vi.useFakeTimers();
    render(<GlobeExperience />);
    
    vi.advanceTimersByTime(15000); // simulamos que pasan 15s

    const iframe = screen.getByTitle("mapa") || document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();

    vi.useRealTimers();
  });
});
