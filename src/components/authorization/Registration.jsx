import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import styles from './authorization.module.scss';

const Login = () => {
    const navigate = useNavigate();
    const [logValue, setLogValue] = useState({
        login: "",
        password: "",
        email: "",
        name: "",
        mid_name: "",
        last_name: ""
    });

    const handleLogValue = e => {
        setLogValue(() => ({
            ...logValue,
            [e.target.name]: e.target.value
        }));
    };

    const sendForm = () => {
        console.log(logValue);
    };

    const { login, password, email, name, mid_name, last_name } = logValue;
    return (
        <div className={styles.authorizate_wrapper}>
            <div className={styles.authorizate}>
                <h2 className={styles.title}>Регистрация</h2>
                <input type="text" value={login} onChange={handleLogValue} placeholder="Логин" name="login" />
                <input type="text" value={email} onChange={handleLogValue} placeholder="Email" name="email" />
                <select name="" id="">
                    <option>Тематическое направление</option>
                    <option>Цифровые технологии</option>
                    <option>Экономические технологии</option>
                    <option>Химические технологии</option>
                </select>
                <input type="text" value={name} onChange={handleLogValue} placeholder="Имя" name="name" />
                <input type="text" value={last_name} onChange={handleLogValue} placeholder="Фамилия" name="last_name" />
                <input type="text" value={mid_name} onChange={handleLogValue} placeholder="Отчество" name="mid_name" />
                <input type="password" value={password} onChange={handleLogValue} placeholder="Пароль" name="password" />
                <div className={styles.agreement}>
                    <input type="checkbox"  />
                    <span>соглашаюсь на обработку персональных данных</span>
                </div>
                <button onClick={sendForm}>зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Login;