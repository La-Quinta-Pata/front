import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import MarkerPin from "./MarkerPin";
import AnimatedRoute from "./AnimatedRoute";

export default function Globe({ onBarcelonaClick, showPanel }) {
    const earthTexture = useLoader(THREE.TextureLoader, "src/assets/images/map.jpg");
    const globeRef = useRef();

    const BARCELONA = [41.38, 2.17];

    const ROUTES = [
        { from: [-23.55, -46.63], color: "#ff3b30" }, // BR
        { from: [4.71, -74.07], color: "#34c759" },   // COL
        { from: [-34.60, -58.38], color: "#ff9500" }, // ARG
        { from: [-33.45, -70.66], color: "#ffcc00" }, // Chile
        { from: [-12.04, -77.04], color: "#af52de" }, // PER
        { from: [10.48, -66.91], color: "#00c7be" },  // VEN
        { from: [19.43, -99.13], color: "#ff2d55" },  // MEX
    ];

    // calibrar las rutas si necesario (por si queréis cambiar el mapa)
    const offsets = {
        lonOffsetDeg: -15,
        latOffsetDeg: -21,
        rotationDeg: 1.5,
        radiusScale: 1,
    };

    return (
        <group ref={globeRef}>
            <mesh>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial map={earthTexture} />
            </mesh>

            {ROUTES.map((route, i) => (
                <AnimatedRoute
                    key={i}
                    from={route.from}
                    to={BARCELONA}
                    color={route.color}
                    offsets={offsets}
                />
            ))}
            {!showPanel && (
                <MarkerPin
                    latLon={BARCELONA}
                    offsets={offsets}
                    onClick={onBarcelonaClick}
                />
            )}
        </group>
    );
}
