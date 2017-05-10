/**
 * Created by hengl on 10/05/2017.
 */
import React from 'react'

const AddToTotalForm = (props) => {
    let input
    let propsValue =props.props

    return (
        <div>
            <form onSubmit={e=> {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                propsValue.addToTotal(input.value)
                input.value=''
            }}>
                <input ref={node=>{
                    input=node
                }} />
                <button type="submit">
                    Add To Total
                </button>{' '}
                <button onClick={()=>propsValue.clearTotal()}>
                    Clear record
                </button>
            </form>
        </div>
    )
}

export default AddToTotalForm;