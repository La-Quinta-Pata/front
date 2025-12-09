import { useState } from "react";
import toast from "react-hot-toast";
import MyToast from "./MyToast";
import { usersApi } from "../services/user";
import { useAuth } from "../hooks/useAuth";

export default function EditProfileForm({ user, onClose, onSuccess }) {
  const { setUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const body = { name, email };

      if (password.trim() !== "") {
        body.password = password;
      }

      const updatedUser = await usersApi.update(user.id, body);

      console.log("UPDATED USER -> ", updatedUser);

      const userData = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser && setUser(userData);

      toast.custom(
        <MyToast
          title="Perfil actualizado"
          message="Se guardaron tus datos correctamente."
          type="success"
        />
      );

      onSuccess?.(updatedUser);
      onClose?.();

    } catch (err) {
      console.error("Error updating profile:", err);

      toast.custom(
        <MyToast
          title="Error al actualizar"
          message="No se pudo actualizar tu perfil."
          type="error"
        />
      );
    }
  };

  return (
    <section className="w-full bg-white rounded-xl p-6 shadow-md border">
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
        Editar Perfil
      </h3>

      <section className="flex flex-col gap-4">
        <label>Nombre completo</label>
        <input
          className="border rounded-lg px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          className="border rounded-lg px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Nueva contraseña</label>
        <input
          type="password"
          className="border rounded-lg px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <section className="flex gap-3 mt-4 justify-center">
          <button
            onClick={handleSubmit}
            className="bg-[#003049] text-white px-6 py-2 rounded-xl hover:bg-blue-500 cursor-pointer"
          >
            Guardar
          </button>

          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-400 cursor-pointer"
          >
            Cancelar
          </button>
        </section>
      </section>
    </section>
  );
}
