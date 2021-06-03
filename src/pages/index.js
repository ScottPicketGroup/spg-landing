import * as React from "react"
import styled from "styled-components"
import SignUp from "../components/landing/signUp"
import Subscribe from "../components/email-subscription/subscribe"
import scott from "../images/scott1.jpg"

import Img from "gatsby-image"
import Seo from "../components/seo"
import { GlobalStyle } from "../components/styled-components/Theme"
import SPGLogo from "../images/spg-logo"
import Instagram from "../components/email-subscription/Instagram"
import Facebook from "../components/email-subscription/Facebook"
import { useIsSsr } from "../components/isSsr"
import Helmet from 'react-helmet'
import Intro from "../components/landing/intro"


const IndexPage = () => {
  const isSsr = useIsSsr()
  if (isSsr) return null
  const pageHeight = window.innerHeight

  console.log(`pageHeight`, pageHeight)
  return (
    <React.Fragment>
      <GlobalStyle />
      <Seo title="Scott Picket Group" />
      <PageContainer height={`${pageHeight}px`}>
        <LeftContainer>
          <SignupContainer>
            <SignUp />
           
          </SignupContainer>
          <LogoContainer>
            <SPGLogo />
            {/* <SocialsContainer>
              <Instagram />
              <Facebook />
            </SocialsContainer> */}
          </LogoContainer>
        </LeftContainer>
        <ImgContainer>
          <ImgDesktop>
            <img src={scott} alt="scotty" style={{ marginBottom: `0` }} />
          </ImgDesktop>
         
          <Intro/>
          <Subscribe />
        </ImgContainer>
        
      </PageContainer>
    </React.Fragment>
  )
}

export default IndexPage

const PageContainer = styled.div`
  height: 100vh;
  width: 99vw;
  overflow: hidden;
  padding: 0 5.25rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    height: ${props => props.height} !important;
    flex-direction: column;
    padding: 0;
    width: 100vw;
    justify-content: flex-start;
  }
`

const LeftContainer = styled.div`
  height: 100vh;
  

  padding-bottom: 56px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 450px) {
    order: 1;
    width: 100%;
    padding: 0rem 18px 56px 18px;
    flex-grow: 1;
  }
`

const SignupContainer = styled.div`
  width: 88%;
  height: auto;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
  }
`

const ImgContainer = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    width: 100vw;
    max-height: 30vh;
    z-index: 10;
  }
`

const ImgDesktop = styled.div`
  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 450px) {
    width: 100vw;
  }
`



const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    width: 90vw;
  }
`

const SocialsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  /* margin-bottom: -.4rem; */

  @media screen and (min-width: 451px) {
    display: none;
  }
`
