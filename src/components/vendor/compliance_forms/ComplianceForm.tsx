import React, { createContext, useState } from "react";
import ProgressBar from "../auth/ProgressBar";
import Button from "../shared/Button";
import PageTitleTwo from "../shared/PageTitleTwo";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { FormContextType } from "../../../types";

export const FormContext = createContext({} as FormContextType);

const ComplianceForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    StepOne: {
      businessType: "",
      businessName: "",
      companyRegistrationNumber: "",
      websiteURL: "",
    },
    StepTwo: {
      businessOwnerFullName: "",
      contactAddress: "",
      nationalIdentityNumber: "",
      phoneNumber: "",
      emailAddress: "",
    },
    StepThree: {
      bankName: "",
      bankAccountNumber: "",
    },
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    step: string
  ) => {
    const { name, value } = e.target;
    switch (step) {
      case "StepOne":
        setFormData({
          ...formData,
          StepOne: { ...formData.StepOne, [name]: value },
        });
        break;
      case "StepTwo":
        setFormData({
          ...formData,
          StepTwo: { ...formData.StepTwo, [name]: value },
        });
        break;
      case "StepThree":
        setFormData({
          ...formData,
          StepThree: { ...formData.StepThree, [name]: value },
        });
        break;
      default:
        break;
    }
  };

  const onSubmit = (e: React.FormEvent) => {};

  const StepTitles = [
    "Business Information",
    "Business Owner's Information",
    "Business Bank Information",
  ];

  const handleProceed = () => {
    if (step < StepTitles.length) {
      setStep((currentstep) => currentstep + 1);
    }
  };

  const DisplayedStep = () => {
    if (step === 1) {
      return <StepOne />;
    } else if (step === 2) {
      return <StepTwo />;
    } else if (step === 3) {
      return <StepThree />;
    }
  };

  return (
    <div className="max-w-[445px]">
      <div className="space-y-3 my-3 w-full">
        <ProgressBar
          step={`Step ${1}`}
          progress={step === 1 ? "1/3" : step === 2 ? "2/3" : "3/3"}
        />
        <PageTitleTwo text={StepTitles[step - 1]} />
      </div>
      <FormContext.Provider value={{ formData, handleFormChange }}>
        <form onSubmit={onSubmit}>
          <>{DisplayedStep()}</>
          <Button
            className="w-full mt-6"
            onClick={handleProceed}
            type={step === StepTitles.length ? "submit" : "button"}
          >
            Proceed
          </Button>
        </form>
      </FormContext.Provider>
    </div>
  );
};

export default ComplianceForm;
