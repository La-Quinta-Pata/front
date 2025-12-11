import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import MyToast from "./MyToast";
import { getAxes } from "../services/axes";
import { getAllMigrants } from "../services/migrants";

export default function EditVideoForm({ video, onClose, onSuccess, onSubmit }) {

  const [axes, setAxes] = useState([]);
  const [migrants, setMigrants] = useState([]);

  const [form, setForm] = useState({
    title: video.title || "",
    description: video.description || "",
    url: video.url || "",
    thumbnailUrl: video.thumbnailUrl || "",
    axisId: video.axisId || null,

    migrantId: video.migrantId || "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    getAxes().then(setAxes);
    getAllMigrants().then(setMigrants);
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

    const payload = {
      ...form,
    };

    try {
      await onSubmit(video.id, payload);

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
      console.log("ERR", err);

      if (err.details) {
        const mapped = {};
        err.details.split(", ").forEach(entry => {
          const [field, msg] = entry.split(": ");
          mapped[field] = msg;
        });
        setErrors(mapped);
        return;
      }

      toast.error("Error inesperado");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Editar video</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block mb-1 font-medium">Título</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Descripción</label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">URL del video</label>
            <input
              name="url"
              value={form.url}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.url && <p className="text-red-600 text-sm">{errors.url}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Thumbnail URL</label>
            <input
              name="thumbnailUrl"
              value={form.thumbnailUrl}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.thumbnailUrl && <p className="text-red-600 text-sm">{errors.thumbnailUrl}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Eje</label>
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
            {errors.axisId && <p className="text-red-600 text-sm">{errors.axisId}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Migrante</label>
            <select
              name="migrantId"
              value={form.migrantId}
              onChange={handleChange}
            >
              <option value="">Seleccione una migrante</option>
              {migrants.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
            {errors.migrantId && <p className="text-red-600 text-sm">{errors.migrantId}</p>}
          </div>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-[#003049] text-white rounded hover:bg-blue-600"
            >
              Guardar cambios
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
