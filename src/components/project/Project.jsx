import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createPortal } from "react-dom";

import TitleModal from './modalMarks/TitleModal';

import styles from './project.module.scss';

import example from '../../utils/example.png';

const Project = () => {
    const navigate = useNavigate();
    const [handleMark, setHandleMark] = useState(false);

    return (
        <div className={styles.project_wrapper}>
            <h2>Страница проекта</h2>
            <div className={styles.project}>
                <div className={styles.left_col}>
                    <div className={styles.img_wrapper}>
                        <img src={example} alt="Картинка" />
                    </div>
                    <div className={styles.participants}>
                        Участники проекта
                        <ul>
                            <li>Кузнецовский Денис Владимирович</li>
                            <li>Сироткин Егор Сергеевич</li>
                            <li>Вараскин Дмитрий Александрович</li>
                        </ul>
                    </div>
                    <div className={styles.mark}>
                        Рейтинг проекта
                        <span>31 балл</span>
                    </div>
                </div>
                <div className={styles.right_col}>
                    <h3>Цифровой стенд для исследования свойств пластиков, используемых в 3D печати</h3>
                    <div className={styles.university}>ФГБОУ ВО “Вятский ГАТУ”</div>
                    <div className={styles.project}>https://rutube.ru/video/e78e0aaa52b6945a353ab5bf6704f630/</div>
                    <div className={styles.description}>
                        Проект предназначен для использования в образовательных учреждениях и в промышленных предприятиях 
                        проектирующих изделия, заинтересованных в изучении свойств новых материалов, способов и режимов 
                        3D печати (температура экструдера, толщина слоя, скорость перемещения печатающей головки, степень 
                        наполнения, направление волокон, вид пластика).Разработка предусматривает создание экономичного 
                        оборудования для проверки филамента (пластика) используемого в 3D печати, который бы соответствовал 
                        предъявляемым требованиям к заданным физико-механическим, эксплуатационным, технологическим и другим 
                        характеристикам.
                    </div>
                    <button onClick={() => navigate('/create')}>Редактировать</button>
                </div>
            </div>
            <button className={styles.btn_mark} onClick={() => setHandleMark(handleMark => !handleMark)}>Оценить</button>
            {handleMark ? <Modal><TitleModal /></Modal> : null}
        </div>
    )
}

export default Project;

const Modal = ({ children }) => {
    const node = document.createElement('div');
    document.body.append(node);
    return createPortal(children, node);
}