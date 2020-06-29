import React from 'react'
import './ResultBoard.css'
import noMoney from '../../images/noMoney.png'
import money from '../../images/money.png'

const ResultBoard = ({ result, victory, isChamp }) => {

    return (
        <div className="ResultBoard">
            <div className="result" >
                <div className="result_top">
                    <p className="result_top_text">Вы выбрали:</p>
                    <p className="result_top_number">
                        {
                            result.length === 6
                                ? result.join(", ")
                                : 'Нужно выбрать 6 чисел!'
                        }
                    </p>
                </div>
                <div className="result_bottom">
                    <div className="poloska"></div>
                    <p className="result_bottom_text">Выпали:</p>
                    <div className="result_bottom_box">
                        {
                            victory.map((item, index) =>
                                (
                                    <div key={index} id={'number_' + (index + 1)} className={`result_bottom_number anim`}>{item}</div>
                                ))
                        }
                    </div>
                </div>
            </div>
            {
                !isChamp
                    ? <img src={noMoney} className={`present anim`} alt="Вы не выйграли в лотерею 6 из 45" />
                    : <img className={`present anim`} src={money} alt="Вы выйграли в лотерею 6 из 45" />
            }
        </div>
    )
}

export default ResultBoard
