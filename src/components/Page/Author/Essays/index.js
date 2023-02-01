import React from "react"
import styled from "styled-components"

import Layout from "src/components/Author/Layout"


import EssayIcon from 'src/svg/writing.svg'
import DeleteIcon from 'src/svg/delete.svg'




const EssaysPage = () => {

    return (<PageWrapper>
              <Layout pageTitle="Compose">
                  <SectionWrapper>
                      <SectionBody>
                        <BodyTitle><EssayIcon /><span>Essays</span></BodyTitle>
                        <SectionInnerBody>
                          <EssayContainer>
                            <Title>What is DeFi technology?</Title><DeleteIcon />
                          </EssayContainer>
                          <EssayContainer>  <Title>What is Machine Learning?</Title><DeleteIcon /></EssayContainer>
                          <EssayContainer></EssayContainer>
                        </SectionInnerBody>
                      </SectionBody>
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default EssaysPage


const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  main {
    padding-top: 0;
  }
`


const SectionWrapper = styled.div`
  display: flex;
  // align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(12,10,29); 
`



const BodyTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 21px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  color: #fff;

  svg {
    max-width: 25px;
    max-height: 25px;
    fill: #fff;
  }

  span {
    margin-left: 10px;
  }
`


const SectionInnerBody = styled.div`
  margin-top: 50px;
`


const Title = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
`

const SectionBody = styled.section`
  padding: 25px;
  width: 100%;
  margin-top: 40px;
`

const EssayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
  background: rgba(12,10,29);
  padding: 40px;
 
  background: rgba(12,10,29);
  border-top: 1px solid rgb(39,41,61);
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 18px;

  svg {
    max-width: 20px;
    max-height: 20px;
    fill: #fff;
  }
`