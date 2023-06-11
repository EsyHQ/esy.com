import * as React from "react"
import styled from "styled-components"
import Layout from "src/components/Layout/container"


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
