import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'


import Sidebar from 'src/components/Sidebar'
import ToolBar from "../../ToolBar"


const Layout = ({ children }) => {

  return (<>
            <LayoutWrapper>
              <Helmet></Helmet>
              <Sidebar />
              <MainElement>{children}</MainElement>
            </LayoutWrapper>
            </>)
}

export default Layout



const LayoutWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    min-height: 100vh;
    background: #fff;
    color: #000;
    position: relative;
`

const MainElement = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  // background: #151718;

  padding-top: 100px;

  @media(max-width: 600px) {

  }
`