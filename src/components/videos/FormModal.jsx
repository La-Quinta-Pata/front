export default function FormModal({
    title,
    onClose,
    loading,
    loadingMessage = "Cargando datos...",
    children,
    size = "md",
    backdrop = "dark",
}) {
    const sizeClasses = {
        sm: "max-w-md",
        md: "max-w-md sm:max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-3xl w-[90%]",
    };

    const backdropClasses = {
        dark: "bg-black/40",
        darker: "bg-black/60 backdrop-blur-sm",
    };

    return (
        <section
            className={`fixed inset-0 ${backdropClasses[backdrop]} flex items-center justify-center p-4 z-50`}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <article
                className={`bg-white w-full ${sizeClasses[size]} p-4 sm:p-6 rounded-xl shadow-xl max-h-[90vh] overflow-y-auto`}
                onClick={(e) => e.stopPropagation()}
            >
                {title && (
                    <section className="mb-4 sm:mb-6">
                        <h2 id="modal-title" className="text-xl sm:text-2xl font-semibold">
                            {title}
                        </h2>
                    </section>
                )}

                {loading ? (
                    <p className="text-center py-8">{loadingMessage}</p>
                ) : (
                    children
                )}
            </article>
        </section>
    );
}