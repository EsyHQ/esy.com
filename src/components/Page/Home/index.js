import * as React from 'react'
import Layout from "src/components/Layout/container"
import EssaySection from './essaySection'


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
              {/* <EssaySection data={data} /> */}
            </SectionWrapper>
          </Layout>)
}




