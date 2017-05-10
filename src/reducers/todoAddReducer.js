const initialState = {
    value:0,
    date: "current"
};

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const addToTotal = (state=initialState, action) => {
    let now = new Date();
    switch (action.type){
        case 'ADD':
            return {
                value: Number.parseInt(state.value,10)+Number.parseInt(action.value,10),
                date: days[now.getDay()]
            }
        case 'CLEAR':
            return {
                value: 0
            }
        default: return state
    }
}

export default addToTotal