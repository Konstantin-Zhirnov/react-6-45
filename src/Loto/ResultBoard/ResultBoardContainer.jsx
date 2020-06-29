import React from 'react';
import ResultBoard from "./ResultBoard";
import { connect } from "react-redux";

class ResultBoardContainer extends React.Component {
    render() {
        return (
            <ResultBoard {...this.props}
                result={this.props.result}
                victory={this.props.victory}
                isChamp={this.props.isChamp}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    result: state.lotoSix.result,
    victory: state.lotoSix.victory,
    isChamp: state.lotoSix.isChamp
})

export default connect(mapStateToProps)(ResultBoardContainer)