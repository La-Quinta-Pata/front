import GlobeExperience from "../map2/GlobeExperience";

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-1 bg-white text-black">

      <section className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 items-center">

<h1 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight
bg-gradient-to-r from-emerald-600 to-[#EC4899]
bg-clip-text text-transparent
">          MEMORIAS MIGRANTES
        </h1>

        <p className="text-base lg:text-lg text-gray-700 text-center leading-relaxed">
        La 1a Muestra Archivo Comunitario de Memorias Migrantes (MACMM) es un proyecto de reflexión y creación individual y 
        colectiva sobre migración, racismo, fronteras, género, diversidades, articulado desde la interculturalidad, el feminismo y la descolonialidad. 

        Nuestro globo es la representación visual de las historias contadas en este página
        desde la origen - distintos países de Latinoamérica, hacia Barcelona.
        </p>

        <button
          className="
          justify-center
          mt-2 px-6 py-3 
          rounded-lg w-max 
          text-pink-900 font-semibold text-lg
          bg-gradient-to-r from-emerald-500 to-[#EC4899]
          shadow-md hover:shadow-lg
          hover:scale-[1.03] active:scale-[0.98]
          transition-all duration-300
          cursor-pointer
          "
        >
          Saber más
        </button>
      </section>

      <section className="w-full lg:w-2/3 h-[300px] lg:h-[600px] mt-10 lg:mt-0 mb-0 flex items-center justify-center">
        <section className="w-full h-full max-w-[520px]">
          <GlobeExperience />
        </section>
      </section>

    </section>
  );
}
