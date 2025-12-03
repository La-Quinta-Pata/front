import Button from "./Button";

export default function FormActions({
    onCancel,
    loading,
    submitText = "Guardar",
    cancelText = "Cancelar"
}) {
    return (
        <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
                type="submit"
                loading={loading}
                disabled={loading}
            >
                {submitText}
            </Button>

            {onCancel && (
                <Button
                    type="button"
                    onClick={onCancel}
                    disabled={loading}
                    className="bg-gray-500 hover:bg-gray-600 focus:ring-gray-500"
                >
                    {cancelText}
                </Button>
            )}
        </section>
    );
}