import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import GlobeScene from "./GlobeScene";

export default function GlobeExperience() {
  const [mode, setMode] = useState("global");
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMode("flying"), 8000);
    const t2 = setTimeout(() => setMode("city"), 13000);
    const t3 = setTimeout(() => setShowMap(true), 14000);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <section className="w-full h-full relative">
      <section
        className={`
          w-full h-full transition-opacity duration-1400
          ${showMap ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <Canvas
          data-testid="globe-canvas"
          camera={{ position: [0, 0, 6], fov: 50 }}
        >
          <GlobeScene mode={mode} />
        </Canvas>
      </section>

      {showMap && (
        <iframe
          title="mapa"
          src="https://www.google.com/maps/d/u/0/embed?mid=1Q4hgXqEiSO6s6AIG02QB_aKvEo8"
          className="
            absolute inset-0 w-full h-full border-0
            animate-fadeIn
          "
        />
      )}
    </section>
  );
}
