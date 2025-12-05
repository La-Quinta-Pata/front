import GlobeExperience from "../map2/GlobeExperience";
import ImagenInicio from '../../assets/images/ImagenHome.png'

export default function Hero() {
  return (
    <main className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center p-6 lg:p-10 bg-white text-black">
      <section className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10">
        <article className="relative flex justify-center w-full lg:w-1/2">

          <figcaption
            className="w-full max-w-xl p-10 lg:p-12 bg-amber-50 rounded-4xl shadow-xl shadow-black/50 border border-gray-200 z-30 
              flex flex-col items-center justify-center text-center mt-16 lg:mt-20 lg:-translate-y-5">

            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-wide text-red-600 mb-3">
              MEMORIAS MIGRANTES
            </h1>

            <p className="text-sm lg:text-base text-gray-800 leading-relaxed mb-4 text-justify">
              Un proyecto colaborativo que conecta historias, cultura y creatividad. Nuestro globo es la representación visual de las historias contadas en este página desde la origen - distintos países de Latinoamérica, hacia Barcelona.
            </p>

            <button
              className="mt-2 px-8 py-6 rounded-lg w-max text-white font-semibold text-base bg-blue-900 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              aria-label="Saber más sobre el proyecto Memorias Migrantes"
            >
              Saber más
            </button>
          </figcaption>
<figure 
  className="absolute z-20 w-64 h-64 lg:w-90 lg:h-90 rounded-lg overflow-hidden shadow-lg
  top-15 lg:top-0 left-1/2 lg:left-0
  transform -translate-x-1/2 lg:-translate-x-1/3 -translate-y-1/2">
  
  <img
    src={ImagenInicio}
    alt="Mujeres de memorias migratorias"
    className="w-full h-full object-cover"
  />
</figure>


        </article>

        <section className="w-full lg:w-1/2 h-[300px] lg:h-[500px] mt-10 lg:mt-0 flex items-center justify-center">
          <section className="w-full h-full max-w-[520px]">
            <GlobeExperience />
          </section>
        </section>

      </section>
    </main>
  );
}