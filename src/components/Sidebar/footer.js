import React from 'react'
import styled from 'styled-components'

import AlertIcon from 'src/svg/notification.svg'
import UserIcon from 'src/svg/user-icon.svg'


const SidebarFooter = () => {
    return (         <SectionFooter>
                        <UserIcon />

                        <UserSection>
                            <UserSectionName>Guest</UserSectionName>
                        </UserSection>

                        <AlertIcon />
                    </SectionFooter>)
}


export default SidebarFooter


const SectionFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 21px;
    border-top: 1px solid rgb(39, 39, 39);
    padding: 20px 25px;

    svg {
        max-width: 50px;
        max-height: 30px;
        fill: #fff;
    }

    svg:first-child {
        margin-right: 20px;
    }
`

const UserSection = styled.div`
    width: 100%;
`
const UserSectionName = styled.div`
    width: 100%;
`