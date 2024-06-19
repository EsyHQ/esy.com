import * as React from 'react'
import Layout from "src/components/Layout"


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
                  <h1 className="text-72">Your<br/> Personal Ai Es<span className="line-through">sa</span>y<br/>Writer</h1>
                  </HeroSummary>
              </HeroWrapper>
            </SectionWrapper>
          </Layout>)
}




