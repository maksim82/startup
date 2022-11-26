import RandomProject from '../randomProject/RandomProject';
import RatingMarks from '../ratingMarks/RatingMarks';

import styles from './home.module.scss';
import home from '../../utils/home.png'

const Home = () => {
    return (
        <div>
            <div className={styles.preview}>
                <div className={styles.container}>
                    <h1>создай стартап <br /> или стань экспертом
                    </h1>
                    <div>
                        <img src={home} alt="Ракета" />
                    </div>
                </div>
            </div>
            <RatingMarks />
            <RandomProject />
        </div>
    )
}

export default Home;