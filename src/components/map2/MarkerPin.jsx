import { useMemo } from "react";
import { latLonToXYZ } from "../../utils/latLonToXYZ";

export default function MarkerPin({ latLon, offsets, onClick }) {
  const pos = useMemo(() => {
    const v = latLonToXYZ(latLon[0], latLon[1], 2.04, offsets);
    return [v.x, v.y, v.z];
  }, [latLon, offsets]);

  return (
    <group
      position={pos}
      onPointerDown={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      cursor="pointer"
    >
     
      <mesh position={[0, -0.04, 0]}>
        <coneGeometry args={[0.035, 0.1, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}
