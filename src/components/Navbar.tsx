import { Link } from "react-router-dom";


interface NavbarProps {
    logo?: string;
    showLanguageOption?: boolean;
    showSignInButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logo, showLanguageOption = true, showSignInButton = true }) => {
    return (
        <nav className="header-nav w-full absolute flex justify-between items-center px-48 py-7 z-10">
            {logo && <img className="w-48" src={logo} alt="Navbar Logo" />}

            <div className="flex space-x-5">
                {showLanguageOption && (
                    <select className="bg-transparent text-white border border-gray-400 rounded-lg px-10 cursor-pointer"> 
                        <option value="english" className="text-black">English</option>
                        <option value="indonesia" className="text-black">Bahasa Indonesia</option>
                    </select>
                )}

                {showSignInButton && (
                    <Link to="/Sign-In">
                        <button className="text-white font-bold bg-red-600 py-2 px-5 rounded-lg">Sign In</button>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;