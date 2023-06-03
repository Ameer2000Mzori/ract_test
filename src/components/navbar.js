import './navbar.css';

function navbar(){
    return (
        <>
        <nav className='navBar'>
        <div className="navBrand">IGN</div>
        <a href='#' className='toggleBtn'>
            <span className='Bars'></span>
            <span className='Bars'></span>
            <span className='Bars'></span>
        </a>
        <div className="navLinks">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">contact</a></li>

            </ul>
        </div>
        </nav>
        </>
    )
}

export default navbar;