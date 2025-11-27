export default function InputField({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
    disabled = false,
    autoComplete
}) {
    return (
        <section className="w-full mb-4 sm:mb-6">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-semibold text-gray-700 sm:text-base"
            >
                {label}
                {required && <span className="text-red-500 ml-1" aria-label="obligatorio">*</span>}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                aria-required={required}
                aria-invalid={false}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-[#98BD16] rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#98BD16] focus:border-transparent
                disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                transition-all duration-200"
            />
        </section>
    );
}
