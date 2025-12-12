    export default function FormField({
    label,
    name,
    type = "text",
    value,
    onChange,
    error,
    required = false,
    placeholder,
    rows,
    options = [],
    className = "",
    }) {
    const inputId = `field-${name}`;
    const errorId = `error-${name}`;
    const isTextarea = type === "textarea";
    const isSelect = type === "select";

    const baseClasses = "w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const errorClasses = error ? "border-red-500" : "border-gray-300";

    const sharedProps = {
        id: inputId,
        name,
        value,
        onChange,
        required,
        "aria-invalid": error ? "true" : "false",
        "aria-describedby": error ? errorId : undefined,
        className: `${baseClasses} ${errorClasses} ${className}`,
    };

    return (
        <fieldset className="space-y-1">
        <label htmlFor={inputId} className="block font-medium text-gray-700">
            {label} {required && <span aria-label="campo obligatorio">*</span>}
        </label>

        {isTextarea ? (
            <textarea {...sharedProps} rows={rows || 3} placeholder={placeholder} />
        ) : isSelect ? (
            <select {...sharedProps}>
            <option value="">{placeholder || "Selecciona una opción"}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
            </select>
        ) : (
            <input {...sharedProps} type={type} placeholder={placeholder} />
        )}

        {error && (
            <p id={errorId} role="alert" className="text-red-600 text-sm">
            {error}
            </p>
        )}
        </fieldset>
    );
    }