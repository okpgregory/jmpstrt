export interface MyFile extends File {
  preview?: string;
}

type FormDataType = {
  StepOne: {
    businessType: string;
    businessName: string;
    companyRegistrationNumber: string;
    websiteURL: string;
  };
  StepTwo: {
    businessOwnerFullName: string;
    contactAddress: string;
    nationalIdentityNumber: string;
    phoneNumber: string;
    emailAddress: string;
  };
  StepThree: {
    bankName: string;
    bankAccountNumber: string;
  };
};

export interface FormContextType {
  formData: FormDataType;
  handleFormChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    step: string
  ) => void;
}
