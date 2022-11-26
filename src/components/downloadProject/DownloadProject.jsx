import styles from './downloadProject.module.scss';

import plus from '../../utils/plus.png';

const DownloadProject = () => {
    return (
        <div className={styles.download}>
            <h2>Загрузка проекта</h2>
            <input type="text" placeholder="Название проекта" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Описание проекта"></textarea>
            <input type="text" placeholder="Ссылка на видео-визитку" />
            <input type="text" placeholder="Университет" />
            <input type="text" placeholder="Курс" />
            <div className={styles.wrapper_students}>
                <input className={styles.student} type="text" placeholder="Участник проекта" />
                <button className={styles.students_btn}><img src={plus} alt="+"/></button>
            </div>
            <button className={styles.send_btn}>Создать проект</button>
        </div>
    )
}

export default DownloadProject;