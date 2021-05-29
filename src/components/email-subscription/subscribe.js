import React, { useState } from "react"
import styled from "styled-components"

import Facebook from './Facebook'
import Instagram from './Instagram'
const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [signUp, setSignup] = useState(true)
  const [thankyou, setThankyou] = useState(false)

  const handleChange = event => {
    setEmail(event.target.value)
    !email.includes(".") || !email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const timestamp = Date.now()
    if ((email && email.includes(".")) || email.includes("@")) {
      var myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", {timestamp})
      myHeaders.append("Content-Type", "application/json")

      var raw = JSON.stringify({
        data: {
          email: email,
        },
      })

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(setSignup(false))
        .then(setThankyou(true))

        .catch(error => console.log("error", error))
    } else {
      setEmailErr(true)
    }
  }

  return (
    <SubContainer>
      {signUp ? (
        <SignUp onSubmit={handleSubmit}>
          <Label>EMAIL ADDRESS</Label>
          <form>
            <Input
              placeholder="Please enter your email address"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              err={emailErr}
            />
           <BottomContainer>
            <SignUpSubmit err={emailErr} type="submit">
              SUBSCRIBE
            </SignUpSubmit>
            <SocialsContainer>
            <Instagram/>
              <Facebook/>
             
            </SocialsContainer>
            </BottomContainer>
          </form>
        </SignUp>
      ) : (
        <>
          <p>Thank you</p>
          <p>You are now signed up to our mailing list.</p>
        </>
      )}
    </SubContainer>
  )
}

export default Subscribe

const SubContainer = styled.div`
  width: 100%;

  overflow: visible;
  margin-top: 1rem;
  @media screen and (max-width: 450px) {
margin-top: 0;
}
 
`
const BottomContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const SocialsContainer = styled.div`
display: flex;
align-self: flex-end;
margin-bottom: -.4rem;
@media screen and (max-width: 450px) {
display: none;
}
` 

const SignUp = styled.div`
  font-size: 0.75rem;
`
const Label = styled.p`
  font-size: 1.1rem;
  

  @media screen and (max-width: 450px) {
    font-size: .9rem !important;
  margin-bottom: -.3rem;
  }
`
const Input = styled.input`
  width: 100%;
  height: 3.1rem;
  background: transparent;
  border: none;
  margin-top: -.5rem;
  font-size: 1rem;
  line-height: none;
  border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "#153e35")};

  @media screen and (max-width: 450px) {
    height: 3.3rem;
}

  ::placeholder {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
   
    color: ${props => props.err ? '#CB0000' : 'rgba(21, 62, 53, 50%)'};
    @media screen and (max-width: 450px) {
      font-size: 1rem;
    
    }
  }
  :focus {
    outline: none;
    background: #fdf9ee;
   
    height: 3rem;
    font-size: 150%;
  }
  :valid {
    font-size: 1rem;
   
  }
  ::-moz-focus-outer {
    color: white;
  }
  @media screen and (max-width: 450px) {
    padding: .75rem 0;
  }
`

const SignUpSubmit = styled.button`
  background: none;

  padding: 0.4rem 4,5rem;
  border: 1px solid ${props => (props.err ? "#CB0000" : "#153e35")};
  color: ${props => (props.err ? "#CB0000" : "#153e35")};
  margin-top: 2.6rem;
  font-size: .75rem;
  transition: all 0.2s ease;
  :hover {
    opacity: ${props => (props.err ? "1" : ".75")};
    background: ${props => props.err ? "#CB0000" : "#333333"};
    color: ${props => (props.err ? "beige" : "beige")}; 
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem !important;
    padding: 0.5rem 2.2rem;
    margin-top: 1.75rem;
    margin-bottom: 2.25rem;
  }
  p {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`
