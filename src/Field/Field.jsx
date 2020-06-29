import React from 'react'
import styles from './Field.module.sass'

const Field = ({ field, onFieldSelection }) => {
    const fieldClasses = field.isSelected ? `${styles.field} ${styles.yellow} ` : styles.field
    return (
        <b
            onClick={() => onFieldSelection(field.id - 1)}
            className={fieldClasses}
        >{field.id}</b>
    )
}

export default Field

