import React from 'react'
import Logo from '../assets/images/logo.png';
import { Navbar } from "react-bootstrap"
import './Header.scss'

function Header() {
  return (
    <Navbar variant="dark" className="header__container">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          className="header__img"
        />{' '}
      </Navbar.Brand>
    </Navbar>
  )
}

export default Header
