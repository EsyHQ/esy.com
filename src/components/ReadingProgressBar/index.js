import React from 'react'
import styled from 'styled-components'



const ReadingProgressBar = ({ width }) => {
    return <ComponentWrapper style={{ width: width + "%" }}></ComponentWrapper>
}


export default ReadingProgressBar



const ComponentWrapper= styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: 100px;
    height: 6px;
    border-radius: 0px 2px 0px 0px;
    background: #8b3dff;
`