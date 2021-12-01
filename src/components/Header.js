
function Header() {
    return (
        <>
            <div className="p-5 header-container max-w-screen-xl mx-auto flex justify-center items-center -m-20 md:-mt-16 h-screen max-h-screen text-white flex-col-reverse md:flex-row">
                <div className="header-content md:pl-10 flex flex-col items-center md:items-start space-y-5">
                    <div className="text-xl text-black bg-yellow-400 w-max py-0.5 px-6 rounded">Web Developer</div>
                    <div className="text-3xl md:text-5xl font-semibold">Also a Software <span className="text-yellow-400">Engineer</span></div>
                    <div className="text-lg md:text-xl w-5/6 tracking-wider leading-7 md:pt-5 pb-2 text-justify md:text-left">I can design aesthetic websites, write easy to understand code, optimize the code and sometimes solve DSA problems.</div>
                    <div className="flex">
                        <a href="https://www.linkedin.com/in/dev-rajib-mondal/" style={styles.headerButton} className="flex items-center mr-8 rounded"><img className="h-6 pr-3" src="https://img.icons8.com/ios-glyphs/50/ffffff/linkedin-circled.png" />LinkedIn</a>
                        <a href="https://github.com/mondalraj" style={styles.headerButton} className="flex items-center rounded"><img className="h-6 pr-3" src="https://img.icons8.com/material-outlined/50/ffffff/github.png" />Github</a>
                    </div>
                </div>
                <div className="header-image -mt-3 w-9/12 sm:w-3/5 md:w-full">
                    <img style={{ width: "800px" }} src="heroImage.png" alt="Image of Rajib Mondal" />
                </div>

            </div>
            <div className="flex justify-center items-center animate-bounce mt-3">
                <img className="" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-down-arrows-those-icons-fill-those-icons-1.png" />
            </div>

        </>
    )
}

const styles = {
    headerButton: {
        backgroundColor: '#171717',
        padding: 5,
        paddingRight: 25,
        paddingLeft: 25,
        fontSize: 18
    }
}

export default Header
