import styled from "styled-components"



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
        border-radius: 3%;
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

// export all consts
export { AboutPageContainer, PageTitle, PageContent, ParagraphElement, SectionImage, SectionElement, SectionContent }