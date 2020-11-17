import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
const Header = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">EXPLORIX</NavLink>
        <Bars />
      </Nav>
    </div>
  )

}

export default Header

const Nav=styled.nav`
background:yellow;
height:80px;
display:flex;
justify-content:space-between;
padding: 0.5rem calc((100vw-1300px)/2);
z-index:100;
position:relative;
`

const NavLink=styled(Link)
`
color:#fff;
align-items:center;
text-decoration: none;
padding: 0 1re,;
height:100%;
cursor:pointer;
`
const Bars=styled(FaBars)`
display:none;
color:#fff;

@media screen and (max-width:768px){
  display:block;
  position:absolute;
  top: 0;
  right:0;
  transform:translate(-100%,75%);
  font-size:1.8rem;
  cursor:pointer;}
`