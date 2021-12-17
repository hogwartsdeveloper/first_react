import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}