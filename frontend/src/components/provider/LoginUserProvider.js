import React from "react";
import { createContext,useState } from "react";

export const LoginUserContext = createContext();

export const LoginUserProvider = (props) => {
    const { children } = props;
    const [loginUser, setLoginUser] = useState("");
    const [isLogined, setIsLogined] = useState(false);
    return (
        <LoginUserContext.Provider value={{loginUser, setLoginUser, setIsLogined}}>
            {children}
        </LoginUserContext.Provider>
    );
}