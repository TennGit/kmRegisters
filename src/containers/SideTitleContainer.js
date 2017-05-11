import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import SideTitleComponent from "../components/SideTitleComponent";


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = () => {return {}}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideTitleComponent)

export default Container;