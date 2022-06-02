import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { navigate } from 'gatsby'

import Layout from "../../Layout/container"

import bgImg from 'src/images/pen-writer.jpg'
import Button from 'src/components/Input/Button'
import EmailForm from 'src/components/Form/emailForm'


const IndexPage = ({ fetchAccounts, activeAccount }) => {


  const handleConnect = (event) => {
    event.preventDefault()
    
    fetchAccounts && fetchAccounts()
  }


  React.useEffect(() => {
    if (activeAccount.isConnected) {
      navigate('/profile')
    } 
  })

  return (
    <Layout>
      <Helmet><title>Esy</title></Helmet>

      <SectionWrapper>
        <HeroWrapper>
            <HeroSummary>
              <p>Write, Collect, and Trade Literary NFT's</p>
              <EmailForm />
            </HeroSummary>
          </HeroWrapper>
      </SectionWrapper>
    </Layout>
  )
}
 



export default IndexPage





const MainSection = styled.main`
  // display: flex;
  flex: 1;
  margin: 0 auto;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  font-family: 'sans-serif';
  height: 100%;
  background: #fff;
  flex-direction: column;
  color: #000;
`

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`


const SectionWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding: 0 50px;
  background: #000;
  position: relative;

  @media(max-width: 600px) {
    padding: 0 25px;
  }

  ::before {
    content: "";
    background-image:  url(${bgImg});
    transform: scaleX(-1);
    background-repeat: no-repeat;
    opacity: 0.06;


    // background-size: 80%;
    background-size: cover; 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: -50% 50%;

    @media(max-width: 900px) {
      background-position: 50% 0%;
      background-size: 1000px;
    }

  }


`



const HeroSummary = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 36px;
  max-width: 500px;
  text-align: center;
  align-items: flex-start;
  line-height: 1.6;
  justify-content: center;
  font-family: 'Spartan', sans-serif;

  p:first-child {
    text-align: left;
  }

  @media(max-width: 600px) {
    font-size: 22px;
  }

  @media(max-width: 500px) {
    font-size: 18px;
  }

  @media(max-width: 400px) {
    font-size: 16px;
  }

  @media(max-width: 320px) {
    font-size: 12px;
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