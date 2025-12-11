    import { useState, useEffect } from "react";
    import { createVideo, updateVideo } from "../services/videos";
    import { getAxes } from "../services/axes";
    import toast from "react-hot-toast";
    import MyToast from "./MyToast";

    export default function VideoForm({ video, onClose, onSuccess }) {
    const isEditing = !!video;

    const [formData, setFormData] = useState({
        title: video?.title || "",
        description: video?.description || "",
        url: video?.url || "",
        thumbnailUrl: video?.thumbnailUrl || "",
        axisId: video?.axisId || "",
        migrantName: "",
        migrantLastName: "",
        originCountry: "",
    });

    const [axes, setAxes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
        const axesData = await getAxes();
        setAxes(axesData);
        } catch (error) {
        toast.custom(
            <MyToast
            title="Error al cargar datos"
            message="No se pudieron cargar los ejes"
            type="error"
            />
        );
        }
    }

    function extractYouTubeId(url) {
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

    function handleUrlChange(e) {
        const url = e.target.value;
        const videoId = extractYouTubeId(url);
        const thumbnailUrl = videoId
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : "";

        setFormData({
        ...formData,
        url,
        thumbnailUrl,
        });
    }

    function validateForm() {
        const newErrors = {};

        if (!formData.title.trim()) {
        newErrors.title = "El título es obligatorio";
        } else if (formData.title.length > 100) {
        newErrors.title = "El título no debe tener más de 100 caracteres";
        }

        if (!formData.description.trim()) {
        newErrors.description = "La descripción es obligatoria";
        } else if (formData.description.length > 500) {
        newErrors.description =
            "La descripción no debe tener más de 500 caracteres";
        }

        if (!formData.url.trim()) {
        newErrors.url = "La URL del video es obligatoria";
        } else if (!extractYouTubeId(formData.url)) {
        newErrors.url = "Ingresa una URL válida de YouTube";
        }

        if (!formData.axisId) {
        newErrors.axisId = "Debes seleccionar un eje";
        }

        // Solo validar campos de migrante en modo creación
        if (!isEditing) {
        if (!formData.migrantName.trim()) {
            newErrors.migrantName = "El nombre de la migrante es obligatorio";
        } else if (formData.migrantName.length > 50) {
            newErrors.migrantName = "El nombre no debe tener más de 50 caracteres";
        }

        if (!formData.migrantLastName.trim()) {
            newErrors.migrantLastName = "El apellido de la migrante es obligatorio";
        } else if (formData.migrantLastName.length > 50) {
            newErrors.migrantLastName =
            "El apellido no debe tener más de 50 caracteres";
        }

        if (!formData.originCountry.trim()) {
            newErrors.originCountry = "El país de origen es obligatorio";
        } else if (formData.originCountry.length > 100) {
            newErrors.originCountry = "El país no debe tener más de 100 caracteres";
        }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
        if (isEditing) {
            // Modo edición - solo enviar campos editables
            await updateVideo(video.id, {
            title: formData.title,
            description: formData.description,
            url: formData.url,
            thumbnailUrl: formData.thumbnailUrl,
            axisId: Number(formData.axisId),
            });

            toast.custom(
            <MyToast
                title="Video actualizado"
                message="El video se ha actualizado correctamente"
                type="success"
            />
            );
        } else {
            // Modo creación - enviar todos los campos
            await createVideo({
            title: formData.title,
            description: formData.description,
            url: formData.url,
            thumbnailUrl: formData.thumbnailUrl,
            axisId: Number(formData.axisId),
            migrantName: formData.migrantName,
            migrantLastName: formData.migrantLastName,
            originCountry: formData.originCountry,
            });

            toast.custom(
            <MyToast
                title="Video añadido"
                message="El video se ha añadido correctamente"
                type="success"
            />
            );
        }

        onSuccess();
        onClose();
        } catch (error) {
        toast.custom(
            <MyToast
            title="Error"
            message={error.message || `No se pudo ${isEditing ? "actualizar" : "añadir"} el video`}
            type="error"
            />
        );
        } finally {
        setLoading(false);
        }
    }

    return (
        <section
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
        >
        <section
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <h2 className="text-2xl font-semibold mb-6">
            {isEditing ? "Editar video" : "Añadir nuevo video"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
            <section>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                Título <span className="text-red-600">*</span>
                </label>
                <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={100}
                aria-required="true"
                aria-invalid={!!errors.title}
                aria-describedby={errors.title ? "title-error" : undefined}
                />
                {errors.title && (
                <p id="title-error" className="text-red-600 text-sm mt-1">
                    {errors.title}
                </p>
                )}
            </section>

            <section>
                <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
                >
                Descripción <span className="text-red-600">*</span>
                </label>
                <textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                maxLength={500}
                aria-required="true"
                aria-invalid={!!errors.description}
                aria-describedby={
                    errors.description ? "description-error" : undefined
                }
                />
                {errors.description && (
                <p id="description-error" className="text-red-600 text-sm mt-1">
                    {errors.description}
                </p>
                )}
            </section>

            <section>
                <label htmlFor="url" className="block text-sm font-medium mb-1">
                URL de YouTube <span className="text-red-600">*</span>
                </label>
                <input
                type="url"
                id="url"
                value={formData.url}
                onChange={handleUrlChange}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"
                aria-invalid={!!errors.url}
                aria-describedby={errors.url ? "url-error" : undefined}
                />
                {errors.url && (
                <p id="url-error" className="text-red-600 text-sm mt-1">
                    {errors.url}
                </p>
                )}
            </section>

            <section>
                <label htmlFor="axisId" className="block text-sm font-medium mb-1">
                Eje temático <span className="text-red-600">*</span>
                </label>
                <select
                id="axisId"
                value={formData.axisId}
                onChange={(e) =>
                    setFormData({ ...formData, axisId: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"
                aria-invalid={!!errors.axisId}
                aria-describedby={errors.axisId ? "axis-error" : undefined}
                >
                <option value="">Selecciona un eje</option>
                {axes.map((axis) => (
                    <option key={axis.id} value={axis.id}>
                    {axis.type}
                    </option>
                ))}
                </select>
                {errors.axisId && (
                <p id="axis-error" className="text-red-600 text-sm mt-1">
                    {errors.axisId}
                </p>
                )}
            </section>

            {!isEditing && (
                <>
                <section>
                    <label
                    htmlFor="migrantName"
                    className="block text-sm font-medium mb-1"
                    >
                    Nombre de la migrante <span className="text-red-600">*</span>
                    </label>
                    <input
                    type="text"
                    id="migrantName"
                    value={formData.migrantName}
                    onChange={(e) =>
                        setFormData({ ...formData, migrantName: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={50}
                    aria-required="true"
                    aria-invalid={!!errors.migrantName}
                    aria-describedby={
                        errors.migrantName ? "migrant-name-error" : undefined
                    }
                    />
                    {errors.migrantName && (
                    <p
                        id="migrant-name-error"
                        className="text-red-600 text-sm mt-1"
                    >
                        {errors.migrantName}
                    </p>
                    )}
                </section>

                <section>
                    <label
                    htmlFor="migrantLastName"
                    className="block text-sm font-medium mb-1"
                    >
                    Apellido de la migrante{" "}
                    </label>
                    <input
                    type="text"
                    id="migrantLastName"
                    value={formData.migrantLastName}
                    onChange={(e) =>
                        setFormData({
                        ...formData,
                        migrantLastName: e.target.value,
                        })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={50}
                    aria-required="true"
                    aria-invalid={!!errors.migrantLastName}
                    aria-describedby={
                        errors.migrantLastName
                        ? "migrant-lastname-error"
                        : undefined
                    }
                    />
                    {errors.migrantLastName && (
                    <p
                        id="migrant-lastname-error"
                        className="text-red-600 text-sm mt-1"
                    >
                        {errors.migrantLastName}
                    </p>
                    )}
                </section>

                <section>
                    <label
                    htmlFor="originCountry"
                    className="block text-sm font-medium mb-1"
                    >
                    País de origen <span className="text-red-600">*</span>
                    </label>
                    <input
                    type="text"
                    id="originCountry"
                    value={formData.originCountry}
                    onChange={(e) =>
                        setFormData({ ...formData, originCountry: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={100}
                    aria-required="true"
                    aria-invalid={!!errors.originCountry}
                    aria-describedby={
                        errors.originCountry ? "origin-country-error" : undefined
                    }
                    />
                    {errors.originCountry && (
                    <p
                        id="origin-country-error"
                        className="text-red-600 text-sm mt-1"
                    >
                        {errors.originCountry}
                    </p>
                    )}
                </section>
                </>
            )}

            <section className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 font-semibold text-white bg-[#003049] rounded-lg hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {loading
                    ? "Guardando..."
                    : isEditing
                    ? "Actualizar video"
                    : "Guardar video"}
                </button>
                <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="flex-1 px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                Cancelar
                </button>
            </section>
            </form>
        </section>
        </section>
    );
    }