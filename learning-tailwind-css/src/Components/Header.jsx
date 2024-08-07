import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
                <img src="./assets/Logo.svg" alt="Logo" />
                <button className="bg-gradient-to-r from-orange-400 to bg-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
            </div>
            <ul className="hidden lg:flex justify-between items-center text-gray-400 gap-6">
                <li>Plans</li>
                <li>Find Domain</li>
                <li>Why Hoster</li>
            </ul>
            <div className="hidden lg:flex items-center font-lato gap-6">
                <a className="text-gray-400 " href="#">Sign In</a>
                <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
            </div>
            <div className="lg:hidden">
                <FaBars />
            </div>
        </div>
    )
}

export default Header