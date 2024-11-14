import useAuth from '../hooks/useAuth';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import api from "../services/http-common";
import '../trash/but_log.css'

const Login = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [state, setState] = useState<{
        username: string,
        email: string,
        password: string
    }>({
        username: '',
        email: '',
        password: ''
    })
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Останавливаем перезагрузку страницы
        const {username, email, password} = state
        // Простая проверка заполненности полей
        if (username && email && password) {
            api.post('api/users', { username, email, password }).then((response) => {
                setAuth(true); // указывает, что пользователь теперь авторизован.
                const token = response.data.token;
                localStorage.setItem('token', token);
                // api.post(username).then((token) => {})
                // localStorage.setItem('token', token)
                navigate('/dashboard', {replace: true}); // перенаправляет пользователя на страницу /dashboard
            }).catch((e) => {
                console.error('Ошибка при выполнении запроса:', e); // Логируем ошибку для отладки
                alert('Не удалось выполнить запрос.'); // Показываем пользователю сообщение об ошибке
            })
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

    return (
        <>
            <div className={'login'}>
                <form className="authorization" onSubmit={handleSubmit}>
                    <p className="title">log in</p>
                    <input className={'input-container'} type="text" name="username" value={state.username}
                           onChange={(e) => setState((p) => ({...p, username: e.target.value}))} maxLength={10} placeholder="Username"/>
                    <input className={'input-container'} type="email" name="email" value={state.email}
                           onChange={(e) => setState((p) => ({...p, email: e.target.value}))} placeholder="Email"/>
                    <input className={'input-container'} type="password" name="password" value={state.password}
                           onChange={(e) => setState((p) => ({...p, password: e.target.value}))} maxLength={10} placeholder="Password"/>
                    <button className={'l_but'}>log in</button>
                    {/*<input*/}
                    {/*    type="submit"*/}
                    {/*    style={{backgroundColor: "#a1eafb"}}*/}
                    {/*    value="Register"*/}
                    {/*/>*/}
                    <Link className={'reg_b'} to="/registrations">
                        registrations
                    </Link>

                </form>
            </div>
                <button type={'button'} onClick={() => {
                    setAuth(true)
                    navigate(from, { replace: true });
                }}>Login</button>

        </>

    )
}

export default Login
