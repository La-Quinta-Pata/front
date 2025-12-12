import toast from "react-hot-toast";

export default function ConfirmToast({ message, onConfirm }) {
    return (
        <aside
            role="alertdialog"
            aria-labelledby="confirm-message"
            aria-describedby="confirm-actions"
            className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5 p-3 sm:p-4"
        >
            <p
                id="confirm-message"
                className="font-semibold text-gray-900 mb-3 text-sm sm:text-base"
            >
                {message}
            </p>

            <section
                id="confirm-actions"
                className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3"
                aria-label="Acciones de confirmación"
            >
                <button
                    type="button"
                    onClick={() => toast.dismiss()}
                    className="px-3 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    onClick={() => {
                        toast.dismiss();
                        onConfirm();
                    }}
                    className="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 active:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base"
                >
                    Eliminar
                </button>
            </section>
        </aside>
    );
}