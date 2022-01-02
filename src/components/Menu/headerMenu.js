import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import AccountMenu from "../AccountMenu"


const HeaderMenu = ({ handleDisconnect, activeAccount }) => {
    return (
        <NavElement role="navigation">
            <ListElement>
                <ListItem><Link to="/write">Write</Link></ListItem>
                <ListItem><AccountMenu activeAccount={activeAccount} handleDisconnect={handleDisconnect} /></ListItem>
            </ListElement>
        </NavElement>
    )
}


export default HeaderMenu


const NavElement = styled.nav`
`

const ListElement = styled.ul`
    display: flex;
`

const ListItem = styled.li`

    a {
        color: #fff;
        text-decoration: none;
        font-size: 19px;
    }
`