import React, { useState,useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Header from "../templetes/Header";
import { LoginUserContext
 } from "../provider/LoginUserProvider";

const Home = () => {
    const location = useLocation();
    const [data, setData] = useState(location.state);
    const { isLogined } = useContext(LoginUserContext);
    if (!isLogined) {
        return <Navigate to="/login" />;
    }
    else {
        return (
            <>
            <Header name="XYZ"/>
            <h1>Home</h1>
            </>
        );
    }
    
}

export default Home;