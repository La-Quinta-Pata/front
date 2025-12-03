import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import FlatMapScene from "./FlatMapScene";
import useContainerSize from "../../hooks/useContainerSize";

export default function FlatMapExperience() {
  const [showIframe, setShowIframe] = useState(false);
  const containerRef = useRef(null);

  const size = useContainerSize(containerRef);

  useEffect(() => {
    const t = setTimeout(() => setShowIframe(true), 6500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">

      {!showIframe && (
        <Canvas className="w-full h-full block" camera={{ position: [0, 0, 3], fov: 50 }}>
          <FlatMapScene containerSize={size} />
        </Canvas>
      )}

      {showIframe && (
        <iframe
        title="mapa"
        src="https://www.google.com/maps/d/u/0/embed?mid=1Q4hgXqEiSO6s6AIG02QB_aKvEo8"
        className="
        absolute
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[60%] h-[60%]
        border-10 border-white
        bg-white shadow-lg rounded-[80px]
        animate-fadeIn
        rounded-[40px]
        m-5
        "
      />
      )}
    </div>
  );
}
