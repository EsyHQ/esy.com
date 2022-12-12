import React from 'react'
import styled from 'styled-components'

import Layout from 'src/components/Layout'
import OrigamiImage from 'src/images/origami-quill.png'
import Logo from 'src/components/Logo'


const PrivacyPolicy = "https://app.termly.io/document/privacy-policy/a5285fdd-a501-4dbd-89d2-b1112dc4ee86"
const TermsPolicy = "https://app.termly.io/document/terms-of-use-for-saas/1cfc74df-69a4-4df1-ba18-8153199c1ac3"

const SignupPage = () => {

    return (<Layout hasHeaderNav={false} hasFooterStart={false}>
                <SignupWrapper>
                    <SectionElement>
                        <FormWrapper>
                            <FormElement>
                                <FormHeader>
                                    <FormTitle>Sign up</FormTitle>
                                    <FormTerms>
                                        By signing up, I agree to the Esy <a href={PrivacyPolicy}>Privacy Policy</a> and <a href={TermsPolicy}>Terms of Service</a>.
                                    </FormTerms>
                                </FormHeader>
                                <FormFooter>
                                    <FormInput placeholder="Enter email" />
                                    <FormButton>Sign up</FormButton>
                                </FormFooter>
                            </FormElement>
                        </FormWrapper>
                    </SectionElement>
                </SignupWrapper>
            </Layout>)
}


export default SignupPage



const SignupWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const SectionElement = styled.section`
    display: flex;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(52,53,65);
    background: #fff;
    padding: 10%;
`

const ImageWrapper = styled.div`
    width: 100%;

    img {
        max-width: 50px;
    }
`

const FormWrapper = styled.div`
    color: #000;
    width: 100%;
    // margin-top: 100px;
    display: flex;
    justify-content: center;
`
const FormElement = styled.form`
    width: 100%;
    max-width: 600px;
`
const FormHeader = styled.div``
const FormTitle = styled.p`
    color: #000;
    font-size: 45px;
    text-align: center;
    margin: 0;
`
const FormTerms = styled.p`
    // width: 100%;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
    opacity: 0.5;

    a {
        text-decoration: underline;
        // border-bottom: 1px solid #000;
        // padding-bottom: 1px;
    }
`
const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
`
const FormInput = styled.input`
    height: 50px;
    background-color: #fff;
    border: 2px solid #e0e6e8;
    border-radius: 3px;
    height: 50px;
    line-height: normal;
    margin: 0;
    padding: 0 0 0 16px;
    transition: border .15s;
    width: 100%;
    margin-bottom: 20px;
`
const FormButton = styled.div`
    font-size: 18px;
    width: 100%;
    color: #fff;
    height: 50px;
    border-radius: 4px;
    border: 2px solid #282828;
    font-weight: 600;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    z-index: 1000;

    background: #864ba2;
    background: #8b3dff;
    border: none;
`
