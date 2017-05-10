import { connect } from 'react-redux'
import addToTotal,{clearTotal,addToTable} from '../actions'
import FormAndTable from '../components/FormAndTable'

const mapStateToProps = (state) => {
    return state
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToTotal: (input) => {
            dispatch(addToTotal(input))
            dispatch(addToTable(input))
        },
        clearTotal: () => {
            dispatch(clearTotal())
        },
    }
}
const FormAndTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormAndTable)

export default FormAndTableContainer