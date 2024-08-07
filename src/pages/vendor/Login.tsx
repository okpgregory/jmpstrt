// src/components/VendorLogin.tsx
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useVendor } from "../../contexts/VendorContext";
import AuthLayout from "./layouts/AuthLayout";
import Logo from "../../components/vendor/shared/Logo";
import PageTitle from "../../components/vendor/shared/PageTitle";
import PageSubTitle from "../../components/vendor/shared/PageSubTitle";
import InputField from "../../components/vendor/shared/InputField";
import Button from "../../components/vendor/shared/Button";
import SocialLinks from "../../components/vendor/auth/SocialLinks";
import AuthPrompt from "../../components/vendor/auth/AuthPrompt";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const VendorLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { setVendor } = useVendor();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here, e.g., fetch API
    login();
    setVendor({ email });
    navigate("/vendor/compliance");
  };

  const isEntryValid = validator.isEmail(email) && password;

  return (
    <AuthLayout>
      <div className="screen">
        <Logo />
        <PageTitle text="Welcome back!" />
        <PageSubTitle>
          Complete the fields below to continue enjoying Jompstart
        </PageSubTitle>
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 rounded">
          <div className="space-y-3">
            <InputField
              label="Business Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. ronald@jomp.com"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="e.g. example123&_"
            />
          </div>
          <a
            href="/vendor/forgot-password"
            className="leading-[22.4px] text-right text-gray-1 mt-4 block"
          >
            Forgot Password?
          </a>
          <Button
            disabled={!isEntryValid}
            type="submit"
            onClick={handleSubmit}
            className="mt-6 w-full"
          >
            Login
          </Button>

          <SocialLinks />
        </form>
        <AuthPrompt
          text="Don't have an account?"
          link="/vendor/sign-up"
          linkText="Get Started"
        />
      </div>
    </AuthLayout>
  );
};

export default VendorLogin;
