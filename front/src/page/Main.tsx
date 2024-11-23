import React from 'react';
import '../trash/button_main.css'
import {Link, useNavigate} from 'react-router-dom';
function Main() {
    const navigate = useNavigate()
    return (
        <div className={'main'}>

            <div  className={'main_but'}>
                <button className={'log'} onClick={() => {
                    navigate('/login', { replace: true });}}>
                    Login
                </button>

                {/*<a href="Login.tsx" className={'Log'}><span>Login</span></a>*/}
            </div>
            <div className={'main_but'}>
                <Link to="/registrations">
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
