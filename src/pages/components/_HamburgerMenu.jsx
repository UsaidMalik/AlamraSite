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
        <div className="absolute top-16 right-0 w-48 bg-white p-4 shadow-md rounded-md">
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
