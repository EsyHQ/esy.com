import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/Input/Button'


const EmailForm = () => {
    const [email, setEmail] = React.useState(null)


    const handleButtonClick = () => {

    }

    const handleEmailInput = event => {
        event.preventDefault()

        setEmail(event.target.value)
    } 

    const textFieldInputProps = {
        style: {
            color: '#fff',
            outline: '#fff',
            border: '1px solid #fff',
            borderRadius: '6px',
            background: '#fff',
        }
    }

    return (<FormElement>
                <InputElement 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='Your email' 
                    // pattern=".+@globex\.com"
                    onChange={handleEmailInput}
                    autoComplete="off"
                    required 
                />
                <Button isBoxShadow={true} handleButtonClick={handleButtonClick} ctaText="Notify Me" />
            </FormElement>)
}

export default EmailForm


const FormElement = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    z-index: 10;

    div {
        margin: 0 15px;
        height: 50px;

        @media(max-width: 600px) {
            margin: 50px 0;
        }
    }

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

    @media(max-width: 600px) {
        margi
    }
`


