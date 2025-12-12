    export default function FormButtons({
    onCancel,
    submitText = "Guardar",
    cancelText = "Cancelar",
    loading = false,
    disabled = false,
    }) {
    return (
        <section className="flex flex-col sm:flex-row gap-3 pt-4">
        <button
            type="submit"
            disabled={loading || disabled}
            aria-busy={loading}
            className="flex-1 px-4 py-2 bg-[#003049] text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {loading ? "Guardando..." : submitText}
        </button>

        <button
            type="button"
            onClick={onCancel}
            disabled={loading || disabled}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {cancelText}
        </button>
        </section>
    );
    }