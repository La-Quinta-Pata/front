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
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const [fieldErrors, setFieldErrors] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false
    });

    const validateName = (value) => {
        if (!value.trim()) {
            return "El nombre es obligatorio";
        }
        if (value.trim().length < 3) {
            return "El nombre debe tener al menos 3 caracteres";
        }
        return "";
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            return "El email es obligatorio";
        }
        if (!emailRegex.test(value)) {
            return "Formato de email inválido";
        }
        return "";
    };

    const validatePassword = (value) => {
        if (!value) {
            return "La contraseña es obligatoria";
        }
        if (value.length < 8) {
            return "La contraseña debe tener mínimo 8 caracteres";
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (touched[name]) {
            let validationError = "";
            if (name === "name") validationError = validateName(value);
            if (name === "email") validationError = validateEmail(value);
            if (name === "password") validationError = validatePassword(value);
            
            setFieldErrors(prev => ({
                ...prev,
                [name]: validationError
            }));
        }
        setError("");
    };

    const handleBlur = (fieldName) => {
        setTouched(prev => ({ ...prev, [fieldName]: true }));
        
        let validationError = "";
        if (fieldName === "name") validationError = validateName(formData.name);
        if (fieldName === "email") validationError = validateEmail(formData.email);
        if (fieldName === "password") validationError = validatePassword(formData.password);
        
        setFieldErrors(prev => ({
            ...prev,
            [fieldName]: validationError
        }));
    };

    const isFormValid = () => {
        const nameValid = validateName(formData.name) === "";
        const emailValid = validateEmail(formData.email) === "";
        const passwordValid = validatePassword(formData.password) === "";
        return nameValid && emailValid && passwordValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setTouched({
            name: true,
            email: true,
            password: true
        });

        const nameValidation = validateName(formData.name);
        const emailValidation = validateEmail(formData.email);
        const passwordValidation = validatePassword(formData.password);

        setFieldErrors({
            name: nameValidation,
            email: emailValidation,
            password: passwordValidation
        });

        if (nameValidation || emailValidation || passwordValidation) {
            return;
        }
        
        setError("");
        setLoading(true);

        try {
            await usersApi.create(formData);
            onSuccess?.("Usuario creado exitosamente");
        } catch (err) {
            if (err.message.includes("ya está registrado") || err.message.includes("already exists")) {
                setError(`El correo electrónico '${formData.email}' ya está registrado. Por favor, usa otro correo.`);
            } else if (err.message.includes("invalid") || err.message.includes("inválido")) {
                setError("Los datos proporcionados no son válidos. Por favor, revisa los campos.");
            } else if (err.message.includes("network") || err.message.includes("red")) {
                setError("Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.");
            } else {
                setError(err.message || "Error al crear el usuario. Por favor, intenta nuevamente.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg mt-15 p-6 sm:p-8 
            bg-white border-2 border-[#003049] rounded-lg shadow-md"
            noValidate
            aria-label="Formulario de registro de usuario"
        >
            <FormHeader title="Nueva Usuaria" />

            <ErrorMessage message={error} />

            <InputField
                id="name"
                label="Nombre completo"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                placeholder="Ej: Ana Aguilera Morales"
                required
                disabled={loading}
                autoComplete="name"
                error={fieldErrors.name}
                touched={touched.name}
            />

            <InputField
                id="email"
                label="Correo electrónico"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                placeholder="ejemplo@correo.com"
                required
                disabled={loading}
                autoComplete="email"
                error={fieldErrors.email}
                touched={touched.email}
            />

            <InputField
                id="password"
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur("password")}
                placeholder="Mínimo 8 caracteres"
                required
                disabled={loading}
                autoComplete="new-password"
                error={fieldErrors.password}
                touched={touched.password}
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
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
                submitText="Crear usuario"
                disabled={!isFormValid()}
            />
        </form>
    );
}