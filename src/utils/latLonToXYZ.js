import * as THREE from "three";

/**
 * Conversión Lat/Lon → XYZ en esfera 3D
 * Incluye ajustes para textura vintage (desplazada a la derecha ~13°)
 */
export function latLonToXYZ(lat, lon, radius = 2, offsets = {}) {
  const {
    lonOffsetDeg = 13, // calibración perfecta para tu mapa
    latOffsetDeg = 0,
    rotationDeg = 0,
    radiusScale = 1,
  } = offsets;

  const fixedLat = lat + latOffsetDeg;
  const fixedLon = lon + lonOffsetDeg;

  const phi = (90 - fixedLat) * (Math.PI / 180);
  const theta =
    (fixedLon + 180) * (Math.PI / 180) + (rotationDeg * Math.PI / 180);

  const r = radius * radiusScale;

  const x = -r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.cos(phi);
  const z = r * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}