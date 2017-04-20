const initialState = {
    value:0
};

const addToTotal = (state=initialState, action) => {
    switch (action.type){
        case 'ADD':
            return {
                value: Number.parseInt(state.value)+Number.parseInt(action.value)
            }
        default: return state
    }
}

export default addToTotal