import React from "react";

interface PageSubTitleProps {
  children: React.ReactNode;
}

const PageSubTitleTwo: React.FC<PageSubTitleProps> = ({ children }) => {
  return (
    <p className="text-gray-2 text-sm leading-[19.6px] text-center">
      {children}
    </p>
  );
};

export default PageSubTitleTwo;
