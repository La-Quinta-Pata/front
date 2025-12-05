import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthProvider';
import PrivateRoute from '../components/PrivateRoute';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Contact from "../pages/Contact";
import Catalog from '../pages/Catalog';
import RegisterForm from '../components/login/RegisterForm';
import AdminRoute from '../components/AdminRouter';

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/iniciar-sesion" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/quienes-somos" element={<Contact />} />
            <Route
              path="/panel"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="/registrar"
            element={<AdminRoute>
              <RegisterForm />
            </AdminRoute>} />


          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;