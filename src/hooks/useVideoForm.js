    import { useState } from "react";
    import { extractYouTubeId, validateVideoForm } from "../utils/videoHelpers";

    export default function useVideoForm(initialData = {}) {
    const [formData, setFormData] = useState({
        title: initialData.title || "",
        description: initialData.description || "",
        url: initialData.url || "",
        thumbnailUrl: initialData.thumbnailUrl || "",
        axisId: initialData.axisId || "",
        migrantId: initialData.migrantId || "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

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

    async function handleSubmit(e, submitFn, onSuccess, onError) {
        e.preventDefault();

        const validationErrors = validateVideoForm(formData);
        
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }

        setLoading(true);

        try {
        await submitFn(formData);
        onSuccess?.();
        } catch (error) {
        onError?.(error);
        } finally {
        setLoading(false);
        }
    }

    return {
        formData,
        errors,
        loading,
        handleChange,
        handleUrlChange,
        handleSubmit,
        setErrors,
    };
    }