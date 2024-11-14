import React from 'react';
import '../trash/button_main.css'
import RegistrationForm from "./Registrations";
import {Link} from "react-router-dom";
function Main() {
    return (
        <div className={'main'}>
            <div  className={'main_but'}>
                <Link to="/login">
                    <button className={'log'}>
                        Login
                    </button>
                </Link>

                {/*<a href="Login.tsx" className={'Log'}><span>Login</span></a>*/}
            </div>
            <div className={'main_but'}>
                <Link to="/login">
                    <button className={'log'}>
                        Registration
                    </button>
                </Link>
                {/*<a href="Registrations.tsx" className={'reg'}><span>Registration</span></a>*/}
            </div>
        </div>

    )
}

export default Main
