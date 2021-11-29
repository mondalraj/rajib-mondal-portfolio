import { useState, useEffect } from 'react';
const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    const desktopNavbar = (
        <div className="bg-blue-300 sticky top-0 left-0 right-0">
            <div className="p-5 navbar-container max-w-screen-xl mx-auto flex justify-between items-center h-16">
                <a href="/" className="navbar-logo">
                    <span>Rajib </span>
                    <span>Mondal</span>
                </a>
                <div className="navbar-navItems space-x-10">
                    <a href="#about" >About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact" className="navbar-contactButton">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );

    const mobileNavbarItems = (
        <div className="navbar-navItems mobile-navItems hidden flex-col z-10 bg-red-200 justify-center items-center p-5 space-y-5">
            <a href="#about" >About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="navbar-contactButton">
                Contact
            </a>
        </div>
    );

    const mobileNavbar = (
        <>
            <div className="bg-blue-300 sticky top-0 left-0 right-0">
                <div className="p-5 navbar-container max-w-screen-xl mx-auto flex justify-between items-center h-16">
                    <a href="/" className="navbar-logo">
                        <span>Rajib </span>
                        <span>Mondal</span>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer menu-icon" onClick={() => {
                        const mobileNavItems = document.querySelector('.mobile-navItems');
                        if (menuToggle) {
                            mobileNavItems.classList.add("hidden")
                            mobileNavItems.classList.remove("flex")
                            setMenuToggle(false)
                        } else {
                            mobileNavItems.classList.add("flex")
                            mobileNavItems.classList.remove("hidden")
                            setMenuToggle(true)
                        }

                    }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
            {mobileNavbarItems}
        </>
    );

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth)
        }
    }, [])

    if (screenWidth > 768) {
        return desktopNavbar;
    } else {
        return mobileNavbar;
    }
}

export default Navbar;
