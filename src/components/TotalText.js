import React from 'react'

const TotalText = (state) => {
    return(
        <span>
            Your total kilometers is : {state.totalValue}
        </span>
    )
}

export default TotalText;
