import { connect } from 'react-redux'
import addToTotal,{clearTotal} from '../actions'
import AddToTotalForm from '../components/AddToTotalForm'

const mapStateToProps = (state) => state


const mapDispatchToProps = (dispatch) => {
    return {
        addToTotal: (input) => {
            dispatch(addToTotal(input))
        },
        clearTotal: () => {
            dispatch(clearTotal())
        },
    }
}
const TotalRecordForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddToTotalForm)

export default TotalRecordForm