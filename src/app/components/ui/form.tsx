'use client';
import React, { useState } from 'react';

const CustomForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    altPhone: '',
    service1: '',
    service2: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Change:', name, value);  // Debug input changes
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);  // Debug submit data
    // Here you can add further submit logic like API call
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto text-white max-w-3xl">
      <div className="flex flex-col gap-[40px]">

        <div className='flex flex-row gap-5'>
          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border py-[13px] px-[16px] rounded-[40px] text-white bg-transparent border-white"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border py-[13px] px-[16px] rounded-[40px] text-white bg-transparent border-white"
              required
            />
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          <div className="w-full md:w-1/2">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border py-[13px] px-[16px] rounded-[40px] text-white bg-transparent border-white"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <select
              name="service1"
              value={formData.service1}
              onChange={handleChange}
              className="w-full border py-[13px] px-[16px] rounded-[40px] text-white bg-transparent border-white"
              required
            >
              <option value="" className='text-black' disabled>-- Select a service --</option>
              <option value="web" className='text-black'>Web Development</option>
              <option value="mobile" className='text-black'>Mobile App Development</option>
              <option value="design" className='text-black'>UI/UX Design</option>
              <option value="marketing" className='text-black'>Digital Marketing</option>
            </select>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          <div className="w-full md:w-1/2">
            <input
              type="tel"
              name="altPhone"
              value={formData.altPhone}
              onChange={handleChange}
              placeholder="Enter your alternate phone number"
              className="w-full border py-[13px] px-[16px] rounded-[40px] text-white bg-transparent border-white"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <select
              name="service2"
              value={formData.service2}
              onChange={handleChange}
              className="w-full border py-[13px] px-[16px] rounded-[40px] text-white bg-transparent border-white"
              required
            >
              <option value="" className='text-black' disabled>-- Select a service --</option>
              <option value="Web Development" className='text-black'>Web Development</option>
              <option value="Mobile App Development" className='text-black'>Mobile App Development</option>
              <option value="UI/UX Design" className='text-black'>UI/UX Design</option>
              <option value="UI/UX Design" className='text-black'>UI/UX Design</option>
            </select>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-4'>
        <label htmlFor="projectDetails" className="text-white font-semibold font-poppins text-[16px] leading-[20.41px]">
          Tell us about your project?
        </label>

        <textarea
          id="projectDetails"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          placeholder="Describe your project..."
          className="w-full border py-[13px] px-[16px] rounded-[40px] text-white bg-transparent border-white"
          rows="4"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-main text-white mt-[28px] px-[43px] py-[14px] rounded-[20px] font-poppins font-semibold mb-[16px] block"
      >
        Get 14 Days Free Trial
      </button>
    </form>
  );
};

export default CustomForm;
