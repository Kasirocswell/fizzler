// components/Navbar.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { IconMenu2 } from "@tabler/icons-react";
import styles from './Navbar.module.css'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = [
    { href: '/about', label: 'About', color: 'var(--blue)' },
    { href: '/flavors', label: 'Flavors', color: 'var(--pink)' },
    { href: '/contact', label: 'Contact', color: 'var(--green)' },
    // Add more items here
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Website Logo */}
          <a href="/" className="flex items-center py-4 mr-4">
            <Image src="/tlogo.png" alt="Logo" width={100} height={100} />
          </a>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <a 
                href={item.href} 
                className={`py-4 px-2 font-semibold ${styles.navLink}`} 
                style={{ '--c': item.color } as React.CSSProperties} // Type assertion here
                key={index}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              <IconMenu2 size={30} stroke={1.5} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden ${styles.mobileMenuEnter}`}>
        {navItems.map((item, index) => (
          <a 
            href={item.href} 
            className={`block py-2 px-4 text-sm ${styles.navLink}`} 
            style={{ '--c': item.color } as React.CSSProperties} // Type assertion here
            key={index}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
