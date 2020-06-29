import React from 'react'
import styles from './LotoSix.module.sass'
import FooterContainer from '../Footer/FooterContainer'
import ResultBoardContainer from '../ResultBoard/ResultBoardContainer'
import GameBoardContainer from '../GameBoard/GameBoardContainer'

const LotoSix = ({ isChecked }) => {
    return (
        <div className={styles.box} >
            {
                !isChecked
                    ? <GameBoardContainer />
                    : <ResultBoardContainer />
            }
            <FooterContainer />
        </div >
    )
}

export default LotoSix
