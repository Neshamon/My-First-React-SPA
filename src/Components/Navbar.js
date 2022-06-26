import logo from '../logo.svg';
import React from "react";

export default function Navbar() {
  return(
    <header>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className = "nav-title">React Facts</h2>
      </nav>
    </header>
  )
}
