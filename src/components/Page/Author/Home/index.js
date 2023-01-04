import React from "react"
import styled from "styled-components"

import Layout from "src/components/Author/Layout"



const HomePage = () => {

    return (<PageWrapper>
              <Layout pageTitle="Home">
                  <SectionWrapper>
                      <SectionHeader>
                          <SectionTitle>Good Morning<span></span></SectionTitle>
                          <SectionAnalytics>
                            <GreetingCard></GreetingCard>
                            <GreetingCard></GreetingCard>
                          </SectionAnalytics>
                      </SectionHeader>
                     

                      <SectionBody>
                        <SectionInner>
                          <ListElement>
                            <ListItem><EssayCard></EssayCard></ListItem>
                            <ListItem><EssayCard></EssayCard></ListItem>
                          </ListElement>
                        </SectionInner>
                      </SectionBody>
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default HomePage


const SectionInner = styled.div`
  // background: #fff;
  // background: #27293d;
  margin: 0 20px;
  // padding: 50px;
  height: 100%;
`


const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  main {
    padding-top: 0;
  }
`

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #fff;
  background: rgba(12,10,29); Purple theme, will need to set this as an object.
`



const SectionHeader = styled.section`
  width: 100%;
  padding: 25px; 
`

const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: right;
`

const SectionAnalytics = styled.section`
  display: flex;
  justify-content: space-between;
`

const SectionBody = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px 0;
`
const SectionEssays = styled.section``


const GreetingCard = styled.div`
  width: 100%;
  max-width: 600px;
  height: 200px;
  border-radius: 3px;
  background: #27293d;
`


const ListElement = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`
const ListItem = styled.li`
  margin-bottom: 20px;
`

const EssayCard = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 3px;
  background: #27293d;
`