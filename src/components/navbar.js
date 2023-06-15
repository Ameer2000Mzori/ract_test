import "./navbar.css";
import * as React from "react";
import Main from "./main";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function navbar() {
  // btn function
  let clicks = () => {
    let navLnks = document.getElementsByClassName("navLinks")[0];
    navLnks.classList.toggle("active");
  };

  let contactme = () => {
    console.log("you clicked");
  };
  return (
    <>
      <BrowserRouter className="navBar">
        <nav className="navBar">
          <div className="navBrand">
            <img className="navBrand" src="\imgs\Firewatch_Logo.png"></img>
          </div>
          <a href="#" onClick={clicks} className="toggleBtn">
            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </a>
          <div className="navLinks">
            <ul>
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <NavLink to="Contact">
                  <a> Contact</a>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default navbar;
