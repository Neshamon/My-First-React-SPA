import logo from '../logo.svg';
import React from "react";

export default function Navbar() {
  return(
    <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className = "">React Facts</h2>
    </nav>
  )
}
