import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import InputField from "./InputField";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError("Todos los campos son obligatorios.");
            return;
        }
        
        setError("");
        setLoading(true);

        const result = await login(email, password);
        
        if (result.success) {
            navigate("/dashboard");
        } else {
            setError(result.error || "Error al iniciar sesión");
        }
        
        setLoading(false);
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6">
            <section className="w-full max-w-md">
                <header className="mb-6 sm:mb-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#98BD16]">
                        La Quinta Pata
                    </h2>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="w-full p-6 sm:p-8 md:p-10 
                    bg-white border-2 border-[#98BD16] rounded-lg shadow-md"
                    noValidate
                >
                    <ErrorMessage message={error} />

                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@laquintapata.com"
                        required
                        disabled={loading}
                        autoComplete="email"
                    />

                    <InputField
                        id="password"
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        required
                        disabled={loading}
                        autoComplete="current-password"
                    />

                    <Button 
                        type="submit" 
                        loading={loading}
                        disabled={loading}
                    >
                        Entrar
                    </Button>
                </form>
            </section>
        </main>
    );
}