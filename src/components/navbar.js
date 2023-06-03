import "./navbar.css";


function navbar() {
  return (
    <>
      <nav className="navBar">
        <div className="navBrand">IGN</div>
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
