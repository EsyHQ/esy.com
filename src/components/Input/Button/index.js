import React from 'react'
import styled from 'styled-components'

const Button = ({ handleButtonClick, ctaText }) => {
    return (<ButtonWrapper onClick={handleButtonClick}>
                {ctaText}
            </ButtonWrapper>)
}


export default Button

const ButtonWrapper = styled.div`
  font-size: 16px;
  width: 120px;
  color: #fff;
  height: 40px;
  border-radius: 4px;
  background: ${({ isDisabled }) => (isDisabled ? "#cccccc" : "gold")};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  background-image: linear-gradient(to right bottom, #e8962e, #e45131) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`



