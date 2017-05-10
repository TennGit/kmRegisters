
import { connect } from 'react-redux'
import RecordTable from '../components/RecordTable'

const mapStateToProps = (state) => state

const RecordsTableContainer = connect (mapStateToProps)(RecordTable)

export default RecordsTableContainer;