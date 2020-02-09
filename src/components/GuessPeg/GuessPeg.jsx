import React from 'react';
import styles from './GuessPeg.module.css';

const GuessPeg = (props) => {
    return(
        <div className={styles.GuessPeg}>
            {props.color}
        </div>
    )
}

export default GuessPeg;