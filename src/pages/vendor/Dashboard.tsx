// src/components/VendorDashboard.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import VendorNavBar from '../../components/VendorNavBar';

const VendorDashboard: React.FC = () => {
  return (
    <div className="flex">
      <VendorNavBar />
      <div className="ml-64 p-8 flex-1">
        <h1 className="text-3xl mb-4">Vendor Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default VendorDashboard;
