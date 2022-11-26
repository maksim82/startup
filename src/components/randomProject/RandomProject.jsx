import { useNavigate } from 'react-router-dom';

import styles from './randomProject.module.scss';

import image from '../../utils/image.png';

const RandomProject = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.btn_wrapper}>
                <button onClick={() => navigate('/create')}>Создать</button>
                <button>Выбрать проект</button>
            </div>
            <div className={styles.project}>
                <div className={styles.wrapper_img}>
                    <img src={image} alt="Картинка" />
                </div>
                <div className={styles.info_project}>
                    <h2>Умный гардероб</h2>
                    <div className={styles.description}>
                        Есть над чем задуматься: реплицированные с зарубежных источников, современные исследования 
                        заблокированы в рамках своих собственных рациональных ограничений. Прежде всего, выбранный 
                        нами инновационный путь предопределяет высокую востребованность соответствующих условий активизации. 
                        С учётом сложившейся международной обстановки, убеждённость некоторых оппонентов предопределяет 
                        высокую востребованность экономической целесообразности принимаемых решений.
                    </div>
                    <div className={styles.mark}>22 балла</div>
                    <button onClick={() => navigate('/profile')}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default RandomProject;