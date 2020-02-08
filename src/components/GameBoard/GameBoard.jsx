import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import styles from './GameBoard.module.css';

const GameBoard = (props) => {
    return(
        <div className={`${styles.GameBoard} component`}>
            <GuessRow />
            <GuessRow />
        </div>
    )
}

export default GameBoard;