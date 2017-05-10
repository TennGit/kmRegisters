
import { connect } from 'react-redux'
import TotalText from '../components/TotalText'

const mapStateToProps = (state) => {
    return state.addTotalReducer
}

const TotalTextContainer = connect (mapStateToProps)(TotalText)

export default TotalTextContainer;