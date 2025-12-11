    import { useAuth } from "../hooks/useAuth";
    import { useNavigate } from "react-router-dom";
    import { useState, useEffect } from "react";
    import { Link } from "react-router";
    import { getVideosByUser, deleteVideo } from "../services/videos.js";
    import getEmbedUrl from "../utils/getEmbedUrl.jsx";
    import ConfirmToast from "../components/ConfirmToast.jsx";
    import MyToast from "../components/MyToast.jsx";
    import toast from "react-hot-toast";
    import { usersApi } from "../services/user.js";
    import EditProfileForm from "../components/EditProfileForm.jsx";
    import VideoForm from "../components/VideoForm.jsx";

    export default function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [editingProfile, setEditingProfile] = useState(false);
    const [addingVideo, setAddingVideo] = useState(false);
    const [editingVideo, setEditingVideo] = useState(null);

    const handleLogout = () => {
        logout();
        navigate("/iniciar-sesion");
    };

    useEffect(() => {
        if (!user?.id) return;

        getVideosByUser(user.id).then(setVideos);
    }, [user]);

    const handleDelete = () => {
        toast.custom(() => (
        <ConfirmToast
            message="Estás segura que quieres borrar la cuenta?"
            onConfirm={async () => {
            try {
                await usersApi.remove(user.id);
                logout();

                toast.custom(
                <MyToast
                    title="Cuenta borrada con éxito"
                    message="Tu cuenta ha sido borrada con éxito"
                    type="success"
                />
                );

                setTimeout(() => {
                window.location.href = "/";
                }, 1200);
            } catch (err) {
                console.error("Error al borrar la cuenta:", err);

                toast.custom(
                <MyToast
                    title="Error al borrar la cuenta"
                    message="No se ha podido borrar tu cuenta."
                    type="error"
                />
                );
            }
            }}
        />
        ));
    };

    const handleVideoAdded = async () => {
        if (user?.id) {
        const updatedVideos = await getVideosByUser(user.id);
        setVideos(updatedVideos);
        }
    };

    const handleDeleteVideo = (videoId, videoTitle) => {
        toast.custom(() => (
        <ConfirmToast
            message={`¿Estás segura que quieres borrar "${videoTitle}"?`}
            onConfirm={async () => {
            try {
                await deleteVideo(videoId);

                toast.custom(
                <MyToast
                    title="Video borrado"
                    message="El video se ha borrado correctamente"
                    type="success"
                />
                );

                const updatedVideos = await getVideosByUser(user.id);
                setVideos(updatedVideos);
            } catch (err) {
                console.error("Error al borrar el video:", err);

                toast.custom(
                <MyToast
                    title="Error"
                    message="No se pudo borrar el video"
                    type="error"
                />
                );
            }
            }}
        />
        ));
    };

    return (
        <main className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm items-center">
            <section className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center">
            <p className="text-center md:text-center text-gray-700">
                Hola, {user?.name || user?.email}
            </p>
            </section>
        </header>

            <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">

                <article className="bg-white shadow-sm rounded-lg p-8 flex flex-col items-center text-center">
                    <h2 className="text-xl font-semibold mb-4">Mi perfil</h2>
                    
                    <section className="space-y-2 mb-6">
                    <p><strong>Nombre:</strong> {user?.name}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                    
                    </section>

            <section className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                onClick={() => setEditingProfile(true)}
                className="px-4 py-2 font-semibold text-white bg-[#003049] rounded-lg hover:bg-blue-500 transition cursor-pointer"
                >
                Editar perfil
                </button>

                <button
                onClick={handleLogout}
                className="px-4 py-2 font-semibold text-white bg-[#D62828] rounded-lg hover:bg-red-900 transition cursor-pointer"
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
            </section>
            <button
                onClick={handleDelete}
                className="mt-4 text-sm text-center text-red-600 underline cursor-pointer"
            >
                Borrar mi cuenta
            </button>
            </article>

            {editingProfile && (
            <EditProfileForm
                user={user}
                onClose={() => setEditingProfile(false)}
                onSuccess={() => toast.success("Perfil actualizado")}
            />
            )}

            {addingVideo && (
            <VideoForm
                onClose={() => setAddingVideo(false)}
                onSuccess={handleVideoAdded}
            />
            )}

            {editingVideo && (
            <VideoForm
                video={editingVideo}
                onClose={() => setEditingVideo(null)}
                onSuccess={handleVideoAdded}
            />
            )}

            <section className="bg-white shadow-sm rounded-lg p-6">
            <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl font-semibold">Videos añadidos por mí</h2>
                <button
                onClick={() => setAddingVideo(true)}
                className="px-4 py-2 font-semibold text-white bg-[#003049] rounded-lg hover:bg-blue-500 transition cursor-pointer"
                >
                Añadir video
                </button>
            </section>

            {videos.length === 0 && (
                <p className="text-gray-500">Todavía no has añadido videos.</p>
            )}

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((video) => (
                <article
                    key={video.id}
                    className="border rounded-lg overflow-hidden shadow"
                >
                    <iframe
                    className="w-full h-48"
                    src={getEmbedUrl(video.url)}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                    />

                    <footer className="p-4 space-y-3">
                    <h3 className="font-semibold text-md truncate">
                        {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {video.description}
                    </p>

                    <section className="flex gap-2 pt-2">
                        <button
                        onClick={() => setEditingVideo(video)}
                        className="flex-1 px-3 py-1.5 text-sm font-semibold text-white bg-[#003049] rounded hover:bg-blue-500 transition"
                        >
                        Editar
                        </button>
                        <button
                        onClick={() => handleDeleteVideo(video.id, video.title)}
                        className="flex-1 px-3 py-1.5 text-sm font-semibold text-white bg-[#D62828] rounded hover:bg-red-900 transition"
                        >
                        Borrar
                        </button>
                    </section>
                    </footer>
                </article>
                ))}
            </section>
            </section>
        </section>
        </main>
    );
    }