import React from 'react'
import styled from 'styled-components'



const Footer = () => {
    return (
        <FooterElement>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            &copy;{''}
            2022 Esy 
            </a>
        </FooterElement>)
}


export default Footer




const FooterElement = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-top: 1px solid #272727;
//   background-color: #bf3a30;
//   background-image: linear-gradient(315deg,#bf3a30 0%,#864ba2 74%);
background: #000;

  img {
    margin-left: 0.5rem;
  }

 a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rokkitt, sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
`