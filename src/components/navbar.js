import "./navbar.css";
import * as React from "react";

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
          <span className="bars"></span></a>
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
