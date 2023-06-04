import "./navbar.css";


function navbar() {

  let TogBtn = document.getElementsByClassName("toggleBtn")[0]
  let navLnks = document.getElementsByClassName("navLinks")[0]

  TogBtn.addEventListener('click', function(){
      navLnks.classList.toggle("active");
  
  })

  return (
    <>
      <nav className="navBar">
        <div className="navBrand">IGN</div>
        <a href="#" className="toggleBtn">
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
