
import AboutUsSection from "../components/sections/AboutUsSection";
import aboutUsData from "../data/teamData";


export default function AboutUs() {
  return (
    <div className="w-full px-6 md:px-20 py-12">
      <h1 className="text-center text-purple-950 text-4xl font-bold mb-10">Quiénes Somos</h1>

      <p className="max-w-3xl mx-auto text-center text-lg mb-16 text-purple-900">
        La Quinta Pata es una Asociación Cultural que desde 2009 impulsa proyectos de pedagogía crítica a través del arte y la acción colectiva en torno a los temas de racismo, fronteras y género. Trabajamos con una mirada feminista, intercultural y decolonial, comprometidas con la Economía Social y Solidaria y la defensa de los Derechos Humanos.
        Desde el corazón del Raval creamos espacios de resistencia para transformar experiencias migrantes en fuerza colectiva. Creemos en la cultura como herramienta política de transformación, memoria y justicia.
      </p>

      <AboutUsSection title="Equipo" items={aboutUsData.equipo} />
      <AboutUsSection title="Colaboración Académica" items={aboutUsData.colaboracionAcademica} />
      <AboutUsSection title="Diseño Web" items={aboutUsData.disenoWeb} />
    </div>
  )
}
