import { render } from "@testing-library/react";
import { Canvas } from "@react-three/fiber";
import AnimatedRoute from "../components/map/AnimatedRoute";

describe("AnimatedRoute", () => {
  it("renderiza null si no recibe from/to", () => {
    const { container } = render(
      <Canvas>
        <AnimatedRoute />
      </Canvas>
    );
    expect(container.firstChild).toBeNull();
  });

  it("renderiza un grupo de rutas si recibe props correctas", () => {
    const from = { lat: 0, lon: 0 };
    const to = { lat: 10, lon: 10 };
    const { container } = render(
      <Canvas>
        <AnimatedRoute from={from} to={to} color="#FF0000" />
      </Canvas>
    );
    expect(container.firstChild).not.toBeNull();
  });
});
