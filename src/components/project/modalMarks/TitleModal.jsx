import { useState } from 'react';

import CriteriaModal from "./criteriaModal/CriteriaModal";
import MarksModal from './marksModal/MarksModal';

import styles from './titleModal.module.scss';

const TitleModal = () => {
    const handleBtn = false;
    return (
        <div className={styles.title_wrapper}>
            <CriteriaModal />
            <MarksModal />
            { handleBtn 
                ?  
            <div>
                <button>Предыдущая</button>
                <button>Следующая</button> 
            </div>
                : 
            null}
            <button>Приступить к оценке</button>
        </div>
    )
}

export default TitleModal;