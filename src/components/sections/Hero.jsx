import GlobeExperience from "../map2/GlobeExperience";

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white text-black">

      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 items-center">

<h1 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight
bg-gradient-to-r from-emerald-600 to-[#EC4899]
bg-clip-text text-transparent
">          MEMORIAS MIGRANTES
        </h1>

        <p className="text-base lg:text-lg text-gray-700 max-w-md leading-relaxed">
          Un proyecto colaborativo que conecta historias, cultura y creatividad.
          Nuestro globo es la representación visual de las historias contadas en este página
          desde la origen - distintos países de Latinoamérica, hacia Barcelona.
        </p>

        <button
          className="
          justify-center
            mt-2 px-6 py-3 
            rounded-lg w-max 
            text-black font-semibold text-lg
            bg-gradient-to-r from-emerald-500 to-[#d0d0d0]
            shadow-md hover:shadow-lg
            hover:scale-[1.03] active:scale-[0.98]
            transition-all duration-300
            cursor-pointer
          "
        >
          Saber más
        </button>
      </div>

      <div className="w-full lg:w-1/2 h-[420px] lg:h-[650px] mt-10 lg:mt-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[520px]">
          <GlobeExperience />
        </div>
      </div>

    </section>
  );
}
