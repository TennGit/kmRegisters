/**
 * Created by hengl on 10/05/2017.
 */
import React from 'react'

const AddToTotalForm = (props) => {
    let input

    return (
        <div>
            <form onSubmit={e=> {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                props.addToTotal(input.value)
                input.value=''
            }}>
                <input ref={node=>{
                    input=node
                }} />
                <button type="submit">
                    Add To Total
                </button>{' '}
                <button onClick={()=>props.clearTotal()}>
                    Clear record
                </button>
            </form>
        </div>
    )
}

export default AddToTotalForm;