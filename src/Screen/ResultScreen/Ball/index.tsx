import React from 'react'
import cn from 'classnames'

import classes from './Ball.module.sass'

type PropsType = Record<'index' | 'item', number>

const Ball: React.FC<PropsType> = React.memo(({ index, item }) => {
  return (
    <div key={index} className={cn(classes.number, classes[`number_` + (index + 1)], classes.anim)}>
      {item}
    </div>
  )
})

export default Ball
