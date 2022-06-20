import React from 'react'
import styled from 'styled-components'

import { Link } from "gatsby"


const Logo = () => {
    return (<LogoContainer>
                <Link to="/">Esy</Link>
            </LogoContainer>)
}


export default Logo


const LogoContainer = styled.div`
    font-size: 38px;
    color: #fff;
    font-weight: 500;
    line-height: 1.15;

    a {
        text-decoration: none;
        font-family: 'Rokkitt', serif;
        font-family: 'Dancing Script', serif;
        color: #fff;
        font-weight: 400;
    }
`