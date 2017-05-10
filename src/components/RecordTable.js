import React from 'react'

const RecordTable = (state) => {
    let stateValue = state.stateValue
    return(
        <div className="recordTable">
            <br/><br/>
            <table>
                <thead>
                <tr>
                    <td>
                        Index
                    </td>
                    <td>
                        Date
                    </td>
                    <td>
                        {' '}
                    </td>
                    <td>
                        km
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    stateValue.map(record=>{
                        return (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.date}</td>
                                <td>
                                    {' '}
                                </td>
                                <td>{record.currentValue}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default RecordTable;