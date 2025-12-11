import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getVideosByUser, updateVideo, deleteVideo } from "../services/videos.js";
import { usersApi } from "../services/user.js";
import ConfirmToast from "../components/ConfirmToast.jsx";
import MyToast from "../components/MyToast.jsx";
import Card from "../components/Card.jsx";
import EditProfileForm from "../components/EditProfileForm.jsx";
import EditVideoForm from "../components/videos/EditVideoForm.jsx";
import VideoActions from "../components/videos/VideoActions.jsx";
import VideoForm from "../components/videos/VideoForm.jsx";
import toast from "react-hot-toast";

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

    async function handleDeleteVideo(id) {
        try {
            await deleteVideo(id);

            setVideos(prev => prev.filter(video => video.id !== id));

            toast.custom(
                <MyToast
                    title="Video eliminado"
                    message="Se borró correctamente"
                    type="success"
                />
            );
        } catch (err) {
            console.error(err);
            toast.custom(
                <MyToast
                    title="Error"
                    message="No se pudo eliminar el video"
                    type="error"
                />
            );
        }
    }



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
                    {editingVideo && (
                        <EditVideoForm
                            video={editingVideo}
                            onClose={() => setEditingVideo(null)}
                            onSuccess={() => {
                                // ya que lo actualizamos localmente:
                                getVideosByUser(user.id).then(setVideos);
                            }}
                            onSubmit={updateVideo}
                        />
                    )}
            {videos.length === 0 && (
                <p className="text-gray-500">Todavía no has añadido videos.</p>
            )}

                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {videos.map((video) => {
                            console.log("video =>", video);
                            return (

                            <Card
                                key={video.id}
                                image={video.thumbnailUrl}
                                author={video.title}
                                description={video.description}
                                onClick={() => {}}
                                actions={
                                    <VideoActions
                                        video={video}
                                        onEdit={() => {
                                            setEditingVideo(video);
                                        }}
                                        onDelete={handleDeleteVideo}
                                    />
                                }
                            />
                        )})}
                    </section>
                </section>

            </section>

        </main>
    );
    }