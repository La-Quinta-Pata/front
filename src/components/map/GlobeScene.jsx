import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import AnimatedRoute from "./AnimatedRoute";
import { latLonToVector3 } from "./helpers/coordinates";

export default function GlobeScene({ mode }) {
  const earthTexture = useLoader(THREE.TextureLoader, "/earth.jpg");

  const globeRef = useRef();
  const globeMat = useRef();

  const routes = [
    { from: { lat: -23.55, lon: -46.63 }, to: { lat: 41.38, lon: 2.17 }, color: "#FF3B30", delay: 200 },   // Rojo brillante
    { from: { lat: 4.71, lon: -74.07 },   to: { lat: 41.38, lon: 2.17 }, color: "#FF9500", delay: 800 },   // Naranja
    { from: { lat: -34.60, lon: -58.38 }, to: { lat: 41.38, lon: 2.17 }, color: "#FFCC00", delay: 1400 },  // Amarillo
    { from: { lat: -12.04, lon: -77.04 }, to: { lat: 41.38, lon: 2.17 }, color: "#34C759", delay: 2000 },  // Verde brillante
    { from: { lat: -16.48, lon: -68.11 }, to: { lat: 41.38, lon: 2.17 }, color: "#007AFF", delay: 2600 },  // Azul eléctrico
    { from: { lat: -0.18, lon: -78.46 },  to: { lat: 41.38, lon: 2.17 }, color: "#AF52DE", delay: 3200 },  // Morado vibrante
  ];

  const targetGlobal = new THREE.Vector3(0, 0, 6);
  const bcn = latLonToVector3(41.38, 2.17, 2);
  const targetFly = bcn.clone().multiplyScalar(1.9);
  const targetCity = bcn.clone().multiplyScalar(2.8);

  useFrame((state) => {
    if (mode === "global") {
      globeRef.current.rotation.y -= 0.0025;
      state.camera.position.lerp(targetGlobal, 0.04);
      state.camera.lookAt(0, 0, 0);
      globeMat.current.opacity = THREE.MathUtils.lerp(globeMat.current.opacity, 1, 0.06);
    }

    if (mode === "flying") {
      state.camera.position.lerp(targetFly, 0.03);
      state.camera.lookAt(0, 0, 0);
      globeMat.current.opacity = THREE.MathUtils.lerp(globeMat.current.opacity, 0.25, 0.02);
    }

    if (mode === "city") {
      state.camera.position.lerp(targetCity, 0.04);
      state.camera.lookAt(bcn);
      globeMat.current.opacity = THREE.MathUtils.lerp(globeMat.current.opacity, 0, 0.04);
    }
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} />

      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial ref={globeMat} map={earthTexture} transparent opacity={1} />
        </mesh>

        {(mode === "global" || mode === "flying") &&
          routes.map((route, i) => (
            <AnimatedRoute key={i} {...route} />
          ))}
      </group>

      <OrbitControls enableZoom enableRotate={mode !== "city"} enablePan={false} />
    </>
  );
}

