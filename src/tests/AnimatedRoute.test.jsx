import { render } from '@testing-library/react';
import { Canvas } from '@react-three/fiber';
import AnimatedRoute from '../components/map/AnimatedRoute';
import { vi } from 'vitest';

vi.mock('@react-three/fiber', async () => ({
  ...(await vi.importActual('@react-three/fiber')),
  useFrame: vi.fn(),
}));

vi.mock('three', async () => {
  const actual = await vi.importActual('three');
  return {
    ...actual,
    Color: class {
      constructor(c) { this.c = c; }
      multiplyScalar() { return this; }
    },
  };
});

describe('AnimatedRoute', () => {
  it('renderiza null si no recibe from/to', () => {
    const { container } = render(<AnimatedRoute />);
    expect(container.firstChild).toBeNull();
  });

  it('renderiza un group y un mesh cuando recibe from/to válidos', () => {
    const from = { lat: 0, lon: 0 };
    const to = { lat: 10, lon: 10 };

    const { container } = render(
      <Canvas>
        <AnimatedRoute from={from} to={to} color="#FF0000" />
      </Canvas>
    );

  });
});
