import { useRef, useEffect } from "react";
import * as THREE from "three";
import { latLonToXYZ } from "../../utils/latLonToXYZ";
import { useFrame } from "@react-three/fiber";

export default function AnimatedRoute({ from, to, color, offsets }) {
  const lineRef = useRef();
  const progressRef = useRef(0);

  useEffect(() => {
    progressRef.current = 0; 
  }, []);

  const start = latLonToXYZ(from[0], from[1], 2, offsets);
  const end   = latLonToXYZ(to[0], to[1], 2, offsets);

  const distance = start.distanceTo(end);
  const height = 2.2 + distance * 0.25;

  const mid = start
    .clone()
    .add(end)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(height);

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const points = curve.getPoints(150);

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const totalPoints = points.length;

  useFrame((_, delta) => {
    if (!lineRef.current) return;

    progressRef.current += delta * 25; 

    const drawCount = Math.min(totalPoints, Math.floor(progressRef.current));

    lineRef.current.geometry.setDrawRange(0, drawCount);
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry" {...geometry} />

      <lineBasicMaterial
        attach="material"
        color={color}
        linewidth={1}
        transparent={false}
        opacity={1} 
      />
    </line>
  );
}
