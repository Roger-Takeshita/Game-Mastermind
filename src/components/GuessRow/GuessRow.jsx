import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import styles from './GuessRow.module.css';

const GuessRow = (props) => {
    return(
        <div className={`${styles.GuessRow} component flex-h`}>
            GuessRow
            <GuessPegs />
            <GuessScore />
        </div>
    )
}

export default GuessRow;