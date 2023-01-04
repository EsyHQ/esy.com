import React from "react"
import styled from "styled-components"

import Layout from "src/components/Author/Layout"



const HomePage = () => {

    return (<PageWrapper>
              <Layout pageTitle="Home">
                  <SectionWrapper>
                    <SectionHeader>
                      <SectionTitle>Good Morning, <span>Lemuel</span></SectionTitle>
                    </SectionHeader>

                    <SectionBody>
                      <SectionAnalytics></SectionAnalytics>
                    </SectionBody>
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default HomePage



const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  main {
    padding-top: 0;
  }
`

const SectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  // background: #f0f0f0;
  padding: 50px;
`

const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;

  span {
    text-decoration: underline;
    color: rgb(139,61,255);
  }
`

const SectionHeader = styled.section``

const SectionAnalytics = styled.section`
  
`

const SectionBody = styled.section``
const SectionEssays = styled.section``