
const initialTotalState = {
    totalValue:0
};

const addToTotal = (state=initialTotalState, action) => {
    switch (action.type){
        case 'ADD':
            return {
                totalValue: Number.parseInt(action.currentValue,10)+Number.parseInt(state.totalValue,10),
            }
        case 'CLEAR':
            return {
                totalValue: 0
            }
        default: return state
    }
}

export default addToTotal