import { render } from "@testing-library/react";
import GlobeScene from "../components/map/GlobeScene";

describe("GlobeScene", () => {
  it("renderiza sin errores en modo global", () => {
    render(<GlobeScene mode="global" />);
  });

  it("renderiza sin errores en modo flying", () => {
    render(<GlobeScene mode="flying" />);
  });

  it("renderiza sin errores en modo city", () => {
    render(<GlobeScene mode="city" />);
  });
});
