import React from 'react'
import styled from 'styled-components'

const Button = ({ isBoxShadow, handleButtonClick, ctaText }) => {
    return (<ButtonWrapper isBoxShadow={isBoxShadow} onClick={handleButtonClick}>
                {ctaText}
            </ButtonWrapper>)
}


export default Button

const ButtonWrapper = styled.div`
  font-size: 16px;
  width: 100%;
  max-width: 125px;
  color: #fff;
  height: 30px;
  border-radius: 4px;
  // background: ${({ isDisabled }) => (isDisabled ? "#cccccc" : "gold")};
  // cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  background-image: linear-gradient(to right bottom, #e8962e, #e45131);

  box-shadow: ${({ isBoxShadow }) => (isBoxShadow ? "0 1px 28px rgb(255 152 0 / 66%)" : "")};

  background-color: #08e1ae;
  background-image: linear-gradient(315deg, #08e1ae 0%, #98de5b 100%);
  
  
  background-color: #bf3a30;
  background-image: linear-gradient(315deg, #bf3a30 0%, #864ba2 74%);

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 1000;

  @media(max-width: 600px) {
    margin: 50px 0;
    max-height: 35px;
    max-width: 145px;
  }
`



