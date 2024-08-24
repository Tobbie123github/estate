import React from "react";
import Logout from './Logout';
import {Link} from "react-router-dom";

// import Logo from "../assets/img/logo.svg";

const Header = ({user}) => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center font-bold text-gray-800" >
                <div className="flex justify-between items-center gap-6">
                    <Link to="/home">
                        {/* <img src={Logo} alt="logo"/> */}
                        <p className="text-violet-700 md:text-3xl hover:text-violet-800 text-xl font-bold transition">MARSHA</p>
                    </Link>
                    <Link className="hidden md:flex px-4 py-3 bg-violet-300 text-white rounded-lg" to="">Rent</Link>
                    <Link className="hidden md:flex px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="">Buy</Link>
                    <Link className="hidden md:flex px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Sell</Link>
                </div>
                <div className="flex items-center gap-6 ">
                    {!user ? (

                        <>
                         <Link className="border-2 text-violet-800  px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition" to="/login">Log in</Link>
                         <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition " to="/">Sign up</Link>
                        </>
                    ):(
                        <>
                        <p>Welcome {user.name}</p>
                        <p><Logout /></p>
                        </>
                    
                    )}
                   
                </div>

            </div>
        </header>
    )
}

export default Header;