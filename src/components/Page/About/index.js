import React from 'react'
// Custom Components
import Layout from 'src/components/Layout'
// Assets
import QuillImage from 'src/images/purple-quill.png'
import QuillImage2 from 'src/images/purple-quill-sharp.png'
import QuillImage3 from 'src/images/purple-quill-3.png'
import QuillImage4 from 'src/images/purple-quill-4.png'

import { AboutPageContainer, PageContent, ParagraphElement, SectionElement, SectionImage, SectionContent } from 'src/theme/about'




const AboutPage = () => {
    return (<Layout>
                <AboutPageContainer>
                    <PageContent>
                        <SectionElement>
                            <SectionImage><img src={QuillImage2} /></SectionImage>
                                <SectionContent>
                                    <ParagraphElement>Esy is for Essay.</ParagraphElement>
                                    <ParagraphElement>
                                        Esy is a digital journaling platform that offers users a suite of analytical tools for writing 
                                        rich and expressive essays while discovering powerful insights about their personal writing habits.
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


