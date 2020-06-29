import React from 'react';
import logo from './images/logo.png'
import styles from './App.module.sass'
import classNames from 'classnames'
import LotoSixContainer from './Loto/LotoSix/LotoSixContainer';

function App() {

  const classes1 = classNames(styles.hop, styles.hop2, styles.notscroll, styles.start_hop);
  const classes2 = classNames(styles.hop, styles.hop3, styles.notscroll, styles.start_hop);
  const classes3 = classNames(styles.hop, styles.hop4, styles.notscroll, styles.start_hop);
  const classes4 = classNames(styles.hop, styles.hop5, styles.notscroll, styles.start_hop);
  const classes5 = classNames(styles.hop, styles.hop_age1, styles.start_hop, styles.last);
  const classes6 = classNames(styles.hop, styles.hop_age2, styles.start_hop, styles.last);
  const classes7 = classNames(styles.hop, styles.hop_age3, styles.start_hop, styles.last);

  return (
    <div className={styles.App}>
      <div className={styles.headerBox}>
        <div className={styles.logo}><img src={logo} alt="6 из 45" /></div>
        <div className={styles.text}><h1>Проверьте свою удачу!</h1></div>
      </div>
      <LotoSixContainer />
      <div className={styles.money_box}>
        <i className={classes1} style={{ transform: 'translateZ(0px)' }}></i>
        <i className={classes2} style={{ transform: 'translateZ(0px)' }}></i>
        <i className={classes3}></i>
        <i className={classes4} style={{ transform: 'translateY(0px)' }}></i>
        <i className={classes5}></i>
        <i className={classes6}></i>
        <i className={classes7}></i>
      </div>
    </div>
  );
}

export default App;
