import React from 'react';
import { Search, ShoppingBag, Menu} from 'lucide-react';
import Logo from "./Logo";


const Navbar = () => {

    // const [navbar, setNavbar] = useState(false);

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
      <nav className='bg-white w-full'>
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
                        <Menu/>
                    </div>
                </div>
                <div>
                    <Logo/>
                </div>
                <div className='flex items-center space-x-4'>
                    <a href="/"
                    className="hover:text-black hover:scale-110 rounded-lg p-2 hidden md:block">
                        <Search/>
                    </a>
                    <a href="/"
                    className="hover:text-black hover:scale-110 rounded-lg p-2 hidden md:block">
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
