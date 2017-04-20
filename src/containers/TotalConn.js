
import { connect } from 'react-redux'
import TotalText from '../components/TotalText'
import * as action from '../actions'

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const TotalConn = connect (mapStateToProps,action)(TotalText)

export default TotalConn;