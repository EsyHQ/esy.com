import React from 'react'
import styled from 'styled-components'

import Layout from 'src/components/Layout'
import OrigamiImage from 'src/images/origami-quill.png'


const ThankYouPage = () => {

    return (<Layout hasHeaderNav={false} hasFooterStart={false}>
                <SectionWrapper>
                    <SectionElement>
                        
                    </SectionElement>
                </SectionWrapper>
            </Layout>)
}


export default ThankYouPage



const SectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const SectionElement = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(52,53,65);
    background: #fff;
    padding: 10%;
`

const ImageWrapper = styled.div`
    width: 100%;

    img {
        max-width: 50px;
    }
`
