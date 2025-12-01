import React, { useRef, useMemo, useState } from "react";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { latLonToVector3, makeArcCurveOnSphere } from "./helpers/coordinates";

export default function AnimatedRoute({ from, to, color, delay = 0, speed = 1 }) {
    if (!from || !to) return null;

    const ROUTE_RADIUS = 2.15;
    const a = useMemo(() => latLonToVector3(from.lat, from.lon, ROUTE_RADIUS), [from]);
    const b = useMemo(() => latLonToVector3(to.lat, to.lon, ROUTE_RADIUS), [to]);

    const points = useMemo(() => makeArcCurveOnSphere(a, b), [a, b]);

    const [progress, setProgress] = useState(0);
    const startTime = useRef(null);

//cancelar render para no tirar errores
    if (!points || points.length < 2) {
        console.warn("AnimatedRoute: curva inválida", { from, to, points });
        return null;
      }

    useFrame((state, delta) => {
        if (startTime.current === null) startTime.current = state.clock.getElapsedTime();
        const elapsed = (state.clock.getElapsedTime() - startTime.current) * 1000;
        if (elapsed < delay) return;

        setProgress((prev) => Math.min(points.length - 1, prev + delta * 60 * speed));
    });

    const safeProgress = Math.max(1, Math.floor(progress));
    const shown = points.slice(0, Math.floor(progress));
    const moving = points[Math.floor(progress)];

    return (
        <group>
            {shown.length >= 2 && (
        <Line points={shown} color={color} lineWidth={1.8} />
      )}

      {moving && (
        <mesh position={moving}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial
            color={color}
            emissive={new THREE.Color(color).multiplyScalar(0.6)}
          />
        </mesh>
      )}
    </group>
    );
}
