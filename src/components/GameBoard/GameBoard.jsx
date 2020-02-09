import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import styles from './GameBoard.module.css';

const GameBoard = (props) => {
    return(
        <div className={styles.GameBoard}>
            {props.guesses.map((guess, idx) => {
                return(
                    <GuessRow guess={guess} colors={props.colors} key={idx} rowIdx={idx} currentGuess={idx === (props.guesses.length - 1)}/>
                )
            })}
        </div>
    )
}

export default GameBoard;