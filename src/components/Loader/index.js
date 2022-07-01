import React from 'react'
import styled from 'styled-components'

import { keyframes } from 'styled-components'


const Loader = () => {
    return <LoaderWrapper><div></div></LoaderWrapper>
}


export default Loader

const heartAnimation = keyframes`
    0% {
        transform: scale(0.95);
    }
    5% {
        transform: scale(1.1);
    }
    39% {
        transform: scale(0.85);
    }
    45% {
        transform: scale(1);
    }
    60% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0.9);
    }
`

const LoaderWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    // transform-origin: 40px 40px;
    // top: 22px;

    > div {
        top: 0px;
        left: ;
        position: absolute;
        width: 16px;
        height: 16px;
        background-image: linear-gradient(315deg,#bf3a30 0%,#864ba2 74%);
        animation-name: ${heartAnimation};
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
`




