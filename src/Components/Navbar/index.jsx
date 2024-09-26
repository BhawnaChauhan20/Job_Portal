import { useState } from "react";
import { FaBars, FaLock } from "react-icons/fa";

import { useNavigate } from "react-router-dom";



function Navbar() {
    const [IsOpen, setIsOpen] = useState(false);
    const navigate=useNavigate();
=======

function Navbar() {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!IsOpen);
    };

    const handleLoginClick=()=>{
           navigate("/Login");
    }
    
    return (
        <div className="relative pt-8 h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 text-grey w-full lg:space-x-40">
            {/* Logo */}
            <div className="text-4xl font-bold">JOBOARD</div>

            {/* Hamburger Menu Button for Small Screens */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-grey mr-4" aria-label="Toggle menu">
                    <FaBars />
                </button>
            </div>

            {/* Navigation links for larger screens */}
            <ul className="hidden lg:flex lg:space-x-12">
                <li><a href="Components/Section/index.jsx" className="lg:text-l md:text-sm">Home</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">About</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">Job Listing</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">Blog</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">Contact</a></li>
            </ul>

            {/* Login Button */}
            <div className="hidden lg:flex">
                <button id="Login-btn"    onClick={handleLoginClick}  className="flex bg-transparent hover:bg-teal-600 hover:text-white text-xl text-teal-500 px-2 py-1 border border-teal-500 rounded">
                    <FaLock className="pt-1" />
                    <span>Login</span>
                </button>
            </div>

            {/* Mobile Menu - Opens below the Navbar */}
            {IsOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 lg:hidden">
                    <a href="#" className="text-teal-500 text-lg">Home</a>
                    <a href="#" className="text-teal-500 text-lg">About</a>
                    <a href="#" className="text-teal-500 text-lg">Job Listing</a>
                    <a href="#" className="text-teal-500 text-lg">Blog</a>
                    <a href="#" className="text-teal-500 text-lg">Contact</a>
                    <button   onClick={handleLoginClick}  className="flex bg-transparent hover:bg-teal-600 hover:text-white text-xl text-teal-500 px-4 py-2 border border-teal-500 rounded ">
                        <FaLock className="pt-1"  />
                        <span className="lg:text-l md:text-sm">Login</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
=======

    return (
        <div>
            <div className="pt-8 h-20 flex justify-between xl:justify-start items-center w-full text-grey  xl:space-x-40 ">
                {/* Logo */}
                <div className="text-4xl  font-bold  pl-24 ">JOBOARD</div>

                {/* Navigation links */}
                <div className="">
                    <ul
                     className={`flex  flex-col xl:flex-row xl:space-x-24 xl:items-center ${IsOpen ? 'block' : 'hidden xl:block '

                     }`}>
                        <a href="" className="text-l">Home</a>
                        <a href="" className="text-l">About</a>
                        <a href="" className="text-l">Job Listing</a>
                        <a href="" className="text-l">Blog</a>
                        <a href="" className="text-l">Contact</a>
                    </ul>
                </div>
                
                <div className="flex items-center space-x-4">
                    {/* HamBurger Menu Button For Small Screen */}
                    <div className="xl:hidden">
                        <button onClick={toggleMenu} className="text-grey mr-4 ">
                            <FaBars />
                        </button>
                    </div>
                    {/* Login Button */}
                    <button className=" flex bg-transparent hover:bg-teal-600 hover:text-white text-xl text-teal-500 px-2 py-1 border border-teal-500 rounded">
                        <FaLock className="pt-1" />
                        Login
                    </button>
                    </div>
                </div>


            </div>
            )
}

            export default Navbar

