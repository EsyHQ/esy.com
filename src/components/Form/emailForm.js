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

        console.log(event, 'event')

        // addEmailToContactList(email)
    }


    // const addEmailToContactList = async (email) => {
    //     if (validator.isEmail(email)) {
    //         let url = ''
            
    //         // etlify/functions/trigger-launch-email?email=${email}`)
    //         // let url = (`http://localhost:9999/netlify/functions/trigger-launch-email`)

    //         try {
    //             const response = await axios.get(url)
    //             const { statusCode, body } = response

    //             // Display loader - 

    //             if (statusCode === 200) {
    //                 // Remove loader
    //                 // Show success banner and confirm email notification.
    //                 console.log('fetch was successful', statusCode)
    //             } 

    //         } catch(error) {
    //             console.log(error, 'error')
    //         }
    //     }
    // }
      

    // const handleEmailInput = event => {
    //     event.preventDefault()

    //     const emailInput = event.target.value

    //     setIsEmailValid(validator.isEmail(emailInput))
    //     setEmail(emailInput)
    // } 


    const handleWriteClick = () => {
        navigate("/write")
    }


    return (<FormElement noValidate onSubmit={handleFormSubmit}>
                <ButtonWrapper>
                    <Button classNames="active" isBoxShadow={true}  ctaText="Sign Up" />
                    <Button handleButtonClick={handleWriteClick} isBoxShadow={true}  ctaText="Write" />
                </ButtonWrapper>
            </FormElement>)
}

export default EmailForm



const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 285px;
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


const InputElement = styled.input`
    background: inherit;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    width: 250px;
    outline: none;
    font-size: 16px;
    padding: 6px 0px;

    @media(max-width: 600px) {
        margi
    }
`


