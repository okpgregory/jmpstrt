import React from "react";
import { cn } from "../../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("font-bold py-2 px-4 rounded-lg shadow-sm", {
  variants: {
    variant: {
      default: "bg-orange-1 hover:bg-orange-1/70 text-white",
      links: "bg-white hover:bg-white/70 text-dark-2 border border-gray-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonVariantProps {
  onClick?: (e: React.FormEvent) => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
  variant,
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={cn(buttonVariants({ variant }), className, {
      "bg-orange-1/70": disabled,
    })}
  >
    {children}
  </button>
);

export default Button;
