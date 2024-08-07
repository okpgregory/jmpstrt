import React from "react";
import AuthPrompt from "../../components/vendor/auth/AuthPrompt";
import OTPInput from "../../components/vendor/auth/OTPInput";
import PageSubTitle from "../../components/vendor/shared/PageSubTitle";
import PageTitle from "../../components/vendor/shared/PageTitle";
import AuthLayout from "./layouts/AuthLayout";
import { useLocation } from "react-router-dom";
import { censorEmail } from "../../lib/utils";

const VendorEmailVerification: React.FC = () => {
  const location = useLocation();

  return (
    <AuthLayout>
      <div className="screen">
        <div className="flex flex-col items-center gap-7">
          <img src="/svgs/email.svg" alt="email" />
          <div className="flex flex-col items-center">
            <PageTitle text="Email Verification" />
            <PageSubTitle>
              Please, enter the code sent to{" "}
              <span className="text-blue-link2">
                {(location.state.email && censorEmail(location.state.email)) ||
                  ""}
              </span>
            </PageSubTitle>
          </div>
          <OTPInput />
          <AuthPrompt
            text="Didn't receive the email?"
            link="#"
            linkText="Click to Resend"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default VendorEmailVerification;
