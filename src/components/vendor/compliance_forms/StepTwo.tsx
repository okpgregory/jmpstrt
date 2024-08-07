import { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { MyFile } from "../../../types";
import InputField from "../shared/InputField";
import Dropzone from "../ui/dropzone";
import { FormContext } from "./ComplianceForm";

const FORMSTEP = "StepTwo";

const StepTwo = () => {
  const [file, setFile] = useState<MyFile | null>(null);
  const { formData, handleFormChange } = useContext(FormContext);
  return (
    <div className="space-y-3">
      {/* BUSINESS OWNER FULL NAME */}
      <InputField
        type="text"
        placeholder="e.g Jordan Smith"
        label="Business Owner Full Name"
        name="businessOwnerFullName"
        onChange={(e) => handleFormChange(e, FORMSTEP)}
        value={formData[FORMSTEP].businessOwnerFullName}
      />

      {/* CONTACT ADDRESS */}
      <InputField
        type="text"
        placeholder="e.g Jagagban street, Victoria Island, Lagos"
        label="Contact Address"
        name="contactAddress"
        onChange={(e) => handleFormChange(e, FORMSTEP)}
        value={formData[FORMSTEP].contactAddress}
      />

      {/* NATIONAL IDENTITY NUMBER (NIN) */}
      <InputField
        type="text"
        placeholder="e.g 63483932341"
        label="National Identity Number (NIN)"
        name="nationalIdentityNumber"
        onChange={(e) => handleFormChange(e, FORMSTEP)}
        value={formData[FORMSTEP].nationalIdentityNumber}
      />

      {/* UPLOAD NIN */}
      <Dropzone
        file={file}
        setFile={setFile}
        isImageIncluded={true}
        label="Upload NIN"
      />

      {/* PHONE NUMBER */}
      <PhoneInput
        defaultCountry="NG"
        placeholder="e.g 70738479374"
        international
        withCountryCallingCode
        value={formData[FORMSTEP].phoneNumber}
        onChange={(value) => console.log(value)}
        className="bg-white py-[10px] px-[14px] h-full border border-gray-border shadow-sm rounded-none rounded-tr-lg rounded-br-lg w-full focus-visible:ring-0 self-stretch"
      />

      {/* EMAIL ADDRESS */}
      <InputField
        type="email"
        placeholder="e.g owner@example.com"
        label="Email Address"
        name="emailAddress"
        onChange={(e) => handleFormChange(e, FORMSTEP)}
        value={formData[FORMSTEP].emailAddress}
      />
    </div>
  );
};

export default StepTwo;
