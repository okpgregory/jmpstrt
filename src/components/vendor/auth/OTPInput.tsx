import React, { useState } from "react";
import Button from "../shared/Button";
import ModalOverlay from "../shared/ModalOverlay";
import VerificationModal from "../shared/VerificationModal";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import Modal from "../shared/Modal";

const InputBar = ({
  value,
  onChange,
  isAllFieldsValid,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAllFieldsValid: boolean;
}) => {
  return (
    <input
      className={cn(
        "h-16 w-16 text-center caret-underscore border border-gray-3 rounded-lg shadow-sm",
        {
          "border-sky-1": isAllFieldsValid,
        }
      )}
      type="text"
      value={value}
      onChange={onChange}
      maxLength={1}
    />
  );
};

const OTPInput = () => {
  // create OTP array and include room for the middle index for input boxes divider
  const [otp, setOtp] = useState(new Array(6 + 1).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const middleIndex = Math.floor(otp.length / 2);

  const isInputComplete = otp
    .filter((_, index) => index !== middleIndex)
    .every((v) => Boolean(v));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    // check if input is a number and set the OTP array accordingly
    if (isNaN(e.target.value as any)) return false;
    setOtp([...otp.map((data, i) => (i === index ? e.target.value : data))]);

    // move focus to next input but skip divider
    if (e.target.value && e.target.nextSibling) {
      index === middleIndex - 1
        ? (e.target.nextSibling.nextSibling as HTMLElement).focus()
        : (e.target.nextSibling as HTMLElement).focus();
    }

    // move focus to previous input but skip divider
    if (!e.target.value && e.target.previousSibling) {
      index === middleIndex + 1
        ? (e.target.previousSibling.previousSibling as HTMLElement).focus()
        : (e.target.previousSibling as HTMLElement).focus();
    }

    if (e.target.value && !e.target.nextSibling) {
      e.target.blur();
    }
  }

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // remove divider from final OTP value
    const finalOTPValues = otp
      .filter((_, index) => index !== middleIndex)
      .join("");

    // submit otp
    console.log(finalOTPValues);
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 3000);
  };

  const handleProceed = () => {
    setIsVerified(false);
    navigate("/vendor/login");
  };

  return (
    <form onSubmit={handleOTPSubmit} className="flex flex-col gap-7">
      <div className="flex items-center space-x-6">
        {otp.map((data, index) => {
          if (index === middleIndex)
            // divide the input boxes UI by half
            return <div key={index} className="h-1 w-4 bg-gray-5" />;
          return (
            <InputBar
              key={index}
              value={data}
              onChange={(e) => handleChange(e, index)}
              isAllFieldsValid={isInputComplete}
            />
          );
        })}
      </div>
      <Button disabled={!isInputComplete} type="submit" className="w-full">
        Verify
      </Button>

      {/* MODAL */}
      {(isVerifying || isVerified) && (
        <ModalOverlay
          onClick={() => {
            if (isVerified) {
              handleProceed();
            } else {
              setIsVerified(false);
            }
          }}
        >
          {/* VERIFYING MODAL */}
          {isVerifying && (
            <VerificationModal verifyingText="Verifying Email Address..." />
          )}
          {/* VERIFIED MODAL */}
          {isVerified && (
            <Modal
              buttonClasses="w-full"
              buttonText="Proceed"
              titleText="Email Verification Successful!"
              subText="Your email address has been successfully verified, proceed to complete
        your onboarding details."
              onClick={handleProceed}
            />
          )}
        </ModalOverlay>
      )}
    </form>
  );
};

export default OTPInput;
