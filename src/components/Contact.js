function Contact() {
    return (
        <div id="contact" className="contact-container max-w-screen-xl mx-auto flex justify-center items-center min-h-screen text-white p-5 pt-20">
            <div className="get-in-touch w-full p-5 rounded-md md:max-w-3xl" style={{ backgroundColor: "#171717" }}>
                <div className="text-yellow-400 text-2xl md:text-3xl font-semibold tracking-wide pb-4">Get In Touch!</div>
                <div className="text-lg">
                    <p>Have an enquiry or feedback for me?</p>
                    <p>Fill out the form below to contact me.</p>
                </div>
                <div className="contact-form relative -bottom-10 rounded p-5" style={{ backgroundColor: "#CDCDCD" }}>
                    <form action="mailto:mondalrajib2002@gmail.com" method="post" enctype="text/plain">
                        <label className="text-md text-black " htmlFor="email">Mail <br /></label>
                        <input className="w-full rounded focus:outline-none p-2 mt-1 mb-3 text-gray-800" type="email" name="email" id="email" placeholder="Type your Email" />
                        <br />
                        <label className="text-md text-black " htmlFor="message">Message <br /></label>
                        <textarea className="focus:outline-none w-full rounded p-2 mt-1 text-gray-800" name="message" id="message" cols="30" rows="10" placeholder="Type your Message..."></textarea>
                        <input className="bg-yellow-400 cursor-pointer mt-2 w-full rounded text-black p-2 px-5" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
