
import { createGlobalStyle} from 'styled-components'

import Times from '../../fonts/timr45w.ttf'
import UntitledSans from '../../fonts/untitled-sans-reg.ttf'
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    
}
@font-face {
  font-family: 'Times';
        src: local('Times'),
        url(${Times}) format('ttf'),
    }
    @font-face{
        font-family: 'UntitledSans';
        src: local('UntitledSans'),
        url(${UntitledSans}) format('ttf'),
    }
  body {
    color: #333333;
    background: #F9F9F4;

  }
  h1 {
      font-family: Times;
      font-weight: bold;
      font-size: 52px;
      line-height: .94;
      color: #333333;
   
  }

  p {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: 300;
      font-size: 32px;
      line-height: 1.2;
      color: #333333;
      margin-bottom: 0;
  }
  button {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      color: #333333;
  }

  @media screen and (max-width: 450px) {
    h1 {
        font-size: 30px;
    }
    p {
        font-size: 1.2rem;
        line-height: 1.16;
    }
}
`