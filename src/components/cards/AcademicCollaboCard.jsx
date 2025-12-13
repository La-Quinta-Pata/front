import { useState } from "react";

export default function AcademicCollaborationCard({ name, role }) {
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
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-[16rem] border-2 border-purple-700 rounded-xl p-6 
                 text-center transition-colors duration-800 mx-auto"
      style={{
        backgroundColor: hoverColor || "white",
        color: hoverColor ? "white" : "#3b0764", 
      }}
    >
      <h3 className="text-xl font-semibold mb-2">
        {name}
      </h3>
      <p className="text-base">
        {role}
      </p>
    </article>
  );
}

