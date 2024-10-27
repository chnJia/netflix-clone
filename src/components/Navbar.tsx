import { Link } from "react-router-dom";

interface NavbarProps {
    logo?: string;
    showLanguageOption?: boolean;
    showSignInButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logo, showLanguageOption = true, showSignInButton = true }) => {
    return (
        <nav className="header-nav w-full absolute flex justify-between items-center px-4 sm:px-10 md:px-20 lg:px-48 py-5 z-10"> 
            {logo && <img className="w-24 sm:w-28 md:w-32 lg:w-36" src={logo} alt="Navbar Logo" />} 

            <div className="flex space-x-3 sm:space-x-4">
                {showLanguageOption && (
                    <select className="bg-transparent text-white border border-gray-400 rounded-lg px-3 py-1 cursor-pointer text-sm sm:text-base"> 
                        <option value="english" className="text-black">English</option>
                        <option value="indonesia" className="text-black">Bahasa Indonesia</option>
                    </select>
                )}

                {showSignInButton && (
                    <Link to="/Sign-In">
                        <button className="text-white font-bold bg-red-600 py-1 px-3 rounded-lg text-sm sm:text-base"> 
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
