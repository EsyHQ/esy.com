import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/Input/Button'


const DropDown = () => {

    return (<DropDownWrapper>
                <DropDownNav>
                    <DropDownList>
                        <DropDownListItem>
                            <Button>Sign in</Button>
                            <Button>Sign up</Button>
                        </DropDownListItem>
                    </DropDownList>
                </DropDownNav>
            </DropDownWrapper>)
}


export default DropDown



const DropDownWrapper = styled.div`
    width: 100%;
    position: relative;

    &:hover {
        display: block;
    }
`
const DropDownNav = styled.nav`
    color: #fff;
    width: 100%;
    position: absolute;
    // display: none;
    // background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`
const DropDownList = styled.ul`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
`
const DropDownListItem = styled.li`
    width: 100%;
`