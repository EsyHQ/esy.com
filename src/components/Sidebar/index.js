import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from 'src/components/Logo'
import ExpandIcon from 'src/svg/expanded-arrows.svg'
import HomeIcon from 'src/svg/home.svg'
import EssayIcon from 'src/svg/writing.svg'
import LockIcon from 'src/svg/lock.svg'
import JournalIcon from 'src/svg/journal.svg'
import NextIcon from 'src/svg/next.svg'
import ShuttleIcon from 'src/svg/shuttle.svg'
import BarChartIcon from 'src/svg/bar-chart.svg'
import BinocularsIcon from 'src/svg/binoculars.svg'

import DataSection from './dataWidget'
import SidebarFooter from './footer'



const Sidebar = () => {
  const [ activeNav, setActiveNav ] = useState(null)

    const setHeaderNavState = (pathname) => {
        console.log('pathname', pathname)
        if (pathname === '/author/home') {
          setActiveNav(0)
        } else if (pathname.includes('/author/explore')) {
            setActiveNav(1)
        } else if (pathname.includes('/author/essays')) {
            setActiveNav(2)
        } else if (pathname.includes('/author/journals')) {
            setActiveNav(3)
        } else if (pathname.includes('/author/analytics')) {
            setActiveNav(4)
        } else if (pathname.includes('/author/admin')) {
            setActiveNav(5)
        } 
      }


    useEffect(() => {
        const pathname = window && window.location && window.location.pathname
        
        // if (pathname.includes('/compose') && activeNav === 0) {
        //     setActiveNav(null)
        // }

        setHeaderNavState(pathname)
    })



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
                                    <Link 
                                        to="/author/home"
                                        className={activeNav === 0 ? 'active' : ""}
                                    >
                                        <ListItemCategory>
                                            <HomeIcon/><span>Home</span>
                                        </ListItemCategory>
                                        <NextIcon />
                                    </Link>

                                </ListItem>
                                <ListItem>
                                    <Link 
                                        to="/author/explore"
                                        className={activeNav === 1 ? 'active' : ""}
                                    >
                                        <ListItemCategory>
                                            <BinocularsIcon /><span>Explore</span>
                                        </ListItemCategory>
                                        <NextIcon />
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link 
                                        to="/author/essays"
                                        className={activeNav === 2 ? 'active' : ""}
                                    >
                                        <ListItemCategory>
                                            <EssayIcon /><span>Essays</span>
                                        </ListItemCategory>
                                        <NextIcon />
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link 
                                        to="/author/journals" 
                                        className={activeNav === 3 ? 'active' : ""}
                                    >
                                        <ListItemCategory>
                                            <JournalIcon /><span>Journals</span>
                                        </ListItemCategory>
                                        <NextIcon />
                                    </Link>
                                </ListItem>
                            </ListElement>
                        </SidebarNav>
                    </SectionBody>
                </SidebarInner>

                <SectionAdmin>
                    <Link 
                        to="/author/analytics"
                        className={activeNav === 4 ? 'active' : ""}
                    >
                        <DataSection />
                    </Link>
                    <Link 
                        to="/author/admin"
                        className={activeNav === 5 ? 'active' : ""}
                    >
                        <SidebarFooter />
                    </Link>
                </SectionAdmin>
            </SidebarSection>)
}

export default Sidebar



const SidebarSection = styled.section`
    width: 100%;
    height: 100%;
    background: #000;
    background: rgba(12,10,29); // - Purple theme, will need to set this as an object.
    border-right: 1px solid rgb(39,39,39);
    max-width: 350px;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    align-items: space-between;

    a::hover {
        background: rgb(21, 23, 24);
    }

    a.active {
        background: #27293d !important;
    }
`
const SectionHeader = styled.div`
    padding: 25px;
    width: 100%;

    .sidebar-header-btn {
        margin-top: 20px;
    }
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
    font-size: 21px;
    margin-bottom: 15px;

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 25px;

        &:hover {
            background: #27293d;
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

const SectionAdmin = styled.div`
    width: 100%;
    border-top: 1px solid rgb(39, 39, 39);

    a.active {
        >div {
            background: #27293d;
        }
    }
    a:hover {
        height: 100%;
        width: 100%;
        background: rgb(21, 23, 24);
        background: #fff !important;
    }
`


const SidebarInner = styled.div`
`

