import { CircleAlert, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../../../lib/utils";
import { Input } from "../ui/input";
import FormLabel from "./FormLabel";
// HTMLInputTypeAttribute

interface InputFieldProps {
  label: string;
  type: "text" | "password" | "email" | "url";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  placeholder: string;
  isError?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  name,
  placeholder,
  isError,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const ShowIcon = ({
    shown,
    className,
    size = 16,
    onClick,
  }: {
    shown: boolean;
    className: string;
    size?: number;
    onClick: () => void;
  }) => {
    return (
      <button onClick={onClick}>
        {!shown ? (
          <Eye size={size} className={className} />
        ) : (
          <EyeOff size={size} className={className} />
        )}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-[6px]">
      <FormLabel text={label} htmlFor={name} />
      <div
        className={cn(
          "relative w-full border border-gray-border rounded-lg shadow-sm",
          {
            "border-red-error": isError,
          }
        )}
      >
        <Input
          className="outline-none w-full rounded-lg px-[14px] py-[10px]"
          id={name}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {type === "password" &&
          (!isError ? (
            <ShowIcon
              shown={showPassword}
              className="absolute text-gray-4 right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <CircleAlert
              size={16}
              className="absolute text-red-error right-3 top-1/2 -translate-y-1/2"
            />
          ))}
      </div>
    </div>
  );
};

export default InputField;
