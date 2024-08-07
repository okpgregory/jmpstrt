// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
// adjust this to suit the landing page header
const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/user/login" className="ml-4 text-white">User Login</Link>
        <Link to="/vendor/login" className="ml-4 text-white">Vendor Login</Link>
      </div>
    </nav>
  );
};

export default Header;
