// src/tests/AnimatedRoute.test.jsx
import { render } from "@testing-library/react";
import AnimatedRoute from "../components/map/AnimatedRoute";
import { vi } from "vitest";

// Mock de @react-three/fiber
vi.mock("@react-three/fiber", () => ({
  useFrame: vi.fn(),
}));

// Mock mínimo de three (Color)
vi.mock("three", async () => {
  const actual = await vi.importActual("three");
  return {
    ...actual,
    Color: class {
      constructor(c) { this.c = c; }
      multiplyScalar() { return this; }
    },
  };
});

describe("AnimatedRoute", () => {
  it("renderiza null si no recibe from/to", () => {
    const { container } = render(<AnimatedRoute />);
    expect(container.firstChild).toBeNull();
  });

  it("renderiza un group y un mesh cuando recibe from/to válidos", () => {
    const from = { lat: 0, lon: 0 };
    const to = { lat: 10, lon: 10 };

    const { container } = render(
      <AnimatedRoute from={from} to={to} color="#FF0000" />
    );

    // comprueba que existe un <group>
    const group = container.querySelector("group");
    expect(group).not.toBeNull();

    // comprueba que existe un <mesh>
    const mesh = container.querySelector("mesh");
    expect(mesh).not.toBeNull();
  });
});
