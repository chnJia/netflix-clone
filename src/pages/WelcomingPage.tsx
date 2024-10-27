import { PiTranslateBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";

const Header = () => {
    return (
        <div className="h-screen bg-cover" style={{ backgroundImage: "url('/images/bg-welcoming-page.jpg')" }}>
            <div className="bg-black opacity-70 absolute inset-0"></div>
            <Navbar 
                logo="/images/navbar-logo.svg" 
                showLanguageOption={true} 
                showSignInButton={true} 
            />

            <div className="relative flex flex-col items-center justify-center h-screen text-white">
                <p className="text-4xl font-extrabold w-1/2"> 
                    Unlimited movies, TV shows, and more
                </p>
                <p className="text-lg font-medium mt-4"> 
                    Starts at IDR 54,000. Cancel anytime.
                </p>
            </div>
        </div>
    )
}

const WelcomingPage = () => {
    return (
        <div className="w-full">
            <Header/>

            <div className="w-full pt-16 pl-32 bg-gradient-to-r from-neutral-950 via-indigo-950 to-neutral-950">
                <div className="flex items-center justify-center space-x-3 mb-16">
                    <input type="email" placeholder="Email address" className="bg-black border-red-500 pl-5 pr-28 py-5 rounded-full" />
                    <button className="text-white text-2xl bg-red-600 font-medium px-9 py-4 rounded-full">Get Started</button>
                </div>
                <h1 className="text-4xl font-bold text-white tracking-wide text-left pb-4">Trending Now</h1>

                <ImageSlider/>
            </div>
        </div>
    )
}

export default WelcomingPage;
