import React from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useFormContext } from "react-hook-form";
import FormLabel from "../shared/FormLabel";
import { Input } from "../ui/input";
import Dropzone from "../ui/dropzone";

const StepTwo = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-3">
      {/* BUSINESS TYPE */}
      <FormField
        control={control}
        name=""
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
      {/* <Dropzone file={file} setFile={setFile} /> */}

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

export default StepTwo;
