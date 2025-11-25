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
    <div style={{ width: "100%", height: "100%", position: "relative" }}>

      {/* GLobe / Three.js */}
      <div
        style={{
          width: "100%",
          height: "100%",
          opacity: showMap ? 0 : 1,
          transition: "opacity 1.4s",
          pointerEvents: showMap ? "none" : "auto",
        }}
      >
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <GlobeScene mode={mode} />
        </Canvas>
      </div>

      {/* My Maps Overlay */}
      {showMap && (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1Q4hgXqEiSO6s6AIG02QB_aKvEo8"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            animation: "fadeIn 1.5s ease",
          }}
        />
      )}
    </div>
  );
}
