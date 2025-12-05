export default function Modal({ isOpen, onClose, type = "success", title, message, onConfirm }) {
    if (!isOpen) return null;

    const styles = {
        success: {
            border: "border-[#98BD16]",
            bg: "bg-green-50",
            text: "text-gray-800",
            icon: "✓",
            iconBg: "bg-[#98BD16]",
            iconText: "text-white"
        },
        error: {
            border: "border-red-600",
            bg: "bg-red-50",
            text: "text-gray-800",
            icon: "✕",
            iconBg: "bg-red-600",
            iconText: "text-white"
        },
        warning: {
            border: "border-yellow-600",
            bg: "bg-yellow-50",
            text: "text-gray-800",
            icon: "⚠",
            iconBg: "bg-yellow-600",
            iconText: "text-white"
        },
        info: {
            border: "border-blue-600",
            bg: "bg-blue-50",
            text: "text-gray-800",
            icon: "ℹ",
            iconBg: "bg-blue-600",
            iconText: "text-white"
        }
    };

    const currentStyle = styles[type] || styles.success;
    const isConfirmModal = type === "warning" && onConfirm;

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
        onClose();
    };

    const handleBackdropClick = (e) => {
        if (!isConfirmModal && e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <aside
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={handleBackdropClick}
        >
            <article
                className={`w-full max-w-md p-6 sm:p-8 bg-white border-2 ${currentStyle.border} rounded-lg shadow-xl`}
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex items-start justify-between mb-4">
                    <section className="flex items-center gap-3">
                        <span 
                            className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl font-bold rounded-full ${currentStyle.iconBg} ${currentStyle.iconText}`}
                            aria-hidden="true"
                        >
                            {currentStyle.icon}
                        </span>
                        <h2 
                            id="modal-title" 
                            className={`text-xl sm:text-2xl font-bold ${currentStyle.text}`}
                        >
                            {title}
                        </h2>
                    </section>
                    
                    {!isConfirmModal && (
                        <button
                            onClick={onClose}
                            className="text-2xl sm:text-3xl font-bold text-gray-600 rounded hover:text-gray-900 
                            focus:outline-none focus:ring-2 focus:ring-[#98BD16] focus:ring-offset-2 
                            transition-colors ml-2"
                            aria-label="Cerrar modal"
                        >
                            ×
                        </button>
                    )}
                </header>

                <p className={`mb-6 text-sm sm:text-base ${currentStyle.text}`}>
                    {message}
                </p>

                <footer>
                    {isConfirmModal ? (
                        <section className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={onClose}
                                className="flex-1 px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold 
                                text-gray-700 bg-white border-2 border-gray-300 rounded-lg
                                hover:bg-gray-50 active:bg-gray-100
                                focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
                                transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="flex-1 px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold 
                                text-white bg-[#98BD16] rounded-lg
                                hover:bg-[#7a9912] active:bg-[#6a8510]
                                focus:outline-none focus:ring-2 focus:ring-[#98BD16] focus:ring-offset-2
                                transition-colors"
                            >
                                Confirmar
                            </button>
                        </section>
                    ) : (
                        <button
                            onClick={onClose}
                            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold 
                            text-white bg-[#98BD16] rounded-lg
                            hover:bg-[#7a9912] active:bg-[#6a8510]
                            focus:outline-none focus:ring-2 focus:ring-[#98BD16] focus:ring-offset-2
                            transition-colors"
                        >
                            Aceptar
                        </button>
                    )}
                </footer>
            </article>
        </aside>
    );
}