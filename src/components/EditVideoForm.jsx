import { useState, useEffect} from "react";
import toast from "react-hot-toast";
import MyToast from "./MyToast";
import { getAxes } from "../services/axes";

export default function EditVideoForm({ video, onClose, onSuccess, onSubmit }) {

  const [axes, setAxes] = useState([]);
  const [form, setForm] = useState({
    title: video.title || "",
    description: video.description || "",
    url: video.url || "",
    thumbnailUrl: video.thumbnailUrl || "",
    axisId: video.axisId,
    migrantId: video.migrantId,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    getAxes().then(setAxes).catch(() => {
      toast.error("No se pudieron cargar los ejes");
    });
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

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
      if (err.errors) {
        const mapped = {};
        err.errors.forEach(e => {
          mapped[e.field] = e.message;
        });
        setErrors(mapped);
      } else {
        toast.error("Error inesperado");
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Editar video</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium mb-1">Título</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.title && (
              <p className="text-sm text-red-600 mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Descripción</label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.description && (
              <p className="text-sm text-red-600 mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">URL del video</label>
            <input
              name="url"
              value={form.url}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.url && (
              <p className="text-sm text-red-600 mt-1">{errors.url}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
            <input
              name="thumbnailUrl"
              value={form.thumbnailUrl}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.thumbnailUrl && (
              <p className="text-sm text-red-600 mt-1">{errors.thumbnailUrl}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Eje</label>
            <select
              name="axisId"
              value={form.axisId}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Seleccione un eje</option>
              {axes.map(axis => (
                <option key={axis.id} value={axis.id}>
                  {axis.type}
                </option>
              ))}
            </select>

            {errors.axisId && <p className="text-sm text-red-600 mt-1">{errors.axisId}</p>}
          </div>


          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-[#003049] rounded hover:bg-blue-700 cursor-pointer"
            >
              Guardar cambios
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
