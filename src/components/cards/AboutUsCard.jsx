import React, { useState } from "react";

export default function AboutUsCard({ image, name, role, description }) {
  const [flipped, setFlipped] = useState(false);
  const [hoverColor, setHoverColor] = useState(null);

  const colors = ["#7E3488", "#55155D", "#350E3A", "#FCBF49"];

  const handleMouseEnter = () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(random);
  };

  const handleMouseLeave = () => {
    setHoverColor(null);
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-80 perspective cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-500 
          ${flipped ? "rotate-y-180" : ""}
        `}
        style={{ transformStyle: "preserve-3d" }}
      >

        <div
          className="
            absolute inset-0 
            backface-hidden 
            border border-purple-700 rounded-xl 
            p-4 
            flex flex-col items-center justify-center 
            text-center 
            transition-colors duration-300
          "
          style={{ backgroundColor: hoverColor || "white", color: hoverColor ? "white" : "black" }}
        >
          <img
            src={image}
            alt={name}
            className="w-28 h-28 object-cover rounded-full mb-6"
          />

          <p className="font-semibold">{name}</p>
        </div>
        <div
          className="
            absolute inset-0 
            backface-hidden 
            rotate-y-180 
            border border-purple-700 rounded-xl 
            p-4 
            flex flex-col items-center justify-center 
            text-center 
            transition-colors duration-300
          "
          style={{ backgroundColor: hoverColor || "#55155D", color: "white" }}
        >
          <p className="text-xl font-semibold mb-2">{role}</p>
          <p className="text-sm max-w-[85%]">{description}</p>
        </div>
      </div>
    </div>
  )
}
