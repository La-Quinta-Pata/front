    import getEmbedUrl from "../../utils/getEmbedUrl";
    import FormModal from "./FormModal";

    export default function VideoModal({ video, onClose }) {
    if (!video) return null;

    return (
        <FormModal onClose={onClose} size="xl" backdrop="darker">
        <section className="aspect-video w-full" aria-label="Reproductor de video">
            <iframe
            className="w-full h-full rounded-lg"
            src={getEmbedUrl(video.url)}
            title={`Video: ${video.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            />
        </section>

        <article className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
            {video.title}
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {video.description}
            </p>

            <dl className="text-sm sm:text-base grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 sm:gap-x-4">
            <dt className="font-semibold text-gray-700">Autor:</dt>
            <dd className="text-gray-900">{video.migrantName}</dd>
            
            <dt className="font-semibold text-gray-700">País:</dt>
            <dd className="text-gray-900">{video.migrantOrigin}</dd>
            
            <dt className="font-semibold text-gray-700">Eje:</dt>
            <dd className="text-gray-900">{video.axisType}</dd>
            </dl>

            <button
            type="button"
            className="mt-2 sm:mt-4 w-full px-4 py-2.5 sm:py-3 bg-[#D62828] text-white text-sm sm:text-base rounded-lg hover:bg-red-900 active:bg-red-950 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={onClose}
            aria-label="Cerrar modal de video"
            >
            Cerrar
            </button>
        </article>
        </FormModal>
    );
    }