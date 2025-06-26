import React, {createContext, useState, useContext} from "react";

const AuthContext = createContext();
export function AuthProvider({children}){
    const [usuarioLogeado, setUser] = useState(null);

    const login = (username) => {

        const token = `fake-token-${username}`;
        localStorage.setItem('authToken',token);
        setUser(username);
    };
    function logout() {
        localStorage.removeItem('authToken');
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{usuarioLogeado, login, logout}}>
            {children}
        </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);