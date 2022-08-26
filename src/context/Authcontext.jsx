import { useState } from "react";
import { createContext } from "react";


export const Authcontext = createContext();

export const AuthcontextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
    const handleLogin=()=>{
        
        setIsAuth(true)
    }
    const handleLogout=()=>{
        setIsAuth(false)
    }
    return (
        <Authcontext.Provider value={{isAuth, handleLogin,handleLogout}}>{children}</Authcontext.Provider>
    )
}