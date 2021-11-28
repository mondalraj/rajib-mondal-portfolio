function Navbar() {
    return (
        <div>
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <span>Rajib </span>
                    <span>Mondal</span>
                </a>
                <div className="navbar-navItems">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#blogs">Blogs</a>
                </div>
                <a href="#contact" className="navbar-contactButton">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Navbar;
