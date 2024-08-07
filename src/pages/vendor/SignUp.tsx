import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthPrompt from "../../components/vendor/auth/AuthPrompt";
import PasswordValidator from "../../components/vendor/auth/PasswordValidator";
import SocialLinks from "../../components/vendor/auth/SocialLinks";
import Button from "../../components/vendor/shared/Button";
import InputField from "../../components/vendor/shared/InputField";
import Logo from "../../components/vendor/shared/Logo";
import PageSubTitle from "../../components/vendor/shared/PageSubTitle";
import PageTitle from "../../components/vendor/shared/PageTitle";
import AuthLayout from "./layouts/AuthLayout";
import validator from "validator";

const VendorSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConditions, setPasswordConditions] = useState({
    isValidLength: false,
    hasSpecialChar: false,
    hasNumber: false,
    hasUpperCase: false,
    hasLowerCase: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement signup logic here, e.g., fetch API
    console.log(email, password);
    navigate("/vendor/email-verification", { state: { email } });
  };

  useEffect(() => {
    function validatePassword(password: string) {
      const minLengthPattern = /.{8,}/; // Minimum 8 characters
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character
      const numberPattern = /[0-9]/; // At least one number
      const upperCasePattern = /[A-Z]/; // At least one uppercase letter
      const lowerCasePattern = /[a-z]/; // At least one lowercase letter

      // Check each condition
      const isValidLength = minLengthPattern.test(password);
      const hasSpecialChar = specialCharPattern.test(password);
      const hasNumber = numberPattern.test(password);
      const hasUpperCase = upperCasePattern.test(password);
      const hasLowerCase = lowerCasePattern.test(password);

      setPasswordConditions({
        isValidLength,
        hasSpecialChar,
        hasNumber,
        hasUpperCase,
        hasLowerCase,
      });
    }

    validatePassword(password);
  }, [password]);

  const isEntryValid =
    validator.isEmail(email) &&
    password &&
    Object.values(passwordConditions).every((condition) => Boolean(condition));

  return (
    <AuthLayout>
      <div className="screen">
        <Logo />
        <PageTitle text="Let's get you started" />
        <PageSubTitle>
          Create an account on Jompstart to get started
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
              label="Create Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="e.g. example123&_"
            />
            {password && (
              <div className="grid grid-cols-2">
                <div className="space-y-2">
                  <PasswordValidator
                    isValid={passwordConditions.isValidLength}
                    text="Minimum 8 characters"
                  />
                  <PasswordValidator
                    isValid={passwordConditions.hasSpecialChar}
                    text="One special character"
                  />
                  <PasswordValidator
                    isValid={passwordConditions.hasNumber}
                    text="One number"
                  />
                </div>
                <div className="space-y-2">
                  <PasswordValidator
                    isValid={passwordConditions.hasUpperCase}
                    text="One upprcase character"
                  />
                  <PasswordValidator
                    isValid={passwordConditions.hasLowerCase}
                    text="One lowercase character"
                  />
                </div>
              </div>
            )}
          </div>
          <Button
            disabled={!isEntryValid}
            type="submit"
            onClick={handleSubmit}
            className="mt-6 w-full"
          >
            Get Started
          </Button>

          <SocialLinks />
        </form>
        <AuthPrompt
          text="Already have an account?"
          link="/vendor/login"
          linkText="Login"
        />
      </div>
    </AuthLayout>
  );
};

export default VendorSignup;
