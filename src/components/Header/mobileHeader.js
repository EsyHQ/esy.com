import React from 'react'
import styled from 'styled-components'


const MobileHeader = () => {
    return (<ComponentWrapper>

            </ComponentWrapper>)
}



export default MobileHeader



const ComponentWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background: #000;
    overflow: hidden;
    z-index: 999;
    top: 100px;
    left: 0;
    display: none;

    @media(max-width: 900px) {
        display: block;
    }
`