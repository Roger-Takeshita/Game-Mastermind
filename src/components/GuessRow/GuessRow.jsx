import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';
import styles from './GuessRow.module.css';

const GuessRow = (props) => {
    return(
        <div className={`${styles.GuessRow} flex-h`}>
            <div>{props.rowIdx + 1}</div>
            <GuessPegs colors={props.colors} code={props.guess.code}/>
            {props.currentGuess ? <ScoreButton /> : <GuessScore />}
        </div>
    )
}

export default GuessRow;