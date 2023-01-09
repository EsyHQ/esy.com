import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@mui/material/CssBaseline';


import Header from "src/components/Header"
import MobileHeader from 'src/components/Header/mobileHeader'
import Footer from "src/components/Footer";

import '../../styles/_globalstyles.scss'


const Layout = ({ children, hasHeader = true, hasHeaderNav = true, 
  hasFooter = true, hasFooterStart = true }) => {

  return (<Grid container spaces={3}>
            <CssBaseline />
            <LayoutWrapper>
              {hasHeader && <Header hasHeaderNav={hasHeaderNav} />}
              {/* <MobileHeader /> */}
              <Helmet></Helmet>

              <MainElement>{children}</MainElement>
              {hasFooter && <Footer hasFooterStart={hasFooterStart} />}
            </LayoutWrapper>
          </Grid>)
}

export default Layout



const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin: 0 auto;
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