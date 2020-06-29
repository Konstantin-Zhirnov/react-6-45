import React from 'react'
import styles from './GameBoard.module.sass'
import Field from '../../Field/Field'


const GameBoard = ({ fields, onFieldSelection }) => {

	return (
		<div className={styles.GameBoard}>
			<p className={styles.text__top}>Лото 6 из 45 - мы предлагаем Вам проверить свою удачу на нашем сайте совершенно бесплатно, без каких-либо регистраций и смс.</p>
			<p className={styles.text__bottom}>Отметьте 6 чисел:</p>
			<div className={styles.game_box}>
				{
					fields.map(field =>
						<Field key={field.id} onFieldSelection={onFieldSelection} field={field} />)
				}
				{/* {
					fields.map(field => <b key={field.id} onClick={() => onFieldSelection(field.id - 1)} className={field.isSelected ? `${styles.field} ${styles.yellow} `: styles.field} >{field.id}</b>)
				} */}
			</div>
		</div>
	)
}

export default GameBoard