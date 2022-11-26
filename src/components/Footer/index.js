import React from 'react'
import styled from 'styled-components'

import FooterStart from './footerStart'
import FooterEnd from './footerEnd'



const Footer = () => {

    return (<FooterElement>
              <FooterStart />
              <FooterEnd />
            </FooterElement>)
}


export default Footer




const FooterElement = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;

 a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rokkitt, sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  svg { 
    fill: #fff;
  }
`



