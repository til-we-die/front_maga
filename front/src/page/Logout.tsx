import React, { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Logout: React.FC = () => {
    const { clearToken } = useContext(AuthContext);

    const handleLogout = () => {
        clearToken(); // Удаляем токен
        window.location.href = "/login"; // Перенаправляем на страницу входа
    };

    return (
        <div className={'logout'}>
            <button className={'logout_button'} onClick={handleLogout}>Выйти</button>
        </div>

    )
};

export default Logout;
