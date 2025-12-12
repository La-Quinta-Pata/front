import { Pen, Trash } from "lucide-react";
import toast from "react-hot-toast";
import ConfirmToast from "../ConfirmToast";

export default function VideoActions({ video, onEdit, onDelete }) {
  function handleDelete() {
    toast.custom(() => (
      <ConfirmToast
        message={`¿Eliminar "${video.title}"?`}
        onConfirm={async () => {
          await onDelete(video.id);
        }}
      />
    ));
  }

  return (
    <section aria-label="Acciones del video" className="flex gap-2">
      <button
        type="button"
        onClick={() => onEdit(video)}
        aria-label={`Editar ${video.title}`}
        className="p-1 bg-white/90 rounded hover:bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <Pen size={20} />
      </button>

      <button
        type="button"
        onClick={handleDelete}
        aria-label={`Eliminar ${video.title}`}
        className="p-1 bg-white/90 rounded hover:bg-white shadow focus:outline-none focus:ring-2 focus:ring-red-500 text-red-600 transition-colors"
      >
        <Trash size={20} />
      </button>
    </section>
  );
}