import React from 'react'
import styled from 'styled-components'

import AlertIcon from 'src/svg/notification.svg'
import UserIcon from 'src/svg/user-icon.svg'


const SidebarFooter = () => {
return (         <SectionFooter>
                 

                    <AvatarSection>
                        <SVGWrapper><UserIcon /></SVGWrapper>
                        <UserSectionName>Guest</UserSectionName>
                    </AvatarSection>
                    <SVGWrapper><AlertIcon /></SVGWrapper>
                </SectionFooter>)
}


export default SidebarFooter

const SVGWrapper = styled.div`
    display: flex;
    align-items: center;

    svg {
        width: 100%;
    }
`


const SectionFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    border-top: 1px solid rgb(39, 39, 39);
    padding: 20px 25px;
    cursor: pointer;

    svg {
        max-height: 20px;
        max-width: 20px;
        fill: #fff;
        width: 100%;
    }
`

const AvatarSection = styled.div`
    // width: 100%;
    display: flex;
`
const UserSectionName = styled.div`
    // width: 100%;
    margin-left: 15px;

`