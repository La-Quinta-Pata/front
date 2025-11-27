import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthProvider';
import PrivateRoute from '../components/PrivateRoute';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/iniciar-sesion" element={<Login />} />
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            
            <Route
              path="/panel"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;