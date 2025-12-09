import { useMemo } from "react";
import { Html } from "@react-three/drei";
import { latLonToXYZ } from "../../utils/latLonToXYZ";
import { Pin } from 'lucide-react';

export default function MarkerPin({ latLon, offsets, onClick }) {
  const pos = useMemo(() => {
    const v = latLonToXYZ(latLon[0], latLon[1], 2.04, offsets);
    return [v.x, v.y, v.z];
  }, [latLon, offsets]);

  return (
    <group position={pos}>
      <Html
        distanceFactor={3}      
        center
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="
            bg-gray-200 text-black text-xs
            px-1 py-1 rounded-md shadow-lg
            border border-black/20
            hover:bg-black hover:text-white
            transition-all duration-300
            cursor-pointer
          "
        >
          <Pin />
        </div>
      </Html>
    </group>
  );
}
