import React from "react"

import styled from 'styled-components'



const Facebook = ({menu}) => {


  return (
    <SocialsLink
    menu={menu}
    href="https://www.facebook.com/leshoppe.chancerylane"
    target="blank"
 
    style={{
      position: `relative`,

      
    }}
  >
      <div>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 42 41.998">
  <g id="Group_6024" transform="translate(3630 -25)">
    <path id="Path_11774" data-name="Path 11774" d="M-3609,67a21.023,21.023,0,0,1-21-21,21.023,21.023,0,0,1,21-21,21.023,21.023,0,0,1,21,21A21.023,21.023,0,0,1-3609,67Zm0-40.443A19.466,19.466,0,0,0-3628.445,46,19.466,19.466,0,0,0-3609,65.443,19.466,19.466,0,0,0-3589.555,46,19.466,19.466,0,0,0-3609,26.555Z" />
    <path id="Facebook-2" d="M-3601.238,62.67h-4.729V52.6h-2.364V48.713h2.364V46.384c0-3.165,1.333-5.049,5.126-5.049h3.156v3.882h-1.972c-1.476,0-1.574.542-1.574,1.555l-.006,1.941h3.574l-.419,3.882h-3.156Z" transform="translate(-6.003 -6.003)" />
  </g>
</svg>

     </div>
      </SocialsLink>
  )
}

export default Facebook

export const SocialsLink = styled.a`
height: 2.75rem;
width: 2.75rem;

svg {
  fill: #153e35;
  @media screen and (max-width: 450px) {
  fill: ${props => props.menu ? "#FDF9EE" : ""};
}
}

:hover {
  opacity: 75%;
}
`