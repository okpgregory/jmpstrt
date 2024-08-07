import React from "react";
import { cn } from "../../../lib/utils";

interface PageTitleProps {
  text: string;
  className?: string;
}

const PageTitleTwo: React.FC<PageTitleProps> = ({ text, className }) => {
  return (
    <h2
      className={cn(
        "text-[20px] font-bold leading-[32px] text-dark-1]",
        className
      )}
    >
      {text}
    </h2>
  );
};

export default PageTitleTwo;
