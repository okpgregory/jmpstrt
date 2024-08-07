import React from "react";

const OrLine: React.FC = () => {
  return (
    <div className="relative mb-12">
      <div className="h-[1px] my-6 w-full bg-gray-3 absolute top-1/2 translate-y-1/2">
        <span className="bg-gray-bg py-1 px-4 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
          or
        </span>
      </div>
    </div>
  );
};

export default OrLine;
