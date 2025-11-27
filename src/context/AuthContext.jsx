import React, { createContext, useState, useContext } from 'react';
import { authService } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => authService.getCurrentUser());

    const login = async (email, password) => {
        try {
            const data = await authService.login(email, password);
            
            const userData = {
                email: data.email,
                role: data.role,
                name: data.name
            };
            
            authService.saveUserData(data.token, userData);
            setUser(userData);
            
            return { success: true };
        } catch (error) {
            return { 
                success: false, 
                error: error.message 
            };
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};