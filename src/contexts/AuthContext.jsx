import React, {createContext, useState, useContext} from "react";

const AuthContext = createContext();
export function AuthProvider({children}){
    const [usuarioLogeado, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);

    const login = (username) => {

        const token = `fake-token-${username}`;
        if(username == 'admin@gmail.com'){
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
    
    function verificarLog(){
                const userToken = localStorage.getItem('authToken')
                if(userToken && userToken == "fake-token-admin@gmail.com"){
                    setAdmin(true)
                    return
                }if(userToken){
                    setUser(userToken)
                }
            };

    return (
        <AuthContext.Provider value={{usuarioLogeado, login, logout, admin, verificarLog}}>
            {children}
        </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);