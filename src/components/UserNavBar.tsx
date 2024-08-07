// src/components/UserNavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const UserNavBar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed top-0 left-0 flex flex-col">
      <div className="p-4 text-xl font-bold">User Dashboard</div>
      <nav className="flex flex-col p-4">
        <Link to="/user/dashboard/" className="mb-2 hover:text-gray-400">Dashbaord</Link>
        <Link to="services" className="mb-2 hover:text-gray-400">Services</Link>
        <Link to="bookings" className="mb-2 hover:text-gray-400">Bookings</Link>
        <Link to="support" className="mb-2 hover:text-gray-400">Customer Support</Link>
        <Link to="settings" className="mb-2 hover:text-gray-400">Settings</Link>
        <Link to="logout" className="mb-2 hover:text-gray-400">Logout</Link>
      </nav>
    </div>
  );
};

export default UserNavBar;
