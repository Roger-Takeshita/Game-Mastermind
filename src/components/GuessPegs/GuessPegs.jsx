import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import styles from './GuessPegs.module.css';

const GuessPegs = (props) => {
    return(
        <div className={`${styles.GuessPegs} component flex-h`}>
            <GuessPeg />
            <GuessPeg />
            <GuessPeg />
            <GuessPeg />
        </div>
    )
}

export default GuessPegs;