import React, {createContext, useState, useContext} from "react";

const AuthContext = createContext();
export function AuthProvider({children}){
    const [usuarioLogeado, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);

    const login = (username) => {

        const token = `fake-token-${username}`;
        if(username == 'admin@mitienda.com'){
            setAdmin(true)
        }
        localStorage.setItem ('authToken',token);
        setUser(username);
    };
    function logout() {
        localStorage.removeItem('authToken');
        setUser(null);
        setAdmin(false)
    };
    return (
        <AuthContext.Provider value={{usuarioLogeado, login, logout, admin}}>
            {children}
        </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);