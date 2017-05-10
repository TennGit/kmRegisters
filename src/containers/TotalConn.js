
import { connect } from 'react-redux'
import TotalText from '../components/TotalText'

const mapStateToProps = (state) => state

const TotalConn = connect (mapStateToProps)(TotalText)

export default TotalConn;