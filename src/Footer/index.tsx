import React from 'react'

import CheckButton from './CheckButton'
import ResetButton from './ResetButton'

import styles from './Footer.module.sass'

const Footer: React.FC = React.memo(() => {
  return (
    <div className={styles.container}>
      <CheckButton />
      <ResetButton />
    </div>
  )
})

export default Footer
