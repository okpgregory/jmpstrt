import { CircleCheck, CircleX } from "lucide-react";
import React from "react";
import { cn } from "../../../lib/utils";

interface PasswordValidatorProps {
  isValid: boolean;
  text: string;
}

const PasswordValidator = ({ isValid, text }: PasswordValidatorProps) => {
  return (
    <p
      className={cn(
        "text-sm font-semibold flex items-center gap-2 leading-tiny",
        {
          "text-green-success": isValid,
          "text-red-error": !isValid,
        }
      )}
    >
      {isValid ? (
        <CircleCheck size={14} className="text-inherit" />
      ) : (
        <CircleX size={14} className="text-inherit" />
      )}
      <span>{text}</span>
    </p>
  );
};

export default PasswordValidator;
