import React from 'react'
import styles from './Footer.module.sass'
import Button from '../../Button/Button'
import style from '../../Button/Button.module.sass'
import classNames from 'classnames'

const Footer = ({ onResult, onReset, isChecked }) => {

    const classes = isChecked ? classNames(`${style.Button} ${style.close}`) : classNames(style.Button) 
    const classesReset = isChecked ? classNames(style.Button) : classNames(`${style.Button} ${style.close}`)

    return (
        <div className={styles.Footer}>
            <Button textButton={'Проверить'} onFunction={onResult} classes={classes} />
            <Button textButton={'Сбросить'} onFunction={onReset} isChecked={isChecked} classes={classesReset} />
        </div>
    )
}

export default Footer



