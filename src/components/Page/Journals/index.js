import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

import Layout from "src/components/Layout/container"


const JournalsPage = ({ location }) => {

    return (<PageWrapper>
              <Layout location={location}>
                  <Helmet><title>Journals</title></Helmet>
                  <PageInner>
                    {/* <SectionHero>
                    </SectionHero> */}
                    <SectionWrapper>
                      <ListWrapper>
                        <ListElement>
                          <Link to="/journals/crypto"><ListItem>Crypto</ListItem></Link>
                          <Link to="/journals/economics"><ListItem>Economics</ListItem></Link>
                          <Link to="/journals/foreign-policy"><ListItem>Foreign Policy</ListItem></Link>
                          <Link to="/journals/geo"><ListItem>Geo</ListItem></Link>
                          <Link to="/journals/history"><ListItem>History</ListItem></Link>
                          <Link to="/journals/history"><ListItem>Human Rights</ListItem></Link>
                          <Link to="/journals/machine-learning"><ListItem>Machine Learning</ListItem></Link>
                          <Link to="/journals/sports"><ListItem>Sports</ListItem></Link>
                          <Link to="/journals/sports"><ListItem>Tech</ListItem></Link>
                        </ListElement>
                        {/* <ListElement>
                          <ListItem>Machine Learning</ListItem>
                          <ListItem></ListItem>
                        </ListElement> */}
                      </ListWrapper>
                      
                    </SectionWrapper>
                  </PageInner>
              </Layout>
            </PageWrapper>)
}

export default JournalsPage


const PageWrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(12,10,29);

  main {
    padding-top: 0;
  }
`

const PageInner = styled.div`
  width: 100%;
  height: 100%;
  // margin: 100px;
  padding: 100px;
  background: rgba(12,10,29);
`

const SectionHero = styled.section`
   width: 100%;
   height: 100%;
   max-height: 100px;
  //  background: #27293d;
`

const SectionWrapper = styled.section`
  width: 100%;
`

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ul:not(:last-child) {
    margin-right: 50px;
  }
`

const ListElement = styled.ul`
  margin-top: 100px;
  color: #fff;
  width: 100%;
  list-style-type: none;
  padding: 0;
  // max-width: 800px;
`
const ListItem = styled.li`
  text-align: center;
  font-size: 21px;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 20px;
  width: 100%;

  &:hover {
    background: #27293d;
    color: #8b3dff;
  }

  a {
  }
`