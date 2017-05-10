
import { connect } from 'react-redux'
import TotalText from '../components/TotalText'

const mapStateToProps = (state) => state

const TotalTextContainer = connect (mapStateToProps)(TotalText)

export default TotalTextContainer;