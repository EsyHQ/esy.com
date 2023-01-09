import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


import image from 'src/images/btc-journal.png'


const JournalCard = () => {
    return (<ComponentWrapper>
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
                    </SectionWrapper>
            </ComponentWrapper>)
}


export default JournalCard



const ComponentWrapper = styled.div`
    width: 100%;
    max-width: 600px;
`


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
    // height: 300px;
`

const ListElement = styled.ul`
    list-style-type: none;
    padding: 0;
`
const ListItem = styled.li`
    font-size: 16px;
`