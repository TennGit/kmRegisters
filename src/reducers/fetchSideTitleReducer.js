/**
 * Created by hengl on 11/05/2017.
 */


const initialState = {
    hasError: false,
    loading: false,
    title: ''
};

const fetchSideTitleReducer = (state=initialState, action) => {
    switch (action.type){
        case 'LOAD_SIDE_TEXT_PENDING':
            return {
                hasError: false,
                loading: true,
                title: 'Loading...'
            }
        case 'LOAD_SIDE_TEXT_FULFILLED':
            console.log('fulfilled:', action.payload)
            return {
                hasError: false,
                loading: false,
                title: action.payload.data.title
            }
        case 'LOAD_SIDE_TEXT_REJECTED':
            return {
                hasError: true,
                loading: false,
                title:''
            }
        default: return state
    }
}

export default fetchSideTitleReducer