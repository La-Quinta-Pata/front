import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <>
    <section className="w-full flex flex-col items-center justify-center px-15">
    <h3 className="font-fira text-[#4b1252] text-2xl mb-5">Nuestro archivo de memorias</h3>
      <p className="text-justify mb-2">Construimos este proyecto desde la interculturalidad, el feminismo y la descolonialidad, como un acto político y afectivo frente al silencio y la invisibilización que han marcado históricamente nuestras vidas. </p>
      <p className="text-justify mb-2">El Archivo es un ejercicio historiográfico y testimonial subversivo frente a la narrativa unilateral y hegemónica de la ciudad y frente a la memoria oficial, selectiva y excluyente. Aquí, las personas participantes se reconocen como autoras y sujetos políticos capaces de cuestionar los discursos que perpetúan estereotipos y exclusiones. A través de narraciones autobiográficas reconstruimos, en primera persona, la historia de la migración y democratizamos la memoria urbana, rompiendo silencios históricos y visibilizando los territorios como espacios de disputa en torno a la migración, el racismo, el género y el uso del espacio público.</p>
      <p className="text-justify mb-2">El Archivo nace del recorrido de  Microhistorias Migrantes, un programa impulsado hace 14 años que cada año reúne a 12 personas migradas para contar sus experiencias en la diáspora. Actualmente reunimos 77 testimonios y más de 350 videos organizados en cinco ejes: autobiografía, objetos, discriminación por origen y género, y resistencia, conformando un retrato colectivo que enriquece la memoria de Barcelona y resignifica el lugar social de las personas migrantes.
      <p className="text-justify mb-2">Ponemos el Archivo a disposición pública a través de la web y redes sociales, acompañado por la 1ª Muestra Comunitaria de Microhistorias Migrantes, con proyecciones y encuentros abiertos.</p>
      <p className="text-center font-fira text-lg text-[#4b1252] font-bold mb-2">Porque contar nuestras historias es resistir.</p>
      <p className="text-center font-fira text-lg text-[#4b1252] font-bold mb-2">Porque la memoria migrante es un territorio que defendemos juntas.</p>
      <p className="text-center font-fira text-lg text-[#4b1252] font-bold">Porque existir también es hacer historia</p>

</p>       
    </section>
   

    </>
  );
}
