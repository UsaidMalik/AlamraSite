import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Al-Amra Importers. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
            Home
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
            About
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
            Products
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
