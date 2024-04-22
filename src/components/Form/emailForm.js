import React from 'react'
import styled from 'styled-components'
import validator from 'validator'
import axios from 'axios'

import Button from 'src/components/Input/Button'
import Loader from 'src/components/Loader'
import { navigate } from 'gatsby'



const EmailForm = () => {
    const [email, setEmail] = React.useState(null)
    const [isEmailValid, setIsEmailValid] = React.useState(null)
    const [isPending, setIsPending] = React.useState(false)
  

    const handleFormSubmit = (event) => {
        event.preventDefault()

        // addEmailToContactList(email)
    }




    const handleWriteClick = () => {
        const writeURL = "/"
        navigate(writeURL)
    }

    const handleSignupClick = () => {
        navigate("https://workspace.esy.com/signup")
    }


    return (<FormElement noValidate onSubmit={handleFormSubmit}>
                <ButtonWrapper className="button-wrapper">
                    <Button handleButtonClick={handleSignupClick} classNames="active" isBoxShadow={true}  ctaText="Sign up" />
                    {/* <Button handleButtonClick={handleWriteClick} isBoxShadow={true}  ctaText="Write" /> */}
                </ButtonWrapper>
            </FormElement>)
}

export default EmailForm



const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 285px;

    @media(max-width: 600px) {
        max-width: 325px;
    }
`


const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    margin-bottom: 50px;
    max-width: 250px;
    align-items: flex-start;
`


const EmailErrorLabel = styled.span`
    font-size: 12px;
    color: red;
    padding-top: 10px;
`

const FormElement = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
    z-index: 10;
    width: 100%;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`

