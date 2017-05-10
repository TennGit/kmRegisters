import React from 'react'
import AddToTotalForm from './AddToTotalForm'
import RecordTable from './RecordTable'


const FormAndTable = (props) => {
    console.log("gggggg")
    console.log(props)
    return(
        <div>
            <AddToTotalForm props={props}/>
            <RecordTable stateValue={props.addToTableReducer}/>
        </div>
    )
}

export default FormAndTable