import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'
// import Grid from '@material-ui/core/Grid';


import Header from "src/components/Header"
import MobileHeader from 'src/components/Header/mobileHeader'
import Footer from "src/components/Footer";



interface LayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
  hasHeaderNav?: boolean;
  hasFooter?: boolean;
  hasFooterStart?: boolean;
  className?: string;
}



const Layout: React.FC<LayoutProps> = ({ children, hasHeader = true, hasHeaderNav = true, 
  hasFooter = true, hasFooterStart = true }) => {

  return (<>
            <LayoutWrapper>
              {hasHeader && <Header hasHeaderNav={hasHeaderNav} />}
              {/* <MobileHeader /> */}
              <Helmet></Helmet>

              <MainElement>{children}</MainElement>
              {hasFooter && <Footer hasFooterStart={hasFooterStart} />}
            </LayoutWrapper>
          </>)
}

export default Layout



const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
  background: rgb(12, 10, 29);
  // padding-top: 80px;

  @media(max-width: 600px) {

  }
`