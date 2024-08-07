import React from "react";

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <h1 className="text-[32px] font-bold leading-[51.2px] text-center text-dark-1]">
      {text}
    </h1>
  );
};

export default PageTitle;
