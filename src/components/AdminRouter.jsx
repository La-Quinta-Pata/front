import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function AdminRoute({ children }) {
    const { user, isAuthenticated } = useAuth();
  
    if (!isAuthenticated) {
      return <Navigate to="/iniciar-sesion" replace />;
    }
  
    if (user.role !== "ADMIN") {
      return <Navigate to="/" replace />;
    }
  
    return children;
  }