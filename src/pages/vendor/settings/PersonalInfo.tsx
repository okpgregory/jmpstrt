import React from 'react'

const PersonalInfo = () => {
  return (
  <main className='bg-[#f3f1ff] flex flex-col gap-4'>
      <div className='p-4 bg-white rounded-md'>
      <div className="mb-3">
        <h1 className="text-[18px] font-bold rounded-lg">Personal Information</h1>
        <p className="text-[#424242]">Manage your personal information on Jomp</p>
      </div>
      </div>
      <div className='p-4 bg-white rounded-md'>
      <div className="mb-3">
        <h1 className="text-[18px] font-bold rounded-lg">Business Information</h1>
        <p className="text-[#424242]">Manage your Business information on Jomp</p>
      </div>
      </div>
      <div className='p-4 bg-white rounded-md'>
      <div className="mb-3">
        <h1 className="text-[18px] font-bold rounded-lg">Bank Information</h1>
        <p className="text-[#424242]">Manage your Bank information on Jomp</p>
      </div>
      </div>
  </main>
  )
}

export default PersonalInfo
