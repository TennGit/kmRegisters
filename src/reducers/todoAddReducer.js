const initialState = {
    value:0
};

const addToTotal = (state=initialState, action) => {
    console.log('aaaa',action.type)
    switch (action.type){
        case 'ADD':
            return {
                value: Number.parseInt(state.value,10)+Number.parseInt(action.value,10)
            }
        case 'CLEAR':
            return {
                value: 0
            }
        default: return state
    }
}

export default addToTotal