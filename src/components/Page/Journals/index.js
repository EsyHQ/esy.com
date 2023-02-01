import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

import Layout from "src/components/Layout/container"
import JournalCard from "./journalCard"
import axios from "axios"

const JournalsPage = ({ location }) => {
  
  function fetchJournals() {
    // axios.get()
  }


  return (<PageWrapper>
            <Layout location={location}>
                <Helmet><title>Journals</title></Helmet>
                <PageInner>
                  <SectionWrapper>
                    <SectionHero>
                      {/* Read, Contribute, and Explore Essays using Journals */}
                    </SectionHero>
                    <ListWrapper>
                      <ListElement>
                        <Link to="/@crypto"><ListItem>Crypto</ListItem></Link>
                        <Link to="/@datascience"><ListItem>Data Science</ListItem></Link>
                        <Link to="/@geo"><ListItem>Geo</ListItem></Link>
                      </ListElement>
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
  padding: 100px;
  background: rgba(12,10,29);
`

const SectionWrapper = styled.section`
  width: 100%;
  font-family: Poppins, sans-serif;
`

const SectionHero = styled.div``


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
`

const ListItem = styled.li`
  text-align: center;
  font-size: 21px;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 20px;
  width: 100%;

  a {
    font-family: Poppins, sans-serif;
  }

  &:hover {
    background: #27293d;
    color: #8b3dff;
  }
`