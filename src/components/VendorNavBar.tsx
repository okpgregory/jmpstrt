// src/components/VendorNavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const VendorNavBar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-white shadow-lg text-gray-400 fixed top-0 left-0 flex flex-col z-10">
      <img src="/Jompstart Logo.svg" alt="" className='w-52 pt-3'/>
      <nav className="flex flex-col p-4">
        <Link to="/vendor/dashboard/" className="mb-2 hover:text-gray-400">Dashboard</Link>
        <Link to="services" className="mb-2 hover:text-gray-400">Services</Link>
        <Link to="transactions" className="mb-2 hover:text-gray-400">Transactions</Link>
        <Link to="settings" className="mb-2 hover:text-gray-400">Settings</Link>
        <Link to="logout" className="mb-2 hover:text-gray-400">Logout</Link>
      </nav>
    </div>
  );
};

export default VendorNavBar;
