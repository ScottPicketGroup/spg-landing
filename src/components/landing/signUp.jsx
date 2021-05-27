import React from 'react'
import styled from 'styled-components'
const SignUp = () => {
    return (
        <SignUpContainer>
           <Heading>Coming Soon</Heading>
           <Para>Sign up to our newsletter for news, stories and invitations to the things we love to share and enjoy from Scott Pickett Group.</Para>
        </SignUpContainer>
    )
}

export default SignUp

const SignUpContainer = styled.div`
margin-bottom: 1.75rem;
margin-top: 90px;
@media screen and (max-width: 450px) {
margin-top: 52px;
margin-bottom: 1.15rem;
}

`

const Heading = styled.h1`
margin-bottom: 58px;
@media screen and (max-width: 450px) {
margin-bottom: 18px;
}
`

const Para = styled.p`
margin-bottom: 1.75rem;
@media screen and (max-width: 450px) {
margin-bottom: .3rem;
}
`

 