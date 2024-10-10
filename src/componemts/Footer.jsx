import React from 'react';
import logo from '../assets/images.png';
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 flex items-center justify-center md:justify-start">
          <a href="/" target="_blank" className="flex items-center">
            <img src={logo} className="mr-4 h-10" alt="Leave Management System Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Leave Management System
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h3>
            <ul>
              <li className="mb-4">
                <a href="/leavepol" className="text-gray-600 hover:underline dark:text-gray-400">Leave Policy</a>
              </li>
              <li>
                <a href="/handbook" rel="nofollow" className="text-gray-600 hover:underline dark:text-gray-400">Employee Handbook</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h3>
            <ul>
              <li className="mb-4">
                <a href="mailto:info@leavemanagement.com" className="text-gray-600 hover:underline dark:text-gray-400">info@leavemanagement.com</a>
              </li>
              <li>
                <a href="tel:+91 1234567890" className="text-gray-600 hover:underline dark:text-gray-400">+1 123 456 7890</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Media</h3>
            <div className="flex gap-3 text-3xl cursor-pointer">
              <FaInstagram />
              <CiFacebook />
              <FaXTwitter />
              <BiLogoGmail />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="bg-black sm:flex sm:items-center sm:justify-between flex flex-col items-center">
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Leave Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
