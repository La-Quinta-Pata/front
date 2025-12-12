import { createVideo } from "../../services/videos";
import useVideoFormData from "../../hooks/useVideoFormData";
import useVideoForm from "../../hooks/useVideoForm";  // ← AGREGAR ESTA LÍNEA
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import FormModal from "./FormModal";
import { getVideoFormFields } from "../../utils/videoFormConfig";

export default function VideoForm({ onClose, onSuccess }) {
    const { axes, migrants, loading: loadingData } = useVideoFormData();
    const { formData, errors, loading, handleChange, handleUrlChange, handleSubmit } = useVideoForm();  // ← CAMBIAR A useVideoForm()

    const fields = getVideoFormFields(axes, migrants);

    async function submitVideo(data) {
        const payload = {
            ...data,
            axisId: Number(data.axisId),
        };
        await createVideo(payload);
    }

    function onSubmit(e) {
        handleSubmit(
            e,
            submitVideo,
            {
                title: "Video añadido",
                message: "El video se ha añadido correctamente",
            },
            onSuccess,
            onClose
        );
    }

    return (
        <FormModal
            title="Añadir nuevo video"
            onClose={onClose}
            loading={loadingData}
            size="lg"
            backdrop="darker"
        >
            <form onSubmit={onSubmit} className="space-y-4">
                {fields.map((field) => (
                    <FormField
                        key={field.name}
                        {...field}
                        value={formData[field.name]}
                        onChange={field.customHandler === "handleUrlChange" ? handleUrlChange : handleChange}
                        error={errors[field.name]}
                    />
                ))}

                <FormButtons
                    onCancel={onClose}
                    submitText="Guardar video"
                    loading={loading}
                />
            </form>
        </FormModal>
    );
}