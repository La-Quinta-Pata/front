import ImagenTitulo from '../assets/images/ImagenTitulo.png';

export default function PageBanner() {
    return (
<section className="relative w-full h-32 sm:h-40 md:h-48 lg:h-30 overflow-hidden bg-[#4b1252]">
    <figure className="absolute inset-0 w-full h-full">
        <img
            src={ImagenTitulo}
            alt="Muestra Archivo Comunitario de Memorias Migrantes"
            className="w-full h-full object-cover opacity-40"
        />
    </figure>
    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-[#4b1252]"/>

            <section className="relative z-10 flex items-center justify-center h-full px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-wide text-center text-white flex flex-col gap-2">
                    <span className="space-x-4">
                        <span><span className="font-black text-[1.1em] text-[#fcd249]">M</span>EMORIAS</span>
                        <span><span className="font-black text-[1.1em] text-[#fcd249]">M</span>IGRANTES</span>
                    </span>
                </h2>
            </section>
        </section>
    );
}