import React, { useContext } from "react";
import Input from '../components/UI/input/Input';
import Button from '../components/UI/button/Button';
import { AuthContext } from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <form onSubmit={login}>
            <h1>Please sign in</h1>
            <Input type="text" placeholder="Введите логин"/>
            <Input type="password" placeholder="Введите пароль"/>
            <Button>Войти</Button>
        </form>
    );
};

export default Login;