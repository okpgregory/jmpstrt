// src/components/UserDashboard.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavBar from '../../components/UserNavBar';

const UserDashboard: React.FC = () => {
  return (
    <div className="flex">
      <UserNavBar />
      <div className="ml-64 p-8 flex-1">
        <h1 className="text-3xl mb-4">User Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
