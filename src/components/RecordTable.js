import React from 'react'

const RecordTable = (state) => {
    console.log(state)
    return(
        <div className="recordTable">
            <br/><br/>
            <table>
                <thead>
                <tr>
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
                <tr>
                    <td>{state.date}</td>
                    <td>
                        {' '}
                    </td>
                    <td>{state.value}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default RecordTable;