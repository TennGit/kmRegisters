const initialState = {
    value:0
};

const addToTotal = (state=initialState, action) => {
    switch (action.type){
        case 'ADD':
            return {
                value: action.value + state.value
            }
        default: return state
    }
}

export default addToTotal