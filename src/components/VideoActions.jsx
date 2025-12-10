import { Pen, Trash } from "lucide-react";
import toast from "react-hot-toast";
import ConfirmToast from "./ConfirmToast";
import MyToast from "./MyToast";

export default function VideoActions({ video, onEdit, onDelete }) {
  function handleDelete() {
    toast.custom((t) => (
      <ConfirmToast
        message={`¿Eliminar "${video.title}"?`}
        onConfirm={async () => {
          await onDelete(video.id);
          toast.custom(
            <MyToast
              title="Video eliminado"
              message="Se borró con éxito"
              type="success"
            />
          );
        }}
      />
    ));
  }

  return (
    <>
      <Pen
        size={20}
        className="p-1 bg-white/90 rounded hover:bg-white shadow cursor-pointer"
        onClick={() => onEdit(video)}
      />

      <Trash
        size={20}
        className="p-1 bg-white/90 rounded hover:bg-white shadow cursor-pointer text-red-600"
        onClick={handleDelete}
      />
    </>
  );
}
