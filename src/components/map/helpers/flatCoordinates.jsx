import * as THREE from "three";

export function latLonToMapXY(lat, lon, mapWidth = 2.8, mapHeight = 1.6) {
  const xNorm = (lon + 180) / 360;
  const yNorm = (90 - lat) / 180;

  const x = xNorm * mapWidth - mapWidth / 2;
  const y = -(yNorm * mapHeight - mapHeight / 2);

  return [x, y];
}

export function makeFlatArcPoints(startXY, endXY, height = 0.25, points = 120) {
  const [x1, y1] = startXY;
  const [x2, y2] = endXY;

  const dx = x2 - x1;
  const dy = y2 - y1;

  const midX = x1 + dx * 0.5;
  const midY = y1 + dy * 0.5;

  const dist = Math.sqrt(dx * dx + dy * dy);
  const dynamicHeight = Math.max(height, dist * 0.25);

  const control = new THREE.Vector3(midX, midY, dynamicHeight);
  const start = new THREE.Vector3(x1, y1, 0);
  const end = new THREE.Vector3(x2, y2, 0);

  const curve = new THREE.QuadraticBezierCurve3(start, control, end);
  return curve.getPoints(points);
}
