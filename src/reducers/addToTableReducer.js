let recordIndex = 1;

const stackUpTable = (state={}, action) => {
    return {
        id: recordIndex++,
        date: action.date,
        currentValue: action.currentValue,
    }
}

const addToTable = (state = [], action)=>{
    switch (action.type){
        case 'ADD_TO_TABLE':
            return [
                ...state,
                stackUpTable(undefined, action)
            ]
        case 'CLEAR':
            return []
        default: return state
    }
}

export default addToTable