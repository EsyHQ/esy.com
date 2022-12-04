import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from '../Logo'
import HeaderNav from "./headerNav"



const Header = () => {
  const [ activeNav, setActiveNav ] = useState(0)

  const setHeaderNavState = (pathname) => {
    if (pathname === '/') {
      setActiveNav(0)
    } else if (pathname.includes('blog')) {
        setActiveNav(1)
    } else if (pathname.includes('journals')) {
        setActiveNav(2)
    } else if (pathname.includes('write')) {
        setActiveNav(3)
    }
  }

  useEffect(() => {
    const pathname = window && window.location && window.location.pathname

    setHeaderNavState(pathname)
  })


  return (<HeaderWrapper>
            <HeaderLogo>
              <Link to="/"><Logo /></Link>
            </HeaderLogo>

            <HeaderNav activeNav={activeNav} />
          </HeaderWrapper>)
}

export default Header



const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 50px;
  width: 100%;
  background: #000;
  align-items: center;
  border-bottom: 1px solid #272727;
  height: 100px;

  position: fixed;

  @media(max-width: 600px) {
    padding: 15px 25px;
  }
`

const HeaderLogo = styled.div``

