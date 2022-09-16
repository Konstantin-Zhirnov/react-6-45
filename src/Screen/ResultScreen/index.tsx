import React from 'react'
import cn from 'classnames'

import { useAppSelector } from '../../redux/hooks'
import { getSelected, getVictory } from '../../redux/lotto'

import Ball from './Ball'

import noMoney from '../../images/noMoney.png'
import money from '../../images/money.png'

import classes from './ResultScreen.module.sass'

const ResultScreen: React.FC = React.memo(() => {
  const [isChampion, setChampion] = React.useState(false)

  const selected = useAppSelector(getSelected)
  const victory = useAppSelector(getVictory)

  React.useEffect(() => {
    const result = [...selected]
    const victoryArray = [...victory]
    const r = result.sort().join('')
    const v = victoryArray.sort().join('')

    setChampion(r === v)

    return () => {
      setChampion(false)
    }
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.result}>
        <div className={classes.result_top}>
          <p className={classes.result_top_text}>You choosed:</p>
          <p className={classes.result_top_number}>
            {selected.length === 6 ? selected.join(', ') : 'You need to choose 6 numbers!'}
          </p>
        </div>

        <div className={classes.result_bottom}>
          <div className={classes.line} />
          <p className={classes.result_bottom_text}>Dropped out:</p>
          <div className={classes.result_bottom_box}>
            {victory.map((item, index) => (
              <Ball key={index} index={index} item={item} />
            ))}
          </div>
        </div>
      </div>

      <img
        className={cn(classes.present, classes.anim)}
        src={isChampion ? money : noMoney}
        alt=""
      />
    </div>
  )
})

export default ResultScreen
