import * as React from "react"
import styled from "styled-components"
import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import { useSiteMetadata } from "src/hooks/use-site-metadata"

export default function NotFoundPage() {

  return (<Layout>
            <NotFoundPageWrapper>
              <h1>404: Not Found</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </NotFoundPageWrapper>
          </Layout>)
}



const NotFoundPageWrapper = styled.div`
  color: #fff;
`


export const Head = () => { 
  const { description, image, siteUrl, type, twitterUsername } = useSiteMetadata()

  const meta = {
      title: "404 Not Found | esy Journal",
      description,
      image,
      url: `${siteUrl}`,
      type,
      twitterUsername,
  }
  
  return <SEO meta={meta} />
}