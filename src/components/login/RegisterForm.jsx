import { useState } from "react";
import { usersApi } from "../../services/user";
import InputField from "./InputField";
import SelectField from "./SelectField";
import FormHeader from "./FormHeader";
import FormActions from "./FormActions";
import ErrorMessage from "./ErrorMessage";

const ROLE_OPTIONS = [
    { value: "USER", label: "Usuario" },
    { value: "ADMIN", label: "Administrador" }
];

export default function RegisterForm({ onSuccess, onCancel }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER"
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.password) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        if (formData.password.length < 8) {
            setError("La contraseña debe tener al menos 8 caracteres.");
            return;
        }
        
        setError("");
        setLoading(true);

        try {
            await usersApi.create(formData);
            onSuccess?.("Usuario creado exitosamente");
        } catch (err) {
            setError(err.message || "Error al crear el usuario");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg mt-15 p-6 sm:p-8 
            bg-white border-2 border-[#98BD16] rounded-lg shadow-md"
            noValidate
        >
            <FormHeader title="Nueva Usuaria" />

            <ErrorMessage message={error} />

            <InputField
                id="name"
                label="Nombre completo"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="******"
                required
                disabled={loading}
                autoComplete="name"
            />

            <InputField
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="******"
                required
                disabled={loading}
                autoComplete="email"
            />

            <InputField
                id="password"
                label="Contraseña"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mínimo 8 caracteres"
                required
                disabled={loading}
                autoComplete="new-password"
            />

            <SelectField
                id="role"
                label="Rol"
                value={formData.role}
                onChange={handleChange}
                options={ROLE_OPTIONS}
                required
                disabled={loading}
            />

            <FormActions
                onSubmit={handleSubmit}
                onCancel={onCancel}
                loading={loading}
                submitText="Crear Usuario"
            />
        </form>
    );
}