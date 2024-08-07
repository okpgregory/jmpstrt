import { z } from "zod";

export const stepOneFormSchema = z.object({
  businessType: z.string().min(1, { message: "Business type is required" }),
  businessName: z.string().min(1, { message: "Business name is required" }),
  companyRegistrationNumber: z.string().min(1, {
    message: "Company registration number is required",
  }),
  websiteURL: z.string().url({ message: "Invalid URL" }).min(1, {
    message: "Website URL number is required",
  }),
});

export const stepTwoFormSchema = z.object({
  businessOwnerFullName: z
    .string()
    .min(1, { message: "Business owner full name is required" }),
  contactAddress: z.string().min(1, { message: "Contact address is required" }),
  nationalIdentityNumber: z
    .string()
    .min(1, {
      message: "NIN is required",
    })
    .max(11, { message: "NIN must be 11 digits long" }),
  phoneNumber: z.string().url({ message: "Invalid URL" }).min(1, {
    message: "Website URL number is required",
  }),
  emailAddress: z.string().url({ message: "Invalid URL" }).min(1, {
    message: "Website URL number is required",
  }),
});

export const stepThreeFormSchema = z.object({
  businessType: z.string().min(1, { message: "Business type is required" }),
  businessName: z.string().min(1, { message: "Business name is required" }),
  companyRegistrationNumber: z.string().min(1, {
    message: "Company registration number is required",
  }),
  websiteURL: z.string().url({ message: "Invalid URL" }).min(1, {
    message: "Website URL number is required",
  }),
});

export const complianceFormSchema = z.object({
  ...stepOneFormSchema.shape,
  ...stepTwoFormSchema.shape,
  ...stepThreeFormSchema.shape,
});
