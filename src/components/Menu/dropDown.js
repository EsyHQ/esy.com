import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import Button from "../Input/Button"

const Dropdown = ({ handleDisconnect, activeAccount }) => {
  const hasENS = activeAccount.isConnected && activeAccount.ensName
  const addressOrENS = hasENS ? activeAccount.ensName : activeAccount.address

    return (
            <ListElement>
                <ListItem>{addressOrENS}</ListItem>
                <ListItem><Link to="/profile">Profile</Link></ListItem>
                
                <ListItem><Button handleButtonClick={handleDisconnect} ctaText="Disconnect" /></ListItem>
            </ListElement>
    )
}

export default Dropdown


const NavElement = styled.nav``
const ListElement = styled.ul``
const ListItem = styled.li`
  color: #fff;
`