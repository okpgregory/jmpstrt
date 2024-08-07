import React from "react";
import AuthHero from "../../../components/vendor/auth/AuthHero";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block sticky bg-gray-authBg top-0 bottom-0 left-0 h-screen">
        <AuthHero />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
