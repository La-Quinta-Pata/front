import { useState } from "react";

export default function TeamCard({ image, name, role, description }) {
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

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <article
      onClick={toggleFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip();
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`Tarjeta de ${name}, ${role}. Click para ver más información`}
      className="w-full max-w-[16rem] h-72 sm:h-80 md:h-80 perspective cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-xl mx-auto"
    >
      <section
        className={`relative w-full h-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <figure
          className="absolute inset-0 backface-hidden border-2 border-purple-700 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-colors duration-800"
          style={{
            backgroundColor: hoverColor || "white",
            color: hoverColor ? "white" : "black",
          }}
        >
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full mb-4 sm:mb-6"
          />
          <figcaption className="font-semibold text-base sm:text-lg">
            {name}
          </figcaption>
        </figure>

        <section
          className="absolute inset-0 backface-hidden rotate-y-180 border-2 border-purple-700 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-colors duration-700"
          style={{ backgroundColor: hoverColor || "#55155D", color: "white" }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            {role}
          </h3>
          <p className="text-xs sm:text-sm md:text-base max-w-[85%] leading-relaxed">
            {description}
          </p>
        </section>
      </section>
    </article>
  );
}