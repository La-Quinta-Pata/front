import { useState, useEffect } from "react";
import { createVideo } from "../services/videos";
import { getAxes } from "../services/axes";
import { getAllMigrants } from "../services/migrants";

import toast from "react-hot-toast";
import MyToast from "./MyToast";

export default function VideoForm({ onClose, onSuccess }) {

    const [axes, setAxes] = useState([]);
    const [migrants, setMigrants] = useState([]);

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

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const axesData = await getAxes();
            const migrantsData = await getAllMigrants();

            setAxes(axesData);
            setMigrants(migrantsData);

        } catch (error) {
            toast.custom(
                <MyToast
                    title="Error al cargar datos"
                    message="No se pudieron cargar los datos necesarios"
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
        if (!formData.migrantId)
            newErrors.migrantId = "Selecciona una migrante";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    async function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) return;

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
        >
            <section
                className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-semibold mb-6">Añadir nuevo video</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block font-medium">Título *</label>
                        <input
                            className="w-full border rounded p-2"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                        />
                        {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Descripción *</label>
                        <textarea
                            className="w-full border rounded p-2"
                            rows={3}
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({ ...formData, description: e.target.value })
                            }
                        />
                        {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">URL de YouTube *</label>
                        <input
                            className="w-full border rounded p-2"
                            value={formData.url}
                            onChange={handleUrlChange}
                            placeholder="https://www.youtube.com/watch?v=..."
                        />
                        {errors.url && <p className="text-red-600 text-sm">{errors.url}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Thumbnail URL</label>
                        <input
                            className="w-full border rounded p-2"
                            value={formData.thumbnailUrl}
                            onChange={(e) =>
                                setFormData({ ...formData, thumbnailUrl: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Eje temático *</label>
                        <select
                            className="w-full border rounded p-2"
                            value={formData.axisId}
                            onChange={(e) =>
                                setFormData({ ...formData, axisId: e.target.value })
                            }
                        >
                            <option value="">Selecciona un eje</option>
                            {axes.map((axis) => (
                                <option key={axis.id} value={axis.id}>
                                    {axis.type}
                                </option>
                            ))}
                        </select>
                        {errors.axisId && <p className="text-red-600 text-sm">{errors.axisId}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Migrante *</label>
                        <select
                            className="w-full border rounded p-2"
                            value={formData.migrantId}
                            onChange={(e) =>
                                setFormData({ ...formData, migrantId: e.target.value })
                            }
                        >
                            <option value="">Selecciona una migrante</option>
                            {migrants.map((m) => (
                                <option key={m.id} value={m.id}>
                                    {m.name}
                                </option>
                            ))}
                        </select>
                        {errors.migrantId && <p className="text-red-600 text-sm">{errors.migrantId}</p>}
                    </div>

                    <section className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 px-4 py-2 bg-[#003049] text-white rounded hover:bg-blue-600 cursor-pointer"
                        >
                            {loading ? "Guardando..." : "Guardar video"}
                        </button>

                        <button
                            type="button"
                            disabled={loading}
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                        >
                            Cancelar
                        </button>
                    </section>
                </form>
            </section>
        </section>
    );
}