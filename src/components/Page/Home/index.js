import * as React from 'react'
import Layout from "src/components/Layout/container"


import { 
  HeroWrapper, 
  HeroSummary, 
  HeroParagraph, 
  SectionWrapper 
} from 'src/theme/home'


export default function IndexPage({ data }) {
  return (<Layout>
            <SectionWrapper>
              <HeroWrapper>
                  <HeroSummary>
                    <HeroParagraph>The Smart Journal<br/>for Essayist</HeroParagraph>
                  </HeroSummary>
              </HeroWrapper>
            </SectionWrapper>
          </Layout>)
}




