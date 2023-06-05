import "./navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Contact from "./contactus";

function navbar() {
  // btn function
  let clicks = () => {
    let navLnks = document.getElementsByClassName("navLinks")[0];
    navLnks.classList.toggle("active");
  }

  let contactme = () => {
    console.log("you clicked");
  }
  return (
    <>
      <nav className="navBar">
        <div className="navBrand"><img className="navBrand" src="\imgs\Firewatch_Logo.png"></img></div>
        <a href="#" onClick={clicks} className="toggleBtn">
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
</a>
<BrowserRouter>
  <Routes>
    <Route path=".contactus" element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
        <div className="navLinks">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navbar;
