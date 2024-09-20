import { useState } from "react";
import { FaBars, FaLock } from "react-icons/fa";

function Navbar() {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!IsOpen);
    };

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
