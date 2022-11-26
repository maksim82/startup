import styles from './criteriaModal.module.scss';

import booksaved from '../../../../utils/booksaved.png';
import briefcase from '../../../../utils/briefcase.png';
import dashboard from '../../../../utils/dashboard.png';
import diagram from '../../../../utils/diagram.png';
import less from '../../../../utils/less.png';
import microscope from '../../../../utils/microscope.png';
import player from '../../../../utils/player.png';
import plus_modal from '../../../../utils/plus_modal.png';
import score from '../../../../utils/score.png';
import settings from '../../../../utils/settings.png';

const CriteriaModal = () => {
    return (
        <div className={styles.critaria_wrapper}>
            <h2>Критерии оценивания</h2>
            <div className={styles.criteria_col}>
                <h3>Технологичность стартап-проекта</h3>
                <div className={styles.criteria}>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={player} alt="Плеер" />
                        </div>
                        <div className={styles.text}>
                            Оценка достижения TRL 3 (создание MVР)
                        </div>
                    </div>
                    <div className={styles.math_img}>
                        <img src={plus_modal} alt="Плюс" />
                    </div>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={settings} alt="Настройки" />
                        </div>
                        <div className={styles.text}>
                            Оценка технологичности стартап-проекта
                        </div>
                    </div>
                    <div className={styles.math_img}>
                        <img src={less} alt="Меньше или равно" />
                    </div>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={score} alt="Баллы" />
                        </div>
                        <div className={styles.text}>
                            баллов
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.criteria_col}>
                <h3>Перспективы коммерциализации проекта</h3>
                <div className={styles.criteria}>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={diagram} alt="Диаграмма" />
                        </div>
                        <div className={styles.text}>
                            Оценка коммерческих перспектив нового товара/ изделия/технологии/услуги
                        </div>
                    </div>
                    <div className={styles.math_img}>
                        <img src={plus_modal} alt="Плюс" />
                    </div>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={microscope} alt="Микроскоп" />
                        </div>
                        <div className={styles.text}>
                            Соответствие проекта научным и (или) научно-техническим приоритетам 
                            образовательной организации/региона заявителя/предприятия
                        </div>
                    </div>
                    <div className={styles.math_img}>
                        <img src={less} alt="Меньше или равно" />
                    </div>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={score} alt="Баллы" />
                        </div>
                        <div className={styles.text}>
                            баллов
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.criteria_col}>
                <h3>Квалификация заявителя</h3>
                <div className={styles.criteria}>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={briefcase} alt="Портфель" />
                        </div>
                        <div className={styles.text}>
                            Оценка потенциала, квалификации и укомплектованности команды
                        </div>
                    </div>
                    <div className={styles.math_img}>
                        <img src={plus_modal} alt="Плюс" />
                    </div>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={booksaved} alt="Книга" />
                        </div>
                        <div className={styles.text}>
                            Оценка участия в программе «Стартап как диплом»
                        </div>
                    </div>
                    <div className={styles.math_img}>
                        <img src={plus_modal} alt="Плюс" />
                    </div>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={dashboard} alt="Доска" />
                        </div>
                        <div className={styles.text}>
                            Оценка участия в образовательных программах повышения предпринимательской компетентности
                        </div>
                    </div>
                    <div className={styles.math_img}>
                        <img src={less} alt="Меньше или равно" />
                    </div>
                    <div className={styles.criteria_item}>
                        <div className={styles.img_wrapper}>
                            <img src={score} alt="Баллы" />
                        </div>
                        <div className={styles.text}>
                            баллов
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CriteriaModal;