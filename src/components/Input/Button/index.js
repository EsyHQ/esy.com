import React from 'react'
import styled from 'styled-components'

const Button = ({ isBoxShadow, handleButtonClick, ctaText, classNames}) => {
    return (<ButtonWrapper className={classNames} isBoxShadow={isBoxShadow} onClick={handleButtonClick}>
                {ctaText}
            </ButtonWrapper>)
}


export default Button



const ButtonWrapper = styled.div`
  font-size: 16px;
  width: 100%;
  max-width: 125px;
  color: #fff;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #282828;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 1000;

  &.active {
    // background-color: #bf3a30;
    // background-image: linear-gradient(315deg, #bf3a30 0%, #864ba2 74%);
    // box-shadow: ${({ isBoxShadow }) => (isBoxShadow ? "0 1px 28px rgb(255 152 0 / 66%)" : "")};
    border: none;
    background: #864ba2;
    background: #8b3dff; // canva theme.
  }

  &:hover {
    transition: background-color .1s linear,border-color .1s linear,color .1s linear;
  }

  @media(max-width: 600px) {
    margin: 50px 0;
    max-height: 35px;
    max-width: 145px;
  }
`



