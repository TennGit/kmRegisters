

const addToTotal = (state={}, action) => {
    switch (action.type){
        case 'ADD':
            return {
                value: action.value
            }
        default: return state
    }
}

export default addToTotal