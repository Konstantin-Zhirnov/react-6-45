import React from 'react';
import GameBoard from "./GameBoard";
import {onFieldSelection} from "../../store/actions/lotoSix";
import {connect} from "react-redux";

class GameBoardContainer extends React.Component {
    render() {
        return (
            <GameBoard {...this.props}
            onFieldSelection={this.props.onFieldSelection}
            fields={this.props.fields}
             />
        )
    }
}

let mapStateToProps = (state) => ({
    fields: state.lotoSix.fields
})

export default connect(mapStateToProps, {onFieldSelection})(GameBoardContainer)