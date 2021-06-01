import React from 'react'
import styled from 'styled-components'
const Intro = () => {
    return (
     <Para>
         Sign up for updates from the Scott Pickett Group and to be the first to know when our new site is live.
     </Para>
    )
}

export default Intro



const Para = styled.p`
margin-top: 3.5rem;
margin-bottom: 3.5rem;
@media screen and (max-width: 450px) {
margin-bottom: .3rem;
}
`