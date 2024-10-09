import { useState, createContext, useEffect } from "react";
import { me } from "../constants/fetch.js";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState();

    const getMe = async () => {
        try {
            const meInfo = await me();
            setUser(meInfo);
        } catch (error) {
            if(error.message === '401'){
                localStorage.removeItem('token');
                setToken(null);
            }
            }
        }
        useEffect(() => {
            if (token) getMe() 
        }, [token])
    const value = {
        token,
        setToken,
        user,
        setUser
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}