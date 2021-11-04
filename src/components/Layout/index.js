import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid';


import Header from "src/components/common/Header"
import Footer from "src/components/common/Footer"

import '../../styles/_globalstyles.scss'


const Layout = ({ children }) => {

  return (<Grid container spaces={3}>
            <LayoutWrapper>
              <Helmet></Helmet>

              <MainElement>{children}</MainElement>
              
              {/* <Footer /> */}
            </LayoutWrapper>
          </Grid>)
}

export default Layout



const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;
`

const MainElement = styled.main`
  flex: 1;
  margin: 0 auto;
`