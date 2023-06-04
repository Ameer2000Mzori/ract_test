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
        <div className="navBrand">IGN</div>
        <a href="#" onClick={clicks} className="toggleBtn">
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
</a>
        <div className="navLinks">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navbar;
