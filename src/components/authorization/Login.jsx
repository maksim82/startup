import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import styles from './authorization.module.scss';

const Login = () => {
    const navigate = useNavigate();
    const [logValue, setLogValue] = useState({
        login: "",
        password: ""
    });

    const handleLogValue = e => {
        setLogValue(() => ({
            ...logValue,
            [e.target.name]: e.target.value
        }));
    };

    const sendForm = () => {

    };

    const { login, password } = logValue;
    return (
        <div className={styles.authorizate_wrapper}>
            <div className={styles.authorizate}>
                <h2 className={styles.title}>Авторизация</h2>
                <input type="text" value={login} onChange={handleLogValue} placeholder="Логин" name="login" />
                <input type="password" value={password} onChange={handleLogValue} placeholder="Пароль" name="password" />
                <button onClick={sendForm}>войти</button>
                <button onClick={() => navigate('/registration')}>зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Login;