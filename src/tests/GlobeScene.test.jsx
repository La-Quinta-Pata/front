import { render } from '@testing-library/react';
import { Canvas } from '@react-three/fiber';
import GlobeScene from '../components/map/GlobeScene';

describe('GlobeScene', () => {
  it('renderiza sin errores en modo global', () => {
    render(
      <Canvas>
        <GlobeScene mode="global" />
      </Canvas>
    );
  });

  it('renderiza sin errores en modo flying', () => {
    render(
      <Canvas>
        <GlobeScene mode="flying" />
      </Canvas>
    );
  });

  it('renderiza sin errores en modo city', () => {
    render(
      <Canvas>
        <GlobeScene mode="city" />
      </Canvas>
    );
  });
});
