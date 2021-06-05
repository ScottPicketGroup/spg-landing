import { createGlobalStyle } from "styled-components"

import Times from "../../fonts/timr45w.ttf"

import UntitledSansLight from "../../fonts/untitled-sans-web-light.woff"
import UntitledSansLight2 from "../../fonts/untitled-sans-web-light.woff2"
import UntitledSansMedium from "../../fonts/untitled-sans-web-medium.woff"
import UntitledSansMedium2 from "../../fonts/untitled-sans-web-medium.woff2"
import UntitledSansRegular from "../../fonts/untitled-sans-web-regular.woff"
import UntitledSansRegular2 from "../../fonts/untitled-sans-web-regular.woff2"

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    
}
@font-face {
  font-family: 'Times';
        src: local('Times'),
        url(${Times}) format('ttf'),
    }
   
  

    @font-face {
        font-family: 'UntitledSansLight';
        src: local('UntitledSansLight'), local('UntitledSansLight'),
        url(${UntitledSansLight2}) format('woff2'),
        url(${UntitledSansLight}) format('woff');
    }
    @font-face {
        font-family: 'UntitledSansMedium';
        src: local('UntitledSansMedium'), local('UntitledSansMedium'),
        url(${UntitledSansMedium2}) format('woff2'),
        url(${UntitledSansMedium}) format('woff');
    }
  
    @font-face {
        font-family: 'UntitledSansRegular';
        src: local('UntitledSansRegular'), local('UntitledSansRegular'),
        url(${UntitledSansRegular2}) format('woff2'),
        url(${UntitledSansRegular}) format('woff');
    }

  body {
    color: #333333;
    background: #F9F9F4;

  }
  h1 {
      font-family: UntitledSansMedium;
      font-size: 1.24rem;
      line-height: 1;
      color: #333333;
   
  }

  p {
      font-family: UntitledSansLight;
      font-size: 1.49rem;
      line-height: 1.22;
      color: #333333;
      margin-bottom: 0;
  }
  button {
      font-family: UntitledSansRegular;
      font-size: .71rem;
      line-height: 1;
      letter-spacing: 20;
      color: #333333;
  }

  @media screen and (max-width: 450px) {
    h1 {
        font-size: 1.25rem;
        line-height: 1.2;
        
    }
    p {
        font-size: 1rem;
        line-height: 1.25;
    }
    
}
`
