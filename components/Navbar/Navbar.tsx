// components/Navbar.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { IconMenu2 } from '@tabler/icons-react';
import styles from './Navbar.module.css'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-full mx-auto lg:px-2 xl:px-0"> {/* Adjusted for larger screens */}
        <div className="flex justify-between items-center h-16"> {/* Added h-16 for consistent height */}
          {/* Website Logo */}
          <a href="/" className="flex items-center py-4 lg:py-0 ml-2 md:ml-8"> {/* Adjusted padding for larger screens */}
            <Image src="/tlogo.png" alt="Logo" width={100} height={100} />
          </a>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-4 mr-10">
            <a href="/about" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">About</a>
            <a href="/flavors" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Flavors</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center mr-5">
            <button type="button" className="text-gray-500 hover:text-green-500 focus:outline-none focus:text-green-500" aria-label="toggle menu" onClick={() => setIsOpen(!isOpen)}>
              <IconMenu2 size={30} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden ${styles.mobileMenuEnter}`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Flavors</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
