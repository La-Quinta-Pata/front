    export function mapToOptions(items, valueKey = "id", labelKey = "name") {
    return items.map((item) => ({
        value: item[valueKey],
        label: item[labelKey],
    }));
    }

    export function parseServerErrors(errorDetails) {
    const mapped = {};
    errorDetails.split(", ").forEach((entry) => {
        const [field, msg] = entry.split(": ");
        mapped[field] = msg;
    });
    return mapped;
    }

    export function extractYouTubeId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
        /(?:youtu\.be\/)([^&\n?#]+)/,
        /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
        /(?:youtube\.com\/live\/)([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
    }

    export function validateVideoForm(formData) {
    const errors = {};

    if (!formData.title.trim()) {
        errors.title = "El título es obligatorio";
    } else if (formData.title.length > 100) {
        errors.title = "El título no debe tener más de 100 caracteres";
    }

    if (!formData.description.trim()) {
        errors.description = "La descripción es obligatoria";
    } else if (formData.description.length > 500) {
        errors.description = "La descripción no debe tener más de 500 caracteres";
    }

    if (!formData.url.trim()) {
        errors.url = "La URL del video es obligatoria";
    } else if (!extractYouTubeId(formData.url)) {
        errors.url = "Ingresa una URL válida de YouTube";
    }

    if (!formData.axisId) {
        errors.axisId = "Debes seleccionar un eje";
    }

    if (!formData.migrantId) {
        errors.migrantId = "Selecciona una migrante";
    }

    return errors;
    }