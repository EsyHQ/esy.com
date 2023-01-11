import React from "react"
import styled from "styled-components"

import Layout from "src/components/Author/Layout"

import SunIcon from 'src/svg/sun.svg'



const HomePage = () => {

    return (<PageWrapper>
              <Layout pageTitle="Home">
                  <SectionWrapper>
                      <SectionHeader>
                          <SectionTitle>Good Morning<span></span></SectionTitle>
                          <SectionAnalytics>
                            <ChartWrapper>
                                
                                <ChartInner>
                                   {/* <ChartTitle>WPM</ChartTitle> */}
                                   <ChartScore>100</ChartScore>
                                  {/*
                         
                                  <ChartScoreDivider><span>/</span><span>500</span></ChartScoreDivider> */}
                                </ChartInner>
                                  
                              </ChartWrapper>
                            {/* <ChartWrapper></ChartWrapper> */}
                          </SectionAnalytics>
                      </SectionHeader>
                     

                      {/* <SectionBody>
                        <SectionInner>
                          <ListElement>
                            <ListItem><EssayCard></EssayCard></ListItem>
                            <ListItem><EssayCard></EssayCard></ListItem>
                          </ListElement>
                        </SectionInner>
                      </SectionBody> */}
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default HomePage



const ChartTitle = styled.div`
  width: 100%;
  color: #fff;
`
const ChartScore = styled.div`
  font-weight: 600;
  color: #fff;
  font-size: 26px;
`

const ChartScoreDivider = styled.div`
`

const ChartFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(139,61,255);
  border-radius: 50%;
  height: 5%;
  width: 5%;

`
const ChartWrapper = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  padding: 20px;
  box-shadow: 6px 6px 10px -1px rgb(0 0 0 / 15%), -6px -6px 10px -1px rgb(12 10 29 / 70%);
  // margin-left: 100px;
`

const ChartInner = styled.div`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: inset 4px 4px 6px -1px rgb(0 0 0 / 20%), 
    inset -4px -4px 6px -1px rgb(12 10 29 / 70%), 
    -0.5px -0.5px 0px rgb(12 10 29), 0.5px 0.5px 0px rgb(0 0 0 / 15%), 
    0px 12px 10px rgb(0 0 0 / 5%);
`

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
  font-size: 23px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    max-width: 40px;
    max-height: 40px;
    margin-left: 20px;
  }
`

const SectionAnalytics = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  /* margin-top: 100px; */
  background: rgba(12,10,29);
  padding: 20px;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 30%) 0px 20px 20px 0px;
  background: rgba(12,10,29);
  // max-width: 1200px;
  // border: 3px solid rgb(39, 41, 61);
  border-top: 2px solid rgb(39,41,61);
  margin: 50px auto;
  justify-content: center;
`

const SectionBody = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px 0;
`
const SectionEssays = styled.section``
 // do same but border bottom and top for essay rows - 

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