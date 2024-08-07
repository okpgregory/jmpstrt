import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import validator from "validator";
import AuthPrompt from "../../components/vendor/auth/AuthPrompt";
import Button from "../../components/vendor/shared/Button";
import InputField from "../../components/vendor/shared/InputField";
import Modal from "../../components/vendor/shared/Modal";
import ModalOverlay from "../../components/vendor/shared/ModalOverlay";
import PageSubTitle from "../../components/vendor/shared/PageSubTitle";
import PageTitle from "../../components/vendor/shared/PageTitle";
import { censorEmail } from "../../lib/utils";
import AuthLayout from "./layouts/AuthLayout";

// set input fields based on if its to enter email for password reset or for creating new password
const InputArea = ({
  isResetPage,
  emailValue,
  handleEmailInput,
  passwordValue,
  confirmPasswordValue,
  isError,
  handlePasswordInput,
}: {
  isResetPage: boolean;
  emailValue: string;
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  confirmPasswordValue: string;
  isError: boolean;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  if (isResetPage) {
    return (
      <div className="space-y-3">
        <InputField
          label="Create New Password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordInput}
          placeholder="Enter your new password"
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPasswordValue}
          onChange={handlePasswordInput}
          placeholder="Re-enter your new password"
          isError={isError}
        />
        {isError && (
          <p className="text-sm text-red-error leading-[19.6px]">
            Password doesn&apos;t match, please check and try again
          </p>
        )}
      </div>
    );
  } else {
    return (
      <InputField
        label="Business Email Address"
        type="email"
        name="email"
        value={emailValue}
        onChange={handleEmailInput}
        placeholder="e.g. ronald@jomp.com"
      />
    );
  }
};

const VendorForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [passwordInput, setpasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isResetPage, setIsResetPage] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const isEmailValid = validator.isEmail(email);

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPasswordError) setIsPasswordError(false);
    setpasswordInput({ ...passwordInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isResetPage) {
      if (passwordInput.password !== passwordInput.confirmPassword) {
        setIsPasswordError(true);
        return;
      }
      setIsPasswordReset(true);
    } else {
      setIsEmailSent(true);
    }
  };

  const handleProceed = () => {
    if (isResetPage) {
      setIsPasswordReset(false);
      navigate("/vendor/login");
    } else {
      setSearchParams({ reset: "true" });
      setIsEmailSent(false);
    }
  };

  useEffect(() => {
    setIsResetPage(!!searchParams.get("reset"));
    setpasswordInput({
      password: "",
      confirmPassword: "",
    });
    setIsPasswordError(false);
  }, [searchParams]);

  return (
    <AuthLayout>
      <div className="screen">
        <img src="/svgs/password.svg" alt="password" className="mb-6" />
        <PageTitle
          text={isResetPage ? "Reset your Password" : "Forgot Password?"}
        />
        <PageSubTitle>
          {isResetPage
            ? "Complete the fields below to reset your password"
            : "Enter your registered email to reset your password"}
        </PageSubTitle>
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 rounded">
          <InputArea
            isResetPage={isResetPage}
            emailValue={email}
            handleEmailInput={(e) => setEmail(e.target.value)}
            passwordValue={passwordInput.password}
            confirmPasswordValue={passwordInput.confirmPassword}
            isError={isPasswordError}
            handlePasswordInput={handlePasswordInput}
          />
          <Button
            disabled={isResetPage ? false : !isEmailValid}
            type="submit"
            onClick={handleSubmit}
            className="mt-6 w-full"
          >
            Submit
          </Button>
        </form>

        {(isEmailSent || isPasswordReset) && (
          <ModalOverlay onClick={handleProceed}>
            <Modal
              buttonClasses="w-full"
              buttonText={isResetPage ? "Proceed to Login" : "Ok"}
              titleText={isResetPage ? "Password Reset!" : "Email Sent!"}
              subText={
                isResetPage
                  ? "Your password reset was successfull, please proceed to login with your newly created password."
                  : `Your password reset email has been successfully sent to ${
                      censorEmail(email) || ""
                    }, kindly proceed to click on the link in the password reset email.`
              }
              onClick={handleProceed}
            />
          </ModalOverlay>
        )}

        <AuthPrompt
          text="Remember your password?"
          link="/vendor/login"
          linkText="Login"
        />
      </div>
    </AuthLayout>
  );
};

export default VendorForgotPassword;
