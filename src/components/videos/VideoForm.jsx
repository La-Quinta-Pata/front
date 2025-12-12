    import { useState } from "react";
    import toast from "react-hot-toast";
    import MyToast from "../MyToast";
    import { createVideo } from "../../services/videos";
    import useVideoFormData from "../../hooks/useVideoFormData";
    import FormField from "./FormField";
    import FormButtons from "./FormButtons";
    import { mapToOptions, extractYouTubeId, validateVideoForm } from "../../utils/videoHelpers";

    export default function VideoForm({ onClose, onSuccess }) {
    const { axes, migrants, loading: loadingData } = useVideoFormData();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        url: "",
        thumbnailUrl: "",
        axisId: "",
        migrantId: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
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

    async function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validateVideoForm(formData);
        
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }

        setLoading(true);

        try {
        const payload = {
            title: formData.title,
            description: formData.description,
            url: formData.url,
            thumbnailUrl: formData.thumbnailUrl,
            axisId: Number(formData.axisId),
            migrantId: formData.migrantId,
        };

        await createVideo(payload);

        toast.custom(
            <MyToast
            title="Video añadido"
            message="El video se ha añadido correctamente"
            type="success"
            />
        );

        setTimeout(() => {
            onSuccess();
            onClose();
        }, 700);
        } catch (error) {
        toast.custom(
            <MyToast
            title="Error"
            message={error.message || "No se pudo añadir el video"}
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
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-form-title"
        >
        <article
            className="bg-white rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <header className="mb-6">
            <h2 id="video-form-title" className="text-xl sm:text-2xl font-semibold">
                Añadir nuevo video
            </h2>
            </header>

            {loadingData ? (
            <p className="text-center py-8">Cargando datos...</p>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
                <FormField
                label="Título"
                name="title"
                value={formData.title}
                onChange={handleChange}
                error={errors.title}
                required
                />

                <FormField
                label="Descripción"
                name="description"
                type="textarea"
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
                rows={3}
                required
                />

                <FormField
                label="URL de YouTube"
                name="url"
                value={formData.url}
                onChange={handleUrlChange}
                error={errors.url}
                placeholder="https://www.youtube.com/watch?v=..."
                required
                />

                <FormField
                label="Thumbnail URL"
                name="thumbnailUrl"
                value={formData.thumbnailUrl}
                onChange={handleChange}
                error={errors.thumbnailUrl}
                />

                <FormField
                label="Eje temático"
                name="axisId"
                type="select"
                value={formData.axisId}
                onChange={handleChange}
                error={errors.axisId}
                options={mapToOptions(axes, "id", "type")}
                placeholder="Selecciona un eje"
                required
                />

                <FormField
                label="Migrante"
                name="migrantId"
                type="select"
                value={formData.migrantId}
                onChange={handleChange}
                error={errors.migrantId}
                options={mapToOptions(migrants)}
                placeholder="Selecciona una migrante"
                required
                />

                <FormButtons
                onCancel={onClose}
                submitText="Guardar video"
                loading={loading}
                />
            </form>
            )}
        </article>
        </section>
    );
    }