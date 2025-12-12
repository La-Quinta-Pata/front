    export function getVideoFormFields(axes, migrants) {
    return [
        {
        label: "Título",
        name: "title",
        type: "text",
        required: true,
        },
        {
        label: "Descripción",
        name: "description",
        type: "textarea",
        rows: 3,
        required: true,
        },
        {
        label: "URL de YouTube",
        name: "url",
        type: "text",
        placeholder: "https://www.youtube.com/watch?v=...",
        required: true,
        customHandler: "handleUrlChange",
        },
        {
        label: "Thumbnail URL",
        name: "thumbnailUrl",
        type: "text",
        },
        {
        label: "Eje temático",
        name: "axisId",
        type: "select",
        placeholder: "Selecciona un eje",
        options: axes.map((axis) => ({
            value: axis.id,
            label: axis.type,
        })),
        required: true,
        },
        {
        label: "Migrante",
        name: "migrantId",
        type: "select",
        placeholder: "Selecciona una migrante",
        options: migrants.map((m) => ({
            value: m.id,
            label: m.name,
        })),
        required: true,
        },
    ];
    }