import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Globe from "./Globe";

export default function GlobeExperience() {
  const [showPanel, setShowPanel] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const handleUserInteraction = () => {
    setAutoRotate(false);
  };

  return (
    <section className="relative w-full h-full bg-transparent cursor-pointer">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Globe onBarcelonaClick={() => setShowPanel(true)} showPanel={showPanel}/>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          autoRotate={autoRotate}
          autoRotateSpeed={-0.6}
          onStart={handleUserInteraction}
        />
      </Canvas>

      {showPanel && (
        <div className="absolute inset-0 flex justify-end z-50">
          <div className="w-full sm:w-[400px] h-full bg-white shadow-2xl relative">
            <button
              onClick={() => setShowPanel(false)}
              className="absolute top-3 left-3 w-9 h-9 bg-white text-black rounded-full flex items-center justify-center text-xl"
            >
              ✕
            </button>

            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1Q4hgXqEiSO6s6AIG02QB_aKvEo8"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
