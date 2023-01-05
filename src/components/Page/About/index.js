import React from 'react'
import styled from 'styled-components'

import Layout from 'src/components/Layout'

import QuillImage from 'src/images/purple-quill.png'
import QuillImage2 from 'src/images/purple-quill-sharp.png'
import QuillImage3 from 'src/images/purple-quill-3.png'
import QuillImage4 from 'src/images/purple-quill-4.png'






const AboutPage = () => {
    return (<Layout>
                <AboutPageContainer>
                    {/* <PageTitle>About Us.</PageTitle> */}
                    <PageContent>
                        <SectionElement>
                            <SectionImage><img src={QuillImage2} /></SectionImage>

                                {/* <SectionImage><img src={QuillImage} /></SectionImage> */}

                                <SectionContent>
                                    <ParagraphElement>Esy is for Essay.</ParagraphElement>
                        
                                    <ParagraphElement>
                                        Esy is a digital journaling platform that offers users a suite of analytical tools for writing 
                                        AI assisted essays and discovering powerful insights about their personal writing habits.
                                    </ParagraphElement>
                                </SectionContent>
                                
                        </SectionElement>

                        <SectionElement>
                            

                            <SectionContent>
                                <ParagraphElement>
                                    We believe that AI tools will revolutionize all industries. 
                                    Artist and creators alike will be forced to collaborate with smart technology to stay ahead.
                                </ParagraphElement>

                            </SectionContent>

                            <SectionImage><img src={QuillImage} /></SectionImage>
                            
                        </SectionElement>

                        <SectionElement>
                            
                        <SectionImage><img src={QuillImage4} /></SectionImage>

                            <SectionContent>
                                <ParagraphElement>
                                    Would you like to know a secret? These images, are all original creations of an English Quill using AI.
                                    {/* <a target="_blank" href="https://www.midjourney.com/">Learn more.</a> */}
                                </ParagraphElement>

                            </SectionContent>

                            
                        </SectionElement>
                       
                    </PageContent>
                </AboutPageContainer>
            </Layout>)
}


export default AboutPage


const AboutPageContainer = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(12,10,29);

    padding: 5%;
    display: flex;
    flex-direction: column;
    max-with: 1200px;
    font-size: 23px;

    p {
        font-family: Poppins, sans-serif; 
    }
`

const PageTitle = styled.div`
    font-size: 36px;
`

const PageContent = styled.div`
    // max-width: 900px;

`

const ParagraphElement = styled.p`
    font-family: Poppins, sans-serif; 
`


const SectionImage = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        border-radius: 20%;
    }


    @media(max-width: 900px) {
        max-width: 300px;
    }

   
`

const SectionElement = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    width: 100%;

 


    @media(max-width: 900px) {
        font-size: 18px;
    }

    @media(max-width: 600px) {
        flex-direction: column;
        align-items: center;

        &:nth-child(odd) {
            flex-direction: column-reverse;
        }
    }
`

const SectionContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 650px;
    margin: 0 50px;
    width: 100%;
`