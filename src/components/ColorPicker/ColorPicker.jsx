import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => {
    return(
        <div className={styles.ColorPicker}>
            {props.colors.map(color => {
                return(
                    <button key={color}>{color}</button>
                )
            })}
        </div>
    )
}

export default ColorPicker;