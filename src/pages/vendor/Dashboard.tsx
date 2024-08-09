// src/components/VendorDashboard.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import VendorNavBar from "../../components/VendorNavBar";
import VendorNav from "../../components/VendorNav";

const VendorDashboard: React.FC = () => {
  return (
    <div className="flex">
      <VendorNavBar />
      <div className="ml-64 flex-1">
        <Outlet />
        <VendorNav />
      </div>
    </div>
  );
};

export default VendorDashboard;
