import { useState, useEffect } from 'react';
const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);
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


    const desktopNavbar = (
        <div className="sticky top-0 left-0 right-0 z-10" style={{ backgroundColor: "#171717" }}>
            <div className="p-5 navbar-container max-w-screen-xl mx-auto flex justify-between items-center h-16 text-white">
                <a href="/" className="navbar-logo text-2xl font-semibold tracking-wider">
                    <span className="text-yellow-400">Rajib </span>
                    <span>Mondal</span>
                </a>
                <div className="navbar-navItems space-x-8">
                    <a href="#about" className="text-lg tracking-wider">About</a>
                    <a href="#skills" className="text-lg tracking-wider">Skills</a>
                    <a href="#projects" className="text-lg tracking-wider">Projects</a>
                    <a href="#experience" className="text-lg tracking-wider">Experience</a>
                    <a href="#contact" className="navbar-contactButton text-lg font-semibold bg-gray-300 py-1 px-4 text-black rounded">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );

    const mobileNavbarItems = (
        <div className="navbar-navItems mobile-navItems sticky left-0 right-0 top-16 hidden flex-col z-10 justify-center items-center p-5 space-y-7 text-white transition-all" style={{ backgroundColor: "#171717" }}>
            <a href="#about" className="text-lg tracking-wider" onClick={() => {
                const mobileNavItems = document.querySelector('.mobile-navItems');
                mobileNavItems.classList.add("hidden")
                mobileNavItems.classList.remove("flex")
                setMenuToggle(false)
            }}>About</a>
            <a href="#skills" className="text-lg tracking-wider" onClick={() => {
                const mobileNavItems = document.querySelector('.mobile-navItems');
                mobileNavItems.classList.add("hidden")
                mobileNavItems.classList.remove("flex")
                setMenuToggle(false)
            }}>Skills</a>
            <a href="#projects" className="text-lg tracking-wider" onClick={() => {
                const mobileNavItems = document.querySelector('.mobile-navItems');
                mobileNavItems.classList.add("hidden")
                mobileNavItems.classList.remove("flex")
                setMenuToggle(false)
            }}>Projects</a>
            <a href="#experience" className="text-lg tracking-wider" onClick={() => {
                const mobileNavItems = document.querySelector('.mobile-navItems');
                mobileNavItems.classList.add("hidden")
                mobileNavItems.classList.remove("flex")
                setMenuToggle(false)
            }}>Experience</a>
            <a href="#contact" onClick={() => {
                const mobileNavItems = document.querySelector('.mobile-navItems');
                mobileNavItems.classList.add("hidden")
                mobileNavItems.classList.remove("flex")
                setMenuToggle(false)
            }} className="navbar-contactButton w-full text-lg text-center font-semibold bg-gray-300 py-1 text-black rounded">
                Contact
            </a>
        </div>
    );

    const mobileNavbar = (
        <>
            <div className="sticky top-0 left-0 right-0 z-10" style={{ backgroundColor: "#171717" }}>
                <div className="p-5 navbar-container max-w-screen-xl mx-auto flex justify-between items-center h-16 text-white">
                    <a href="/" className="navbar-logo text-2xl font-semibold tracking-wider">
                        <span className="text-yellow-400">Rajib </span>
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


    if (screenWidth > 768) {
        return desktopNavbar;
    } else {
        return mobileNavbar;
    }
}

export default Navbar;
