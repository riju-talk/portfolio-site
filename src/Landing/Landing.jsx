import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Landing() {
    const Navigate = useNavigate();
    useEffect(() => {
        Navigate('/home');
    }, []);
    return (
        <></>
    );
}

export default Landing;