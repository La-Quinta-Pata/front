// src/components/AnimatedFlatRoute.jsx
import React, { useMemo, useRef, useState } from "react";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { makeFlatArcPoints } from "./helpers/flatCoordinates";

export default function AnimatedFlatRoute({ from, to, color, delay, arcHeight = 0.2, speed = 1 }) {
  const POINTS = 160;

  const points = useMemo(() => makeFlatArcPoints(from, to, arcHeight, POINTS), [from, to, arcHeight]);

  const [progress, setProgress] = useState(0);
  const startTime = useRef(null);

  useFrame((state, delta) => {
    if (startTime.current === null) startTime.current = state.clock.elapsedTime;

    if ((state.clock.elapsedTime - startTime.current) * 1000 < delay) return;

    setProgress((prev) => Math.min(prev + delta * 60 * speed, points.length - 1));
  });

  const shown = points.slice(0, Math.floor(progress));
  const moving = points[Math.floor(progress)];

  return (
    <group>
      {shown.length >= 2 && (
        <Line
          points={shown.map((p) => [p.x, p.y, p.z])}
          color={color}
          lineWidth={1.5}
        />
      )}

      {moving && (
        <mesh position={[moving.x, moving.y, moving.z + 0.01]}>
          <sphereGeometry args={[0.02, 10, 10]} />
          <meshStandardMaterial
            color={color}
            emissive={new THREE.Color(color).multiplyScalar(0.6)}
          />
        </mesh>
      )}
    </group>
  );
}
