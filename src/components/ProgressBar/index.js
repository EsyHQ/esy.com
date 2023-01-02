import React from 'react'
import styled from 'styled-components'



const ProgressBar = () => {
    return (<ComponentWrapper>
                <ProgressBarContainer>
                    <ProgressBarFill></ProgressBarFill>
                </ProgressBarContainer>
            </ComponentWrapper>)
}


export default ProgressBar



const ComponentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const ProgressBarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 15px;
    // max-width: 100px;
    border-radius: 20px;
    border: 1px solid #fff;
`
const ProgressBarFill = styled.div`
    position: absolute;
    background: rgb(139,61,255);
    border-radius: 20px;
    height: 100%;
    width: 5%;
`
