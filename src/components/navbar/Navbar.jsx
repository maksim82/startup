import log from '../../utils/log.png';
import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <h2 className={styles.title}>Открытая экспертиза <span>студенческих стартапов</span></h2>
                <div className={styles.log_btn}>
                    <span>Войти</span>
                    <div className={styles.wrapper_img}>
                        <img src={log} alt="Вход" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;