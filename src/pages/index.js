import * as React from "react"
import styled from "styled-components"
import SignUp from "../components/landing/signUp"
import Subscribe from "../components/email-subscription/subscribe"
import scott from "../images/scott.png"
import scottMob from "../images/scottMob.png"
import Img from "gatsby-image"
import Seo from "../components/seo"
import { GlobalStyle } from "../components/styled-components/Theme"
import SPGLogo from "../images/spg-logo"
import Instagram from "../components/email-subscription/Instagram"
import Facebook from "../components/email-subscription/Facebook"
const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Seo title="Scott Picket Group Landing Page" />
    <PageContainer>
      <LeftContainer>
        <SignupContainer>
          <SignUp />
          <Subscribe />
        </SignupContainer>
        <LogoContainer>
          <SPGLogo />
          <SocialsContainer>
            <Instagram />
            <Facebook />
          </SocialsContainer>
        </LogoContainer>
      </LeftContainer>
      <ImgContainer>
        <ImgDesktop>
          <img src={scott} alt="scotty" style={{ marginBottom: `0` }} />
        </ImgDesktop>
        <ImgMob>
          <img src={scottMob} alt="scotty" style={{ width: `100vw` }} />
        </ImgMob>
      </ImgContainer>
    </PageContainer>
  </React.Fragment>
)

export default IndexPage

const PageContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 99vw;
  overflow: hidden;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 0;
    width: 100vw;
    justify-content: flex-start;
  }
`

const LeftContainer = styled.div`
  height: auto;
  padding-bottom: 66px;
  padding-left: 84px;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 450px) {
    order: 1;
    width: 100vw;
   
  }
`

const SignupContainer = styled.div`
  width: 88%;
  height: auto;
  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`

const ImgContainer = styled.div`
  width: 52%;
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
    display: none;
  }
`

const ImgMob = styled.div`
  @media screen and (min-width: 451px) {
    display: none;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const SocialsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  /* margin-bottom: -.4rem; */

  @media screen and (min-width: 451px) {
    display: none;
  }
`
