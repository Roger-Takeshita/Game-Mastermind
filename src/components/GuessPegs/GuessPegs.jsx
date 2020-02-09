import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import styles from './GuessPegs.module.css';

const GuessPegs = (props) => {
    return(
        <div className={styles.GuessPegs}>
            <GuessPeg color={props.colors[props.code[0]]}/>
            <GuessPeg color={props.colors[props.code[1]]}/>
            <GuessPeg color={props.colors[props.code[2]]}/>
            <GuessPeg color={props.colors[props.code[3]]}/>
        </div>
    )
}

export default GuessPegs;