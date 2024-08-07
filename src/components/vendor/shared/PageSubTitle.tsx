import React from "react";

interface PageSubTitleProps {
  children: React.ReactNode;
}

const PageSubTitle: React.FC<PageSubTitleProps> = ({ children }) => {
  return <p className="text-gray-1 text-base leading-[22.4px]">{children}</p>;
};

export default PageSubTitle;
