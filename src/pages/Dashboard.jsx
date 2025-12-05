import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getVideosByUser } from "../services/videos.js"
import getEmbedUrl from "../utils/getEmbedUrl.jsx"


export default function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleLogout = () => {
        logout();
        navigate("/iniciar-sesion");
    };

    useEffect(() => {
        if (!user?.id) return;

        getVideosByUser(user.id).then(setVideos);
    }, [user]);

    return (
        <main className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <section className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                    <p className="text-center md:text-right text-gray-700">
                        Hola, {user?.name || user?.email}
                    </p>
                </section>
            </header>

            <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">

                <article className="bg-white shadow-sm rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Mi perfil</h2>

                    <p><strong>Nombre:</strong> {user?.name}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <p><strong>Rol:</strong> {user?.role}</p>

                    <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-1">

                        <Link
                            to="/perfil"
                            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            Editar perfil
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition cursor-pointer"
                        >
                            Cerrar sesión
                        </button>

                        {user?.role === "ADMIN" && (
                            <Link
                                to="/registrar"
                                className="px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition cursor-pointer"
                            >
                                Crear usuario
                            </Link>
                        )}
                    </nav>
                </article>

                <section className="bg-white shadow-sm rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-6">Videos añadidos por mí</h2>

                    {videos.length === 0 && (
                        <p className="text-gray-500">Todavía no has añadido videos.</p>
                    )}

                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <article key={video.id} className="border rounded-lg overflow-hidden shadow">
                                <iframe
                                    className="w-full h-48"
                                    src={getEmbedUrl(video.url)}
                                    title={video.title}
                                    frameBorder="0"
                                    allowFullScreen
                                />

                                <footer className="p-4">
                                    <h3 className="font-semibold text-md truncate">{video.title}</h3>
                                    <p className="text-sm text-gray-600">{video.description}</p>
                                </footer>
                            </article>
                        ))}
                    </section>
                </section>

            </section>

        </main>
    );
}