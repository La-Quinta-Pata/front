import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";
import InputField from "./InputField";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [touched, setTouched] = useState({ email: false, password: false });

    const { login } = useAuth();
    const navigate = useNavigate();

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

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        
        if (touched.email) {
            setEmailError(validateEmail(value));
        }
        setError("");
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        
        if (touched.password) {
            setPasswordError(validatePassword(value));
        }
        setError("");
    };

    const handleEmailBlur = () => {
        setTouched({ ...touched, email: true });
        setEmailError(validateEmail(email));
    };

    const handlePasswordBlur = () => {
        setTouched({ ...touched, password: true });
        setPasswordError(validatePassword(password));
    };

    const isFormValid = () => {
        const emailValid = validateEmail(email) === "";
        const passwordValid = validatePassword(password) === "";
        return emailValid && passwordValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setTouched({ email: true, password: true });

        const emailValidation = validateEmail(email);
        const passwordValidation = validatePassword(password);

        setEmailError(emailValidation);
        setPasswordError(passwordValidation);

        if (emailValidation || passwordValidation) {
            return;
        }

        setError("");
        setLoading(true);

        const result = await login(email, password);

        if (result.success) {
            navigate("/panel");
        } else {
            setError("La contraseña o el email es incorrecto. Vuélvelo a intentar.");
        }

        setLoading(false);
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-6 sm:px-6 sm:py-8 md:px-8">
            <section className="w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col items-center">
                
                <section className="mb-6 sm:mb-8 md:mb-10 w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center text-[#003049] leading-tight px-2">
                        MEMORIAS MIGRANTES
                    </h2>
                </section>

                <form
                    onSubmit={handleSubmit}
                    className="w-full p-5 sm:p-6 md:p-8 lg:p-10 
                    bg-white border-2 border-[#003049] rounded-lg shadow-md"
                    noValidate
                    aria-label="Formulario de inicio de sesión"
                >
                    <ErrorMessage message={error} />

                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        placeholder="admin@laquintapata.com"
                        required
                        disabled={loading}
                        autoComplete="email"
                        error={emailError}
                        touched={touched.email}
                    />

                    <InputField
                        id="password"
                        label="Contraseña"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                        placeholder="********"
                        required
                        disabled={loading}
                        autoComplete="current-password"
                        error={passwordError}
                        touched={touched.password}
                        showPassword={showPassword}
                        onTogglePassword={() => setShowPassword(!showPassword)}
                    />

                    <section className="flex justify-center mt-5 sm:mt-6 md:mt-8">
                        <Button
                            type="submit"
                            loading={loading}
                            disabled={loading || !isFormValid()}
                        >
                            Entrar
                        </Button>
                    </section>
                </form>
            </section>
        </main>
    );
}