import React from 'react'
import styled from 'styled-components'

import { Link } from "gatsby"
import LogoImg from '../../images/color-nobg.png'
import LogoSVG from '../../svg/color-wo-bg.svg'

const Logo = () => {
    return (<LogoContainer>
                <img src={LogoImg} />
                {/* <LogoSVG /> */}
            </LogoContainer>)
}


export default Logo


const LogoContainer = styled.div`
    color: #fff;
    font-weight: 500;
    line-height: 1.15;

    img {
        max-width: 65px;
    }

    a {
        text-decoration: none;
        font-family: 'Rokkitt', serif;
        font-family: 'Dancing Script', serif;
        color: #fff;
        font-weight: 400;
    }
`