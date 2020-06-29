import React from 'react';
import LotoSix from "./LotoSix";
import { connect } from "react-redux";

class LotoSixContainer extends React.Component {
    render() {
        return (
            <LotoSix {...this.props}
                isChecked={this.props.isChecked}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    isChecked: state.lotoSix.isChecked
})

export default connect(mapStateToProps)(LotoSixContainer)