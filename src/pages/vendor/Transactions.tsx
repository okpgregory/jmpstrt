import { LucideDownloadCloud } from 'lucide-react';
import { IoSearchOutline } from "react-icons/io5";
import React from 'react';
import { MdFilterList } from "react-icons/md";
const VendorTransactions: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      serialNumber: '1',
      serviceId: 'SVC001',
      orderDate: '27 Aug 2020 3:08 PM',
      customerName: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      services: 'Brand New Toyota Camry, 2016',
      price: '₦12,174,700.00',
      payment: 'One Time',
      status: 'Pending',
    },
    {
      key: '2',
      serialNumber: '2',
      serviceId: 'SVC001',
      orderDate: '27 Aug 2020 3:08 PM',
      customerName: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      services: 'Brand New Toyota Camry, 2016',
      price: '₦12,174,700.00',
      payment: 'One Time',
      status: 'Completed',
    },
   
  ];

  return (

<main className="container mt-12 py-8 pl-4 pr-28 h-full bg-[#f3f1ff] ">
  <div className='mb-4'>
    <h1 className="text-[32px] font-bold">Transactions</h1>
    <p className='text-[#424242]'>View all your customer payments here</p>
  </div>

  <div className='bg-white border p-2 rounded-lg py-6'>
    <div>
      <div className="flex justify-between pr- mb-4">

        <div className="relative">
          <input
            type="text"
            placeholder="Search by Service ID"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none w-[56rem]"
          />
          <IoSearchOutline
            className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"
            size="20"
          />
        </div>

        <div className='flex justify-center gap-2'>
          <button className="flex items-center space-x-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-[#f3f1ff] focus:outline-none">
            <MdFilterList size="20" className="text-gray-600" />
            <span>Filters</span>
          </button>

          <button className="flex items-center space-x-2 py-2 px-4 border hover:bg-[#f3f1ff]  rounded-md  focus:outline-none">
            <LucideDownloadCloud size="20" className="text-gray-600" />
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>

    {/* Table Container with Horizontal Scrolling */}
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white whitespace-nowrap">
        <thead>
          <tr className='text-[16px] font-light text-gray-700'>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">S/N</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Service ID</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Order Date</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Customer Name</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Email Address</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Phone Number</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Services</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Price</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Payment</th>
            <th className="py-4 px-5 bg-[#f3f1ff] font-semibold text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item) => (
            <tr key={item.key} className="border-b text-[16px] font-light text-gray-700">
              <td className="py-4 px-5">{item.serialNumber}</td>
              <td className="py-4 px-5">{item.serviceId}</td>
              <td className="py-4 px-5">{item.orderDate}</td>
              <td className="py-4 px-5">{item.customerName}</td>
              <td className="py-4 px-5">{item.email}</td>
              <td className="py-4 px-5">{item.phoneNumber}</td>
              <td className="py-4 px-5">{item.services}</td>
              <td className="py-4 px-5">{item.price}</td>
              <td className="py-4 px-5">{item.payment}</td>
              <td className="py-4 px-5">
                <span className="inline-flex items-center">
                  <span
                    className={`mr-2 w-2.5 h-2.5 rounded-full ${
                      item.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  ></span>
                  <span
                    className={`${
                      item.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                    } font-semibold`}
                  >
                    {item.status}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</main>


  );
};

export default VendorTransactions;
