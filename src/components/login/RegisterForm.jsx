import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../services/user";
import InputField from "./InputField";
import SelectField from "./SelectField";
import FormHeader from "./FormHeader";
import FormActions from "./FormActions";
import ErrorMessage from "./ErrorMessage";
import MyToast from "../../components/toasts/MyToast";
import toast from "react-hot-toast";

const ROLE_OPTIONS = [
  { value: "USER", label: "Usuario" },
  { value: "ADMIN", label: "Administrador" }
];

export default function RegisterForm({ onCancel }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [backendError, setBackendError] = useState("");

  const validateName = (value) => {
    if (!value.trim()) return "El nombre es obligatorio";
    if (value.length < 3) return "Debe tener al menos 3 caracteres";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "El email es obligatorio";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) return "Email inválido";
    return "";
  };

  const validatePassword = (value) => {
    if (!value.trim()) return "La contraseña es obligatoria";
    if (value.length < 8) return "Debe tener mínimo 8 caracteres";
    return "";
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Live validation
    if (name === "name") setFieldErrors(prev => ({ ...prev, name: validateName(value) }));
    if (name === "email") setFieldErrors(prev => ({ ...prev, email: validateEmail(value) }));
    if (name === "password") setFieldErrors(prev => ({ ...prev, password: validatePassword(value) }));
    
    setBackendError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameErr = validateName(formData.name);
    const emailErr = validateEmail(formData.email);
    const passwordErr = validatePassword(formData.password);

    setFieldErrors({
      name: nameErr,
      email: emailErr,
      password: passwordErr
    });

    if (nameErr || emailErr || passwordErr) return;

    setBackendError("");
    setLoading(true);

    try {
      await usersApi.create(formData);

      toast.custom(
        <MyToast
          title="Usuario creado"
          message="La cuenta se creó correctamente."
          type="success"
        />
      );

      setTimeout(() => {
        navigate("/panel");
      }, 1000);

    } catch (err) {
      if (err.message.includes("exists")) {
        setBackendError("El correo ya está registrado.");
      } else if (err.message.includes("invalid")) {
        setBackendError("Datos inválidos. Verifica los campos.");
      } else {
        setBackendError("Error al crear el usuario.");
      }

      toast.custom(
        <MyToast
          title="Error"
          message={backendError || "No se pudo crear el usuario."}
          type="error"
        />
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg mt-14 p-6 sm:p-8 bg-white border-2 border-[#003049] rounded-lg shadow-md"
      noValidate
    >
      <FormHeader title="Nueva usuaria" />

      <ErrorMessage message={backendError} />

      <InputField
        id="name"
        label="Nombre completo"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ej: María López"
        error={fieldErrors.name}
        disabled={loading}
      />

      <InputField
        id="email"
        label="Correo electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ejemplo@correo.com"
        error={fieldErrors.email}
        disabled={loading}
      />

      <InputField
        id="password"
        label="Contraseña"
        name="password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        placeholder="Mínimo 8 caracteres"
        error={fieldErrors.password}
        disabled={loading}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />

      <SelectField
        id="role"
        label="Rol"
        name="role"
        value={formData.role}
        onChange={handleChange}
        options={ROLE_OPTIONS}
        disabled={loading}
      />

      <FormActions
        onCancel={onCancel}
        loading={loading}
        submitText="Crear usuario"
        disabled={!!(
          fieldErrors.name ||
          fieldErrors.email ||
          fieldErrors.password ||
          loading
        )}
      />
    </form>
  );
}
