import React from 'react'


const Button = ({textButton, onFunction, classes}) => {
    return(
        <div className={classes} onClick={onFunction}>{textButton}</div>
    )
}

export default Button 