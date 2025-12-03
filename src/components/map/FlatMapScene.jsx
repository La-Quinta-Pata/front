// src/components/map/FlatMapScene.jsx
import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import AnimatedFlatRoute from "./AnimatedFlatRoute";
import { latLonToMapXY } from "./helpers/flatCoordinates";

/**
 * FlatMapScene
 * - Recibe containerSize: { width, height } desde FlatMapExperience
 * - Calcula planeWidth/planeHeight para comportarse como object-cover
 * - Recalcula rutas según ese tamaño
 *
 * Mínimos cambios: reemplaza tu archivo anterior por éste.
 */
export default function FlatMapScene({ containerSize = { width: 0, height: 0 } }) {
  const texture = useLoader(THREE.TextureLoader, "/world-map.jpg");

  // Si no tenemos tamaño del contenedor o la textura aún no se ha cargado,
  // no renderizamos nada para evitar cálculos con NaN.
  const width = containerSize?.width || 0;
  const height = containerSize?.height || 0;
  if (!width || !height || !texture?.image || !texture.image.width) return null;

  // Aspect ratios
  const containerAR = width / height;
  const imageAR = texture.image.width / texture.image.height;

  // ---------- object-cover logic para el plane ----------
  // Elegimos una "unidad base" para la dimensión mayor del plano.
  // Puedes bajar 2.5 a 2.0 o subir a 3.0 según cómo quieras el zoom.
  const BASE = 2.5;

  let planeWidth = BASE;
  let planeHeight = BASE;

  if (containerAR > imageAR) {
    // contenedor más ancho -> expandir ancho del plano
    planeWidth = BASE * (containerAR / imageAR);
    planeHeight = planeWidth / containerAR;
  } else {
    // contenedor más alto -> expandir alto del plano
    planeHeight = BASE * (imageAR / containerAR);
    planeWidth = planeHeight * containerAR;
  }

  // Ahora planeWidth/planeHeight están escaladas para "cubrir" el contenedor
  // sin deformar la imagen (comportamiento object-cover).
  const mapWidth = planeWidth;
  const mapHeight = planeHeight;

  // Calculamos Barcelona y las rutas con las dimensiones actualizadas
  const barcelona = latLonToMapXY(41.38, 2.17, mapWidth, mapHeight);

  const routes = useMemo(
    () => [
      { from: latLonToMapXY(-23.55, -46.63, mapWidth, mapHeight), color: "#FF3B30", delay: 0 },      // São Paulo
      { from: latLonToMapXY(4.71, -74.07, mapWidth, mapHeight), color: "#FF9500", delay: 600 },      // Bogotá
      { from: latLonToMapXY(-34.60, -58.38, mapWidth, mapHeight), color: "#FFCC00", delay: 1200 },   // Buenos Aires
      { from: latLonToMapXY(-12.04, -77.04, mapWidth, mapHeight), color: "#34C759", delay: 1800 },   // Lima
      { from: latLonToMapXY(-16.48, -68.11, mapWidth, mapHeight), color: "#007AFF", delay: 2400 },   // La Paz
      { from: latLonToMapXY(-0.18, -78.46, mapWidth, mapHeight), color: "#AF52DE", delay: 3000 }     // Quito
    ],
    // recalcular si cambia el tamaño del plano
    [mapWidth, mapHeight]
  );

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />

      {/* Plano que actúa como "background-cover" */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* Rutas animadas */}
      {routes.map((r, i) => (
        <AnimatedFlatRoute
          key={i}
          from={r.from}
          to={barcelona}
          color={r.color}
          delay={r.delay}
          arcHeight={0.18}
          speed={1}
        />
      ))}

      {/* Marcador en Barcelona */}
      <mesh position={[barcelona[0], barcelona[1], 0.02]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  );
}
