import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import Layout from "src/components/Layout"

import image from 'src/images/ml-purple-journal.png'



const MachineLearningPage = () => {
    return (<PageWrapper>
                <Layout pageTitle="Compose">
                    <SectionWrapper>
                        <SectionHeader>
                        <SectionImage>
                                <img src={image} />
                            </SectionImage>
                            <StartWrapper>
                                <SectionTitle>Machine Learning</SectionTitle>
                                <SectionAnalytics>
                                    <ListElement>
                                        <ListItem>Total Essays: 0</ListItem>
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
                                <Link to=""><ListItem>What is Machine Learning?</ListItem></Link>
                                <ListItem></ListItem>
                            </ListElement>
                        </SectionBody>
                    </SectionWrapper>
                </Layout>
            </PageWrapper>)
}


export default MachineLearningPage



const SectionHeader = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 900px;
    border: 8px solid #27293d;

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
    font-weight: 500;
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
`
const ListItem = styled.li`
    font-size: 16px;
`