import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-screen bg-cover" style={{ backgroundImage: "url('/images/bg-welcoming-page.jpg')" }}>
            <div className="bg-black opacity-60 absolute inset-0"></div>
            <Navbar
                logo="/images/navbar-logo.svg"
                showLanguageOption={false}
                showSignInButton={false}
            />
        </div>
    );
}

const SignIn = () => {
    return (
        <div>
            <Header />
            <div className="absolute inset-0 flex items-center justify-center text-white mt-10">
                <div className="bg-black bg-opacity-80 text-white rounded-xl shadow-lg w-11/12 md:w-2/6 px-5 md:px-20 py-8 space-y-5">
                    <h1 className="text-left font-bold text-3xl md:text-4xl mb-5 tracking-wide">Sign In</h1>
                    <input 
                        type="email" 
                        placeholder="Email or mobile number" 
                        className="bg-transparent border border-solid border-zinc-500 rounded-md p-3 text-black w-full"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="bg-transparent border border-solid border-zinc-500 rounded-md p-3 text-black w-full"
                    />
                    <button className="bg-red-700 text-white py-3 rounded-md w-full text-lg md:text-xl font-medium">
                        Sign In
                    </button> 
                    <p className="text-sm md:text-lg text-center">OR</p>
                    <button className="bg-black bg-zinc-400 bg-opacity-30 text-white py-3 rounded-md w-full text-lg md:text-xl font-medium">
                        Use a Sign-In Code
                    </button> 
                    <p className="text-sm md:text-lg">Forgot Password?</p>
                    <div className="flex items-center text-sm md:text-lg">
                        <label className="flex items-center">
                            <input type="checkbox" className="accent-gray-500 w-5 h-5 mr-2" /> Remember me
                        </label>
                    </div>
                    <div className="flex flex-row space-x-2 text-sm md:text-lg">
                        <p className="text-zinc-400">New to Netflix?</p>
                        <Link to="/signup" className="font-medium">Sign up now.</Link> {/* Added Link */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
