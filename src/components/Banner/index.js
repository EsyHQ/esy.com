import React from 'react'
import styled from 'styled-components'




const Banner = ({ type, message }) => {
    return (
        <BannerWrapper>{message}</BannerWrapper>
    )
}



export default Banner



const BannerWrapper = styled.div`
    height: 50px;
    width: 100%;
    background: ${type === 'success' ? 'green' : 'red'};
`


