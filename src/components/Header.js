import React from 'react'
import logo from '../assets/images/appicon.png';

import AppStore from '../components/AppStore'
const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1><b>Pandoras</b>: Devil's drinking game</h1>
        <p>This party game gives «Truth or Dare» a proper overhaul. We dare you to open Pandora’s Box…</p>
        <AppStore />
    </header>
)

export default Header
