import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Layout from "src/components/Layout/container"
import Button from 'src/components/Input/Button'
import EmailForm from 'src/components/Form/emailForm'

import bgImg from 'src/images/pen-writer.jpg'



const IndexPage = () => {

  return (<Layout>
            {/* <Helmet><title>Esy</title></Helmet> */}

            <SectionWrapper>
              <HeroWrapper>
                  <HeroSummary>
                    <HeroParagraph>The Smart Journal<br/>for Essayist</HeroParagraph>
                  </HeroSummary>
              </HeroWrapper>
            </SectionWrapper>
          </Layout>)
}
 



export default IndexPage


const HeroParagraph = styled.p`
`

const SectionWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;


  &:nth-child(3) {
    padding: 10%;
  }
`

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding: 0 50px;
  background: #000;
  background: rgb(12, 10, 29);
  position: relative;
  height: 75vh;
  // min-height: 600px;
  
  ::before {
    content: "";
    background-image:  url(${bgImg});
    transform: scaleX(-1);
    background-repeat: no-repeat;
    opacity: 0.02;
    background-size: cover; 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: -50% 50%;

    @media(max-width: 1200px) {

    }

    @media(max-width: 900px) {
      background-position: 50% 0%;
    }
  }

  @media(max-width: 600px) {
    padding: 0 25px;
  }
`

const HeroSummary = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 36px;
  // max-width: 550px;
  max-width: 400px;
  text-align: center;
  align-items: flex-start;
  line-height: 1.6;
  justify-content: center;
  font-family: 'Spartan', sans-serif;

  p:first-child {
    text-align: left;
  }



  @media(max-width: 1200px) {
    max-width: 500px;
    font-size: 32px;
  }

  @media(max-width: 900px) {
  }

  @media(max-width: 600px) {
    max-width: 400px;
    font-size: 26px;
    line-height: 1.8;

    form {
      margin-top: 0;
    }

    .button-wrapper div {
      margin: 25px 0;
    }
  }

  @media(max-width: 500px) {
  } 

  @media(max-width: 430px) {
    font-size: 23px;
  }

  @media(max-width: 320px) {
    font-size: 16px;
  }


  .button {
    font-size: 16px;
    width: 140px;
    color: #fff;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 1px 28px rgb(255 152 0 / 66%);
    background-image: linear-gradient(to right bottom, #e8962e, #e45131) !important;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`