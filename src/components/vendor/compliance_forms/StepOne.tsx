import { useContext, useState } from "react";
import { MyFile } from "../../../types";
import FormLabel from "../shared/FormLabel";
import InputField from "../shared/InputField";
import Dropzone from "../ui/dropzone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormContext } from "./ComplianceForm";

const selectFields = [
  { label: "Business Name", value: "business-name" },
  {
    label: "Private Limited Liability Company",
    value: "private-limited-liability-company",
  },
];

const FORMSTEP = "StepOne";

const StepOne = () => {
  const [file, setFile] = useState<MyFile | null>(null);
  const { formData, handleFormChange } = useContext(FormContext);
  return (
    <div className="space-y-3">
      {/* BUSINESS TYPE */}
      <div>
        <FormLabel text="Business Type" />
        <Select
          onValueChange={(e) => console.log(e)}
          defaultValue={formData[FORMSTEP].businessName}
          name="businessType"
        >
          <SelectTrigger className="bg-white py-[10px] px-[14px] border border-gray-border shadow-sm rounded-lg w-full cursor-pointer text-gray-placeholder">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-white py-2">
            {selectFields.map((field) => (
              <SelectItem
                key={field.value}
                value={field.value}
                className="hover:bg-gray-authBg"
              >
                {field.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* BUSINESS NAME */}
      <InputField
        label="Business Name"
        name="businessName"
        onChange={(e) => handleFormChange(e, FORMSTEP)}
        value={formData[FORMSTEP].businessName}
        type="text"
        placeholder="e.g Telcos Media"
      />

      {/* COMPANY REGISTRATION NUMBER */}
      <InputField
        type="text"
        placeholder="e.g 6348393"
        label="Company Registration Number"
        name="companyRegistrationNumber"
        onChange={(e) => handleFormChange(e, FORMSTEP)}
        value={formData[FORMSTEP].companyRegistrationNumber}
      />

      {/* REGISTRATION DOCUMENT */}
      <Dropzone file={file} setFile={setFile} label="Registration Document" />

      {/* WEBSITE URL */}
      <div className="flex items-center">
        <span className="border text-sm bg-gray-50 border-gray-border text-gray-placeholder py-[10px] px-[12px] rounded-tl-lg rounded-bl-lg max-w-[69px]">
          https:
        </span>
        <InputField
          type="url"
          placeholder="www.example.com"
          label="Website URL"
          name="websiteURL"
          onChange={(e) => handleFormChange(e, FORMSTEP)}
          value={formData[FORMSTEP].websiteURL}
        />
      </div>
    </div>
  );
};

export default StepOne;
