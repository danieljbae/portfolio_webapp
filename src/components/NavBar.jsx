import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
// import { Link } from "react-scroll";


const NavBar = () => {
    // Store state of navbar
    const [nav, setNav] = useState(false);
    
    // Store NavBar elements in an array
    const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'experience'
    },
    {
        id: 5,
        link: 'contact'
    },

  ]  
  return (
    // Nav Bar Definition
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        
        {/* Initial Element on Nav Bar */}
        <div>
          <h1 className="text-5xl font-signature ml-2"> Daniel </h1>  
        </div>
        
        {/* Nav Bar from Array, hide when too small*/}
        <ul className='hidden md:flex'>
            {/* Loop over array and map class to each element in NavBar*/}
            {links.map(({id, link}) => ( 
                <li
                    key={id}
                    className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
                >
                    {link}
                </li>
            ))}
        </ul>

        {/* Menu bar icon */}
        <div
            // When menu icon is clicked, toggle nav state to True/False
            onClick={() => setNav(!nav)}
            // Only Show menu icon if window is small
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* If we click menu bar icon, display menu*/}
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {links.map(({ id, link }) => (
                <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                    {link}
                </li>
                ))}
            </ul>
            )    
        }
    </div>
  );
};

export default NavBar;