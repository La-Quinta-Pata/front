export default function Button({
    children,
    type = "button",
    onClick,
    disabled = false,
    loading = false,
    fullWidth = true 
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            aria-busy={loading}
            aria-disabled={disabled || loading}
            className={`
                ${fullWidth ? 'w-full' : 'w-auto'}
                px-4 py-2 sm:px-6 sm:py-3
                text-sm sm:text-base font-bold text-white
                bg-[#98BD16] rounded-lg
                hover:bg-[#86a614] active:bg-[#7a9512]
                focus:outline-none focus:ring-2 focus:ring-[#98BD16] focus:ring-offset-2
                disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60
                transition-all duration-200
                shadow-sm hover:shadow-md
            `}
        >
            {loading ? (
                <span className="flex items-center justify-center">
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    <span>Cargando...</span>
                </span>
            ) : children}
        </button>
    );
}