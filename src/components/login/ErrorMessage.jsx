export default function ErrorMessage({ message }) {
    if (!message) return null;

    return (
        <aside
            role="alert"
            aria-live="assertive"
            className="w-full mb-4 sm:mb-6 p-3 sm:p-4
            bg-red-50 border-2 border-red-400 rounded-lg
            text-red-700 text-sm sm:text-base
            animate-shake"
        >
            <strong className="font-semibold block sm:inline">Error: </strong>
            <span className="block sm:inline mt-1 sm:mt-0">{message}</span>
        </aside>
    );
}