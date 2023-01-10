import React from 'react'
import styled from 'styled-components'

import BarChartIcon from 'src/svg/bar-chart.svg'
import NextIcon from 'src/svg/next.svg'

import ProgressBar from '../ProgressBar'



const DataSection = ({ wordGoal = 1000 }) => {

    return (<ComponentWrapper>
                <SectionHeader>
                    <SectionTitleWrapper>
                        <BarChartIcon />
                        <SectionTitle>Progress</SectionTitle>
                        {/* <SectionTitle>Analytics</SectionTitle> */}
                    </SectionTitleWrapper>

                    <SectionScoreWrapper>
                        <SectionScore><span className="numerator">0</span><span className="divider">/</span>{wordGoal}</SectionScore>
                        <NextIcon />
                    </SectionScoreWrapper>
                </SectionHeader>

                <ProgressBar></ProgressBar>
            </ComponentWrapper>)}


export default DataSection



const SectionTitleWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    svg {
        margin-right: 10px;
        // fill: rgb(139,61,255) !important;
    }
`

const SectionScoreWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
        margin-left: 5px;
    }
`

const ComponentWrapper = styled.div`
        display: flex;
        flex-direction: column;
        color: #fff;
        padding: 25px;
        font-size: 18px;

        svg {
            max-width: 20px;
            max-height: 20px;
            fill: #fff;
        }
`

const SectionHeader = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
`

const SectionTitle = styled.div``


const SectionWrapper = styled.div`
        display: flex;
`

const SectionScore = styled.div`
        display: flex;
        align-items: center;
        
        .divider {
            margin: 0 5px;
            font-size: 14px;
        }

        .numerator {
            color: rgb(139,61,255);
            font-size: 19px;
        }
`
