import React from 'react'

import logo from '../images/logo.png'

import classes from './Logo.module.sass'

const Logo: React.FC = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="6 из 45" />
    </div>
  )
}

export default Logo
