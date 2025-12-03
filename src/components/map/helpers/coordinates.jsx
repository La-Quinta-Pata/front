import * as THREE from "three";

export function latLonToVector3(lat, lon, radius = 2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

export function makeArcCurveOnSphere(startVec3, endVec3, heightFactor = 1.25, points = 140) {
  const mid = startVec3.clone().add(endVec3).multiplyScalar(0.5).normalize()
    .multiplyScalar(startVec3.length() * heightFactor);

  const curve = new THREE.QuadraticBezierCurve3(startVec3, mid, endVec3);
  return curve.getPoints(points);
}


