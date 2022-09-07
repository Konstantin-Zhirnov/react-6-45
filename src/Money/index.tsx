import React from 'react'
import classNames from 'classnames'

import classes from './Money.module.sass'

const Money: React.FC = () => {
  const classes_1 = classNames(classes.hop, classes.hop2, classes.notscroll, classes.start_hop)
  const classes_2 = classNames(classes.hop, classes.hop3, classes.notscroll, classes.start_hop)
  const classes_3 = classNames(classes.hop, classes.hop4, classes.notscroll, classes.start_hop)
  const classes_4 = classNames(classes.hop, classes.hop5, classes.notscroll, classes.start_hop)
  const classes_5 = classNames(classes.hop, classes.hop_age1, classes.start_hop, classes.last)
  const classes_6 = classNames(classes.hop, classes.hop_age2, classes.start_hop, classes.last)
  const classes_7 = classNames(classes.hop, classes.hop_age3, classes.start_hop, classes.last)

  return (
    <div className={classes.container}>
      <i className={classes_1} style={{ transform: 'translateZ(0px)' }}></i>
      <i className={classes_2} style={{ transform: 'translateZ(0px)' }}></i>
      <i className={classes_3}></i>
      <i className={classes_4} style={{ transform: 'translateY(0px)' }}></i>
      <i className={classes_5}></i>
      <i className={classes_6}></i>
      <i className={classes_7}></i>
    </div>
  )
}

export default Money
