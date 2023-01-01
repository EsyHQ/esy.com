import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from 'src/components/Logo'
// import Button from 'src/components/Input/Button'
import AlertIcon from 'src/svg/notification.svg'
import ExpandIcon from 'src/svg/expanded-arrows.svg'
import HomeIcon from 'src/svg/home.svg'
import EssayIcon from 'src/svg/writing.svg'
import LockIcon from 'src/svg/lock.svg'
import JournalIcon from 'src/svg/journal.svg'
import NextIcon from 'src/svg/next.svg'
import UserIcon from 'src/svg/user-icon.svg'
import ShuttleIcon from 'src/svg/shuttle.svg'
import BarChartIcon from 'src/svg/bar-chart.svg'



const Sidebar = () => {

    return (<SidebarSection>
                <SidebarInner>
                    <SectionHeader>
                        <SectionLogo>
                            <Link to="/author/home"><Logo /></Link>
                            <CollapsibleWidget><ExpandIcon /></CollapsibleWidget>
                        </SectionLogo>

                        <Link to="/author/compose"><Button className="sidebar-header-btn"><ShuttleIcon />New</Button></Link> {/* Should open modal to select New Essay or  Journal */}
                    </SectionHeader>

                    <SectionBody>
                        <SidebarNav>
                            <ListElement>
                                <ListItem>
                                    <Link to="/author/home">
                                        <ListItemCategory>
                                            <HomeIcon/><span>Home</span>
                                        </ListItemCategory>
                                        <NextIcon />
                                    </Link>

                                </ListItem>
                                <ListItem>
                                    <Link to="/author/essays">
                                        <ListItemCategory>
                                            <EssayIcon /><span>Essays</span>
                                        </ListItemCategory>
                                        <NextIcon />
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link to="/author/journals">
                                        <ListItemCategory>
                                            <JournalIcon /><span>Journals</span>
                                        </ListItemCategory>
                                        <NextIcon />
                                    </Link>
                                </ListItem>
                            </ListElement>
                        </SidebarNav>
                        {/* <SectionCategory>Star Journals</SectionCategory> */}
                        
                    </SectionBody>
                </SidebarInner>
                <Link to="/author/admin">
                    <SectionFooter>
                        <UserIcon />

                        <UserSection>
                            <UserSectionName>Lemuel Uhuru</UserSectionName>
                        </UserSection>
                        <AlertIcon />
                    </SectionFooter>
                </Link>
            </SidebarSection>)
}

export default Sidebar

const SidebarInner = styled.div`
    // padding: 25px;
`


const SidebarSection = styled.section`
    width: 100%;
    height: 100%;
    background: #000;
    max-width: 400px;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    align-items: space-between;

    a.active {
        background: rgb(21, 23, 24);d
    }
`
const SectionHeader = styled.div`
    padding: 25px;
    width: 100%;

    .sidebar-header-btn {
        margin-top: 20px;
    }
`
const SectionFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 23px;
    border-top: 1px solid rgb(39, 39, 39);
    padding: 20px 25px;

    &:hover {
        background: rgb(21, 23, 24);
    }

    svg {
        max-width: 50px;
        max-height: 30px;
        fill: #fff;
    }

    svg:first-child {
        margin-right: 20px;
    }
`
const SectionCategory = styled.div``
const UserSection = styled.div`
    width: 100%;
`
const UserSectionName = styled.div`
    width: 100%;
    // text-align: center;
`
const SectionLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
`
const CollapsibleWidget = styled.div`
    svg {
        max-width: 30px;
        max-height: 30px;
        fill: #fff;
    }
`
const SectionBody = styled.div``
const SidebarNav = styled.nav`
    width: 100%;
    margin-top: 50px;
`
const ListElement = styled.ul`
    list-style-type: none;
    padding: 0;
`
const ListItem = styled.li`
    font-size: 23px;
    margin-bottom: 15px;
   

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 25px;

        &:hover {
            background: rgb(21, 23, 24);
        }
    }

    svg {
        width: 100%;
        max-width: 20px;
        max-height: 20px;
        fill: #fff;
        margin-right: 15px;
    }
`
const ListItemCategory = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

`
const ListItemSecondary = styled.div``
const Button = styled.div`
  font-size: 21px;
  width: 100%;
  color: #fff;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #282828;
  background: rgb(139, 61, 255);

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


  svg {
    width: 100%;
    max-width: 20px;
    fill: #fff;
    margin-right: 10px;
  }
`



