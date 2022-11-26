import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useState } from 'react';

import styles from './profile.module.scss';

import avatar from '../../utils/avatar.png';
import info from '../../utils/info.png';

const Profile = () => {
    const [handleInfo, setHandleInfo] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.profile_wrapper}>
            <h2>Личный кабинет</h2>
            <div className={styles.profile}>
                <div>
                    <div className={styles.img_wrapper}>
                        <img src={avatar} alt="Аватар" />
                    </div>
                    <div className={styles.input_info}>
                        <div>Имя и фамилия</div>
                        <div>Иванов Иван Иванович</div>
                    </div>
                    <div className={styles.input_info}>
                        <div>Email</div>
                        <div>ivanov_ii@mail.ru</div>
                    </div>
                </div>
                <div className={styles.balance}>
                    <div className={styles.balance_info}>
                        <div>Ваш баланс</div>
                        <span>15 талантов</span>
                        <img className="anchor" src={info} alt="Информация" onClick={() => setHandleInfo(handleInfo => !handleInfo)} />
                        {handleInfo 
                        ? 
                            <TalentModal>
                                <Msg />
                            </TalentModal> 
                        : 
                            null
                        }
                    </div>
                    <div className={styles.balance_btn}>
                        <button>Редактировать профиль</button>
                        <button>Изменить пароль</button>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper_btn}>
                <button>Оценить проекты</button>
                <button>Загрузить проект</button>
            </div>
            <div className={styles.projects_wrapper}>
                <h3>Мои проекты</h3>
                <div className={styles.projects}>
                    <p>
                        Пока что у Вас нет проектов =(
                        Нажмите на кнопку «Создать проект» 
                        и заполните форму о своём стартап-проекте!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;


const TalentModal = ({ children }) => {
    const anchor = document.createElement('div');
    document.querySelector('.anchor').after(anchor);

    return createPortal(children, anchor);
}

const Msg = () => {
    return (
        <div className={styles.customization}>
            <p>Таланты - это баллы, которые можно получать за оценку проектов.</p>
            <p>Получив 15 баллов Вы становитесь Экспертом, если же у вас менее 15 баллов Ваша роль - Новичок</p>
        </div>
    )
}