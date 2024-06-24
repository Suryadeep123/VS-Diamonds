"use client"

import {useState} from 'react';
import { Search, ShoppingBag, Menu} from 'lucide-react';
import Logo from "./Logo";
import Sidebar from './Sidebar';


const Navbar = () => {

     const [navbar, setNavbar] = useState(false);


     const toggleDropDown = () => {
        setNavbar(!navbar);
     };

    const MenuItems = [{
        name: "Home",
        link: "/",
        className: "appropriate classname here",
    },

    {
        name: "Catalog",
        link: "/Catalog",
        className: "appropriate classname here",
    },

    {
        name: "Contact",
        link: "/Contact",
        className: "appropriate classname here",
    }
];
  return (
    <>
      <nav className='bg-white w-full z-50 relative h-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'> 
                    <div className='flex-shrink-0 hidden md:block'>
                        <a href = "/" className="font-sans text-gray-500 hover:text-black hover:underline rounded-lg p-2">
                            Home
                        </a>
                        <a href = "/" className="font-sans text-gray-500 hover:text-black hover:underline rounded-lg p-2">
                            Catalog
                        </a>
                        <a href = "/" className="font-sans text-gray-500 hover:text-black hover:underline rounded-lg p-2">
                            Contact
                        </a>
                    </div>
                    <div className='md:hidden'>
                        <Menu onClick={toggleDropDown}/>
                    </div>
                </div>
                <div>
                    <Logo/>
                </div>
                <div className='flex items-center space-x-4'>
                    <a href="/"
                    className="hover:text-black hover:scale-110 rounded-lg p-2 ">
                        <Search/>
                    </a>
                    <a href="/"
                    className="hover:text-black hover:scale-110 rounded-lg p-2 ">
                        <ShoppingBag/>
                    </a>
                </div>
            </div>
        </div>
      </nav>

      <Sidebar navbar={navbar} toggleDropDown={toggleDropDown} />

    </>
  )
}

export default Navbar
