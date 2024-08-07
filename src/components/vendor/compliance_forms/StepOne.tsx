import React, { useState } from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import FormLabel from "../shared/FormLabel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import Dropzone from "../ui/dropzone";
import { MyFile } from "../../../types";
import { useFormContext } from "react-hook-form";

const selectFields = [
  { label: "Business Name", value: "business-name" },
  {
    label: "Private Limited Liability Company",
    value: "private-limited-liability-company",
  },
];

const StepOne = () => {
  const { control } = useFormContext();
  const [file, setFile] = useState<MyFile | null>(null);
  return (
    <div className="space-y-3">
      {/* BUSINESS TYPE */}
      <FormField
        control={control}
        name="businessType"
        render={({ field }) => (
          <FormItem>
            <FormLabel text="Business Type" />
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-white py-[10px] px-[14px] border border-gray-border shadow-sm rounded-lg w-full cursor-pointer text-gray-placeholder">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
              </FormControl>
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
            <FormMessage />
          </FormItem>
        )}
      />

      {/* BUSINESS NAME */}
      <FormField
        control={control}
        name="businessName"
        render={({ field }) => (
          <FormItem>
            <FormLabel text="Business Name" />
            <FormControl>
              <Input
                {...field}
                type="text"
                placeholder="e.g Telcos Media"
                className="bg-white py-[10px] px-[14px] border border-gray-border shadow-sm rounded-lg w-full focus-visible:ring-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* COMPANY REGISTRATION NUMBER */}
      <FormField
        control={control}
        name="companyRegistrationNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel text="Company Registration Number" />
            <FormControl>
              <Input
                {...field}
                type="text"
                placeholder="e.g 6348393"
                className="bg-white py-[10px] px-[14px] border border-gray-border shadow-sm rounded-lg w-full focus-visible:ring-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* REGISTRATION DOCUMENT */}
      <Dropzone file={file} setFile={setFile} />

      {/* WEBSITE URL */}
      <FormField
        control={control}
        name="websiteURL"
        render={({ field }) => (
          <FormItem>
            <FormLabel text="Website URL" />
            <FormControl>
              <div className="flex items-center">
                <span className="border text-sm bg-gray-50 border-gray-border text-gray-placeholder py-[10px] px-[12px] rounded-tl-lg rounded-bl-lg max-w-[69px]">
                  https:
                </span>
                <Input
                  {...field}
                  type="url"
                  placeholder="www.example.com"
                  className="bg-white py-[10px] px-[14px] h-full border border-gray-border shadow-sm rounded-none rounded-tr-lg rounded-br-lg w-full focus-visible:ring-0 self-stretch"
                />
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default StepOne;
