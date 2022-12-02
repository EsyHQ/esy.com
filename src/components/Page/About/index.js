import React from 'react'
import styled from 'styled-components'

import Layout from 'src/components/Layout'

const AboutPage = () => {
    return (<Layout>
                <AboutPageContainer>
                    <PageTitle>About</PageTitle>
                    <PageContent>
                        Esy for Essay. 
                    </PageContent>
                </AboutPageContainer>
            </Layout>)
}


export default AboutPage


const AboutPageContainer = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    background: #151718;
    background: #000;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PageTitle = styled.div`
    font-size: 28px;
`

const PageContent = styled.p``