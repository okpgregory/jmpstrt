
import React, { useState } from "react";
import { HiOutlineLockOpen } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import ResetPassword from "./settings/ResetPassword";
import PersonalInfo from "./settings/PersonalInfo";




const VendorSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInformation />;
      case "password":
        return <PasswordReset />;
      case "privacy":
        return <PrivacyPolicy />;
      case "logout":
        return <Logout />;
      default:
        return <ProfileInformation />;
    }
  };

  return (
    <div className=" mx-auto mt-12 bg-[#f3f1ff] h-screen px-4 py-8">
      <div className="mb-3">
        <h1 className="text-[32px] bg-[#f3f1ff] rounded-lg px-2">Vendor Settings</h1>
        <p className="text-[#424242]">View all your customer payments here</p>
      </div>
      <div className="pb-6 pt-1">
        <div className="flex gap-4 mt-4">
          
          {/* Sidebar */}
          <div className="w-1/4 bg-white p-4 rounded-lg h-60">
            <ul>
              <li
                className={`flex items-center gap-2 cursor-pointer text-[#31005C] py-2 ${
                  activeTab === "profile" ? "bg-[#f3f1ff] rounded-lg px-2" : ""
                }`}
                onClick={() => setActiveTab("profile")}
              >
                <FaRegUser size={20} className="text-[#31005C]" />
                Profile Information
              </li>
              <li
                className={`flex items-center gap-2 cursor-pointer text-[#31005C] py-2 ${
                  activeTab === "password" ? "bg-[#f3f1ff] rounded-lg px-2" : ""
                }`}
                onClick={() => setActiveTab("password")}
              >
                <HiOutlineLockOpen  size={20} className="text-[#31005C]" />
                Password Reset
              </li>
              <li
                className={`flex items-center gap-2 cursor-pointer text-[#31005C] py-2 ${
                  activeTab === "privacy" ? "bg-[#f3f1ff] rounded-lg px-2" : ""
                }`}
                onClick={() => setActiveTab("privacy")}
              >
                <IoDocumentTextOutline  size={20} className="text-[#31005C]" />
               
                Privacy & Policy
              </li>
              <li
                className={`flex items-center gap-2 cursor-pointer text-[#31005C] py-2 ${
                  activeTab === "logout" ? "bg-[#f3f1ff] rounded-lg px-2" : ""
                }`}
                onClick={() => setActiveTab("logout")}
              >
                <FiLogOut  size={20} className="text-[#31005C]" />
                Logout
              </li>
            </ul>
          </div>
          {/* Content */}
          <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

// Components for each setting section
const ProfileInformation: React.FC = () => (
  <div>
   <PersonalInfo />
  </div>
);

const PasswordReset: React.FC = () => (
  <div>
    <ResetPassword />
  </div>
);

const PrivacyPolicy: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Privacy & Policy</h2>
    {/* Privacy & Policy Information */}
  </div>
);

const Logout: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Logout</h2>
    <p>Are you sure you want to logout ?</p>
    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </button>
  </div>
);

export default VendorSettings;
