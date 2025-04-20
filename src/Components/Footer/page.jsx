import React from 'react';
import { FaPhone, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare, } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='bg-gradient-to-l from-gray-900 to-gray-500 text-white py-10'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3  gap-8'>
        {/* Links */}
        <div>
          <h2 className='text-lg font-semibold mb-4'>About Us</h2>
          <ul className='space-y-2'>
            <li><a href="#" className='hover:text-gray-400'>Organization</a></li>
            <li><a href="#" className='hover:text-gray-400'>Partners</a></li>
            <li><a href="#" className='hover:text-gray-400'>Clients</a></li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-semibold mb-4'>Useful Links</h2>
          <ul className='space-y-2'>
            <li><a href="#" className='hover:text-gray-400'>Photo Gallery</a></li>
            <li><a href="#" className='hover:text-gray-400'>Our Team</a></li>
            <li><a href="#" className='hover:text-gray-400'>Social Media</a></li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-semibold mb-4'>Contact</h2>
          <a href="#998947722032">
          <p className='flex items-center gap-3'><FaPhone /> +998 (94) 772 20 32</p>
          </a>
          <a href="https://mail.google.com/mail/taiga3877">
          <p className='flex items-center gap-3'><MdEmail /> taiga3877@gmail.com</p>
        </a>
          <p className='flex items-center gap-3'><IoIosTime /> Mon-Sun: 10:00 - 18:00</p>
          <Link to="/locationpage">
          <p className='flex items-center gap-3'><IoLocation /> Tashkent, Index Savdo Majmuasi</p>
        </Link>
        </div>
      </div>

      <div className='border-t border-gray-700 mt-8 pt-6 text-center text-gray-400'>
        <p>© 2025 All rights reserved.</p>
        <div className='flex justify-center gap-6 mt-4 text-xl'>
          <a href="https://www.facebook.com/?locale=ru_RU">
            <FaFacebookSquare className="text-2xl text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://x.com/">
            <FaTwitter className="text-2xl text-gray-600 hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/your.impulss/">
            <FaInstagram className="text-2xl text-gray-600 hover:text-pink-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
