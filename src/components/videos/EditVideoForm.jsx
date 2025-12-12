import { useState } from "react";
import toast from "react-hot-toast";
import MyToast from "../MyToast";
import useVideoFormData from "../../hooks/useVideoFormData";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import { mapToOptions, parseServerErrors } from "../../utils/videoHelpers";

export default function EditVideoForm({ video, onClose, onSuccess, onSubmit }) {
  const { axes, migrants, loading: loadingData } = useVideoFormData();

  const [form, setForm] = useState({
    title: video.title || "",
    description: video.description || "",
    url: video.url || "",
    thumbnailUrl: video.thumbnailUrl || "",
    axisId: video.axisId || "",
    migrantId: video.migrantId || "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      await onSubmit(video.id, form);

      toast.custom(
        <MyToast
          title="Video actualizado"
          message="Los cambios se guardaron correctamente"
          type="success"
        />
      );

      onSuccess?.();
      onClose();
    } catch (err) {
      if (err.details) {
        setErrors(parseServerErrors(err.details));
      } else {
        toast.custom(
          <MyToast
            title="Error"
            message="No se pudo actualizar el video"
            type="error"
          />
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-video-title"
    >
      <article
        className="bg-white w-full max-w-md sm:max-w-lg p-4 sm:p-6 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-4">
          <h2 id="edit-video-title" className="text-xl font-semibold">
            Editar video
          </h2>
        </header>

        {loadingData ? (
          <p className="text-center py-8">Cargando datos...</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <FormField
              label="Título"
              name="title"
              value={form.title}
              onChange={handleChange}
              error={errors.title}
              required
            />

            <FormField
              label="Descripción"
              name="description"
              type="textarea"
              value={form.description}
              onChange={handleChange}
              error={errors.description}
              rows={3}
              required
            />

            <FormField
              label="URL del video"
              name="url"
              value={form.url}
              onChange={handleChange}
              error={errors.url}
              required
            />

            <FormField
              label="Thumbnail URL"
              name="thumbnailUrl"
              value={form.thumbnailUrl}
              onChange={handleChange}
              error={errors.thumbnailUrl}
            />

            <FormField
              label="Eje"
              name="axisId"
              type="select"
              value={form.axisId}
              onChange={handleChange}
              error={errors.axisId}
              options={mapToOptions(axes, "id", "type")}
              placeholder="Seleccione un eje"
              required
            />

            <FormField
              label="Migrante"
              name="migrantId"
              type="select"
              value={form.migrantId}
              onChange={handleChange}
              error={errors.migrantId}
              options={mapToOptions(migrants)}
              placeholder="Seleccione una migrante"
              required
            />

            <FormButtons
              onCancel={onClose}
              submitText="Guardar cambios"
              loading={loading}
            />
          </form>
        )}
      </article>
    </section>
  );
}