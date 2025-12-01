import { render, screen, waitFor } from "@testing-library/react";
import GlobeExperience from "../components/map/GlobeExperience";

describe("GlobeExperience", () => {
  it("renderiza el canvas de GlobeScene", () => {
    render(<GlobeExperience />);
    const canvas = screen.getByTestId("globe-canvas");
    expect(canvas).toBeInTheDocument();
  });

  it(
    "renderiza el iframe después de showMap",
    async () => {
      render(<GlobeExperience />);

      // esperamos hasta 20s para cubrir el timeout de 14s de showMap
      const iframe = await waitFor(
        () => {
          const el = document.querySelector("iframe");
          if (!el) throw new Error("iframe no encontrado aún");
          return el;
        },
        { timeout: 20000 }
      );

      expect(iframe).toBeInTheDocument();
    },
    25000 // timeout extra para este test
  );
});
