import React, { useState } from 'react';
import { authService } from '../services/auth';
import { AuthContext } from './AuthContext';

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
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
