export default function SelectField({
    id,
    label,
    value,
    onChange,
    options,
    required = false,
    disabled = false
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
            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                aria-required={required}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-[#003049]] rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#003049]] focus:border-transparent
                disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
                transition-all duration-200"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </section>
    );
}