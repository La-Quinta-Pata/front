import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function DevTeamCard({ name, github, linkedin }) {
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
    <article
      className="w-full max-w-[16rem] h-60 perspective cursor-pointer mx-auto
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-xl"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`Tarjeta de ${name}. Mostrar enlaces`}
    >
      <section
        className={`relative w-full h-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 backface-hidden border-2 border-purple-700 rounded-xl p-6 
                     flex items-center justify-center text-center transition-colors duration-800"
          style={{
            backgroundColor: hoverColor || "white",
            color: hoverColor ? "white" : "#3b0764",
          }}
        >
          <h3 className="text-xl font-semibold">
            {name}
          </h3>
        </div>
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 
                     border-2 border-purple-700 rounded-xl p-6 
                     flex flex-col items-center justify-center gap-4
                     transition-colors duration-800"
          style={{
            backgroundColor: hoverColor || "#55155D",
            color: "white",
          }}
        >
          <div className="flex gap-6 text-3xl">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} LinkedIn`}
              >
                <FaLinkedin />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} GitHub`}
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
