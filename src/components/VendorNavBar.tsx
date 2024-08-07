// src/components/VendorNavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const VendorNavBar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed top-0 left-0 flex flex-col">
      <div className="p-4 text-xl font-bold">Vendor Dashboard</div>
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
