import { IoNotificationsOutline } from "react-icons/io5";

const VendorNav = () => {
  return (
    <div className="bg-white fixed top-0 w-full flex justify-center pl-40 gap-20  items-center p-2">
      <input
        type="text"
        placeholder="Search"
        className="shadow-md py-[5px] px-4 rounded-md focus:outline-none w-full max-w-md"
      />
      <div className="flex items-center gap-6 cursor-pointer">
        <div className="relative">
          <IoNotificationsOutline size={30} className="text-[#876DFF]" />
          <span className="absolute top-0 right-0.5 bg-red-600 rounded-full w-2.5 h-2.5"></span>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src="/Dhaka.svg"
              alt="user_dp"
              className="h-10 w-10 rounded-full"
            />
            <span className="absolute top-7 right-0 bg-green-600 rounded-full w-2.5 h-2.5"></span>
          </div>
          <div className="hidden md:flex flex-col">
            <h4 className="text-[14px] text-gray-700">S. Motors</h4>
            <p className="text-xs text-gray-700">Provider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorNav;