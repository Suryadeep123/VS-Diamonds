import React from 'react';
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';


const Navbar = () => {

    const MenuItems = [{
        name: "test ",
        link: "test-link",
        icon: "put icon here",
        className: "appropriate classname here",
    },

    {
        name: "test 2 ",
        link: "test-link",
        icon: "put icon here",
        className: "appropriate classname here",
    },

    {
        name: "test 2 ",
        link: "test-link",
        icon: "put icon here",
        className: "appropriate classname here",
    }
];
  return (
    <>
      <nav className='bg-slate-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'> 
                    <div className='flex-shrink-0 '>
                        <a href = "/" className="text-white hover:text-black hover:underline rounded-lg p-2">
                            Home
                        </a>
                        <a href = "/" className="text-white hover:text-black hover:underline rounded-lg p-2">
                            Catalog
                        </a>
                        <a href = "/" className="text-white hover:text-black hover:underline rounded-lg p-2">
                            Contact
                        </a>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <a href="/"
                    className="hover:text-black rounded-lg p-2">
                        <Search/>
                    </a>
                    <a href="/"
                    className="hover:text-black rounded-lg p-2">
                        <ShoppingBag/>
                    </a>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
