import useVideoFormData from "../../hooks/useVideoFormData";
import useVideoForm from "../../hooks/useVideoForm";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import FormModal from "./FormModal";
import { getVideoFormFields } from "../../utils/videoFormConfig";
import { parseServerErrors } from "../../utils/videoHelpers";
import toast from "react-hot-toast";
import MyToast from "../MyToast";

export default function EditVideoForm({ video, onClose, onSuccess, onSubmit }) {
  const { axes, migrants, loading: loadingData } = useVideoFormData();
  const { formData, errors, loading, handleChange, setErrors } = useVideoForm(video);

  const fields = getVideoFormFields(axes, migrants).filter(f => f.name !== "url");

  async function submitEdit(data) {
    try {
      await onSubmit(video.id, data);
      
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
        throw err;
      }
    }
  }

  return (
    <FormModal 
      title="Editar video" 
      onClose={onClose} 
      loading={loadingData}
      size="md"
    >
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submitEdit(formData); }}>
        {fields.map((field) => (
          <FormField
            key={field.name}
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}

        <FormButtons
          onCancel={onClose}
          submitText="Guardar cambios"
          loading={loading}
        />
      </form>
    </FormModal>
  );
}