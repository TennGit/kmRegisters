import React from 'react'
import styled from 'styled-components';

const Title = styled.h3`
    display: block;
    font-size: 1em;
    float:right;
    color:blue
`

const SideTitleComponent = (props) => {
    return(<Title>Hoi {props.fetchSideTitleReducer.title}</Title>)
}

export default SideTitleComponent