import styles from './ratingMarks.module.scss';

import image from '../../utils/image.png';

const RatingMarks = () => {
    return (
        <div className={styles.wrapper_rating}>
            <h2>Рейтинг проектов</h2>
            <div className={`${styles.horizontal_scroll_wrapper} ${styles.squares}`}>
                <div className={styles.leftArr}></div>
                <div className={styles.content}>
                    <div className={styles.project}>
                        <div className={styles.wrapper_img}>
                            <img src={image} alt="Картинка" />
                        </div>
                        <div className={styles.info_project}>
                            <h3>Умный гардероб</h3>
                            <div className={styles.description}>ГПОАУ АО “Амурский педагогический колледж”</div>
                            <div className={styles.mark}>23 балла</div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.wrapper_img}>
                            <img src={image} alt="Картинка" />
                        </div>
                        <div className={styles.info_project}>
                            <h3>Умный гардероб</h3>
                            <div className={styles.description}>ГПОАУ АО “Амурский педагогический колледж”</div>
                            <div className={styles.mark}>23 балла</div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.wrapper_img}>
                            <img src={image} alt="Картинка" />
                        </div>
                        <div className={styles.info_project}>
                            <h3>Умный гардероб</h3>
                            <div className={styles.description}>ГПОАУ АО “Амурский педагогический колледж”</div>
                            <div className={styles.mark}>23 балла</div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightArr}></div>
            </div>
        </div>
    )
}

export default RatingMarks;