import React from 'react'
import styled from 'styled-components'

import Logo from 'src/components/Logo'
import FooterNav from './footerNav'


const FooterStart = () => {
    return (<FooterStartContainer>
                <FooterLeft>
                    <CompanyLogo>
                    <Logo />
                    </CompanyLogo>
            
                    <CompanyDesc>
                      Esy is a digital journaling platform that offers users a suite of analytical tools for writing 
                      rich and expressive essays while discovering powerful insights about their personal writing habits.
                    </CompanyDesc>
         
                </FooterLeft>
                
                <FooterRight>
                   <FooterNav />
                </FooterRight>
            </FooterStartContainer>)
}


export default FooterStart



const FooterStartContainer = styled.div`
    color: #fff;
    width: 100%;
    padding: 5px 50px;
    display: flex;
    justify-content: space-between;


    .footer-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul {
        display: flex;
        justify-content: flex-end;
        width: 100%;

        li {
            list-style-type: none;

        }
    }

      
      @media(max-width: 1200px) {
        flex-direction: column;
      }

      @media(max-width: 900px) {

      }

      @media(max-width: 600px) {
        padding: 5px 25px;
      }
`


const CompanyLogo = styled.div`
  margin-top: 50px;
`


const CompanyDesc = styled.div`
  font-size: 18px;
  color: #fff;
  max-width: 650px;
  margin-top: 50px;
  font-family: Poppins, sans-serif; 

  @media(max-width: 900px) {
    font-size: 16px;
  }
`



const FooterLeft = styled.div`
  width: 100%;
`
const FooterRight = styled.div`
  width: 100%;

  @media(max-width: 1200px) {
    display: flex;
    justify-content: flex-start;
  }

`

