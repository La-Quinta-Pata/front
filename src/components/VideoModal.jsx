import getEmbedUrl from "../utils/getEmbedUrl";

export default function VideoModal({ video, onClose }) {
    if (!video) return null;

    return (
        <section
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <section
                className="bg-white max-w-3xl w-[90%] rounded-xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <section className="aspect-video w-full">
                    <iframe
                        className="w-full h-full"
                        src={getEmbedUrl(video.url)}
                        title={video.title}
                        frameBorder="0"
                        allowFullScreen
                    />
                </section>

                <section className="p-6 flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">{video.title}</h2>
                    <p className="text-sm text-gray-600">{video.description}</p>

                    <section className="text-sm">
                        <strong>Autor:</strong> {video.migrantName}<br />
                        <strong>País:</strong> {video.migrantOrigin}<br />
                        <strong>Eje:</strong> {video.axisType}
                    </section>

                    <button
                        className="mt-6 px-4 py-2 bg-[#D62828] text-white rounded-lg hover:bg-red-900 transition cursor-pointer"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </section>
            </section>
        </section>
    );
}
