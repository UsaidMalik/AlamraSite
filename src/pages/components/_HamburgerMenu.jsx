import Link from "next/link";
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="relative">
      <button
        className="flex text-white p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>


      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white p-4 shadow-md rounded-md text-lg">
          <ul>
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-gray-600"
              >
                Contact
              </Link>
            </li>

            {/* Machined Badges*/}
              <li>
              <Link
                href="/products?collection=machinedBadges" 
                as= "products/machinedBadges"
                className="text-gray-800 hover:text-gray-600"
              >
                Machined Badges
              </Link>
            </li>

            {/* Bullion Crests*/}
            <li>
              <Link
                href="/products?collection=bullionCrests" 
                as= "products/bullionCrests"
                className="text-gray-800 hover:text-gray-600"
              >
                Bullion Crests
              </Link>
            </li>

             {/* Braiding*/}
             <li>
              <Link
                href="/products?collection=braiding" 
                as= "products/braiding"
                className="text-gray-800 hover:text-gray-600"
              >
                Braiding
              </Link>
            </li>

               {/* Arras */}
               <li>
              <Link
                href="/products?collection=arras" 
                as= "products/arras"
                className="text-gray-800 hover:text-gray-600"
              >
                Arras
              </Link>
            </li>

             {/* Aiguillette */}
             <li>
              <Link
                href="/products?collection=aiguillette" 
                as= "products/aiguillette"
                className="text-gray-800 hover:text-gray-600"
              >
                Aiguillette
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="text-gray-800 hover:text-gray-600"
              >
                All products
              </Link>
            </li>

        

          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
