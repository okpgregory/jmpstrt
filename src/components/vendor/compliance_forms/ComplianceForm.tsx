import React, { useState } from "react";
import ProgressBar from "../auth/ProgressBar";
import PageTitleTwo from "../shared/PageTitleTwo";
import { Form } from "../ui/form";
import Button from "../shared/Button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { complianceFormSchema } from "./schemas";

const ComplianceForm = () => {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof complianceFormSchema>>({
    resolver: zodResolver(complianceFormSchema),
    defaultValues: {
      businessType: "",
      businessName: "",
      companyRegistrationNumber: "",
      websiteURL: "",
    },
  });

  const onSubmit = (values: z.infer<typeof complianceFormSchema>) => {
    console.log(values);
  };

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
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <>{DisplayedStep()}</>
            <Button
              className="w-full mt-6"
              onClick={handleProceed}
              type={step === StepTitles.length ? "submit" : "button"}
            >
              Proceed
            </Button>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
};

export default ComplianceForm;
