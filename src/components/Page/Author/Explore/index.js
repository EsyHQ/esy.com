import React from "react"
import styled from "styled-components"

import Layout from "src/components/Author/Layout"



const ExplorePage = () => {

    return (<PageWrapper>
              <Layout pageTitle="Compose">
                  <SectionWrapper>
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default ExplorePage


const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  main {
    padding-top: 0;
  }
`

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(12,10,29); 
`
