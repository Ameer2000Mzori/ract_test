import "./navbar.css";

function navbar() {
  // btn function
  let clicks = () => {
    let navLnks = document.getElementsByClassName("navLinks")[0];
    navLnks.classList.toggle("active");
  }
  
  return (
    <>
      <nav className="navBar">
<<<<<<< Updated upstream
        <div className="navBrand">IGN</div>

        <a
          href="#"
          onClick={clicks}className="toggleBtn">
=======
        <div className="navBrand"><img className="navBrand" src=".\imgs\Firewatch_Logo.png"></img></div>
        <a href="#" onClick={clicks} className="toggleBtn">
>>>>>>> Stashed changes
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
        </a>
        <div className="navLinks">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navbar;
