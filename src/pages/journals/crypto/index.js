import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import Layout from "src/components/Layout"

import image from 'src/images/btc-journal.png'



const CryptoPage = () => {
    return (<PageWrapper>
                <Layout pageTitle="Compose">
                    <SectionWrapper>
                        <SectionHeader>
                        <SectionImage>
                                <img src={image} />
                            </SectionImage>
                            <StartWrapper>
                                <SectionTitle>Crypto</SectionTitle>
                                <SectionAnalytics>
                                    <ListElement>
                                        <ListItem>Total Essays: 1</ListItem>
                                        <ListItem>Avg Tone: Educational</ListItem>
                                        <ListItem>Avg Reading Time: 5 Minutes</ListItem>
                                    </ListElement>
                                </SectionAnalytics>
                            </StartWrapper>
                            
                        </SectionHeader>
                        <SectionDivider>
                            <span></span>
                            <span></span>
                            <span></span>
                        </SectionDivider>
                        <SectionBody>
                            <ListElement>
                                <Link to=""><ListItem>Launching a $10,000 Bank Roll for DYDX</ListItem></Link>
                                <ListItem></ListItem>
                            </ListElement>
                        </SectionBody>
                    </SectionWrapper>
                </Layout>
            </PageWrapper>)
}


export default CryptoPage




const SectionHeader = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 900px;
    border: 3px solid #27293d;
    font-family: "Poppins", sans-serif;
    box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 30%);

    li {
        font-style: italic;
    }

    img {
        max-width: 300px;
    }
`

const StartWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 50px;
`


const PageWrapper = styled.div`
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
`


const SectionWrapper = styled.section`
    width: 100%;
    height: 100%;
    background: rgba(12,10,29);
    color: #fff;
    padding: 50px;
`

const SectionTitle = styled.div`
    font-size: 32px;
    font-weight: 600;
`
const SectionAnalytics = styled.div``
const SectionImage = styled.div`
    height: 300px;
`
const SectionDivider = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 75px;
    margin-top: 25px;
    span {
        width: 6px;
        height: 6px;
        background: #fff;
        background:  #27293d;
        border-radius: 50%;
        margin-right: 5px;
    }
`
const SectionBody = styled.div`
    width: 100%;
    color: #fff;
    width: 100%;
    list-style-type: none;
    padding: 0;
    
    ul {
      margin: 0 auto;
    }

    li {
        text-align: center;
        font-size: 21px;
        padding: 10px;
        border-radius: 3px;
        margin-bottom: 20px;
        width: 100%;
      
        &:hover {
          background: #27293d;
          color: #8b3dff;
        }
    }
`
const ListElement = styled.ul`
    list-style-type: none;
    padding: 0;
    max-width: 900px;
`
const ListItem = styled.li`
    font-size: 16px;
`