import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/iniciar-sesion");
    };

    return (
<main className="min-h-screen bg-gray-50">
    <article className="bg-white border-b-2 border-[#98BD16] shadow-sm">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#98BD16]">
                    La Quinta Pata
                </h1>
                
                <aside className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <p className="text-sm sm:text-base text-gray-700">
                        <strong className="font-semibold">
                            Hola, {user?.name || user?.email}
                        </strong>
                    </p>
                    
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm sm:text-base font-semibold 
                        text-white bg-red-600 rounded-lg
                        hover:bg-red-700 active:bg-red-800
                        focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2
                        transition-colors"
                        aria-label="Cerrar sesión"
                    >
                        Cerrar Sesión
                    </button>
                </aside>
            </header>
        </section>
    </article>
</main>

    );
}