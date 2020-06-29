import React from 'react';
import Footer from "./Footer";
import {isCheckedTrue, onResetSelection, setResult, setVictory, isChampTrue, onReset, champions} from "../../store/actions/lotoSix";
import {connect} from "react-redux";

class FooterContainer extends React.Component {

    onResult = () => {
        this.props.isCheckedTrue()
        this.props.setResult()
        this.props.onResetSelection()
        this.props.setVictory() 
        this.props.champions()
    }
    
    //Определение победы
    // onChamp = () => {
    //     const result = this.props.result
    //     const victory = this.props.victory
    //     const r = result.sort().join('')
    //     const v = victory.sort().join('')    
    //     r === v && this.props.isChampTrue()
    // }    
    
    onReset = () => {
        this.props.onReset()
    }

    render() {
        return (
            <Footer {...this.props}
            onResult={this.onResult}
            onReset={this.onReset}
            isChecked={this.props.isChecked}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    isChecked: state.lotoSix.isChecked
})

export default connect(mapStateToProps, {isCheckedTrue, onResetSelection, setResult, setVictory, isChampTrue, onReset, champions })(FooterContainer)