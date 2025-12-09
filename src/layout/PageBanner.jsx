import ImagenTitulo from '../assets/images/ImagenTitulo.png';

export default function PageBanner() {
    return (
<section className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 overflow-hidden bg-white">
    <figure className="absolute inset-0 w-full h-full">
        <img
            src={ImagenTitulo}
            alt="Muestra Archivo Comunitario de Memorias Migrantes"
            className="w-full h-full object-cover opacity-40"
        />
    </figure>

            <section className="relative z-10 flex items-center justify-center h-full px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-center text-[#003049] flex flex-col gap-2">
                    <span className="space-x-4">
                        <span><span className="font-black text-[1.1em] text-[#001a2e]">M</span>EMORIAS</span>
                        <span><span className="font-black text-[1.1em] text-[#001a2e]">M</span>IGRANTES</span>
                    </span>
                </h2>
            </section>
        </section>
    );
}