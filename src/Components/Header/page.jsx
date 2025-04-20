import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { CiShoppingBasket } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/image-Photoroom (5).png';
import { MdFavorite } from 'react-icons/md';
import { useLikeStore } from '../../Store/UseLikeStore';
import { useCartStore } from '../../Store/UseCartStore';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { likedItems } = useLikeStore();
  const { cartItems } = useCartStore();


  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Social Icons (Left) */}
        <div className="hidden md:flex gap-4 text-white">
          <a href="https://www.facebook.com/?locale=ru_RU" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="text-2xl hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/your.impulss/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
          </a>
        </div>

        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-6 items-center text-gray-800">
          <Link to="/productpage">
            <IoIosSearch className="text-2xl cursor-pointer" />
          </Link>
          <Link to="/likepage" className="relative text-2xl text-[#c60000c4]">
            <MdFavorite className="text-2xl cursor-pointer" />
            {likedItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse">
                {likedItems.length}
              </span>
            )}
          </Link>
          <Link to="/cartpage" className="relative">
  <CiShoppingBasket className="text-2xl cursor-pointer" />
  {cartItems.length > 0 && (
    <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse">
      {cartItems.length}
    </span>
  )}
</Link>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      <div
  className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <nav className="flex flex-col items-center space-y-4 py-6">
    {[
      { to: '/homepage', label: 'Home' },
      { to: '/productpage', label: 'Product' },
      { to: '/aboutpage', label: 'About Us' },
      { to: '/contactpage', label: 'Contact Us' },
    ].map((link, index) => (
      <NavLink
        key={index}
        to={link.to}
        onClick={() => setIsOpen(false)}
        className="text-gray-800 text-lg font-medium hover:text-blue-500 transition transform hover:scale-105"
      >
        {link.label}
      </NavLink>
    ))}

    {/* Icons in Mobile */}
    <div className="flex gap-6 pt-6 border-t w-full justify-center border-gray-200 mt-4">
      <Link to="/productpage" onClick={() => setIsOpen(false)}>
        <IoIosSearch className="text-2xl text-gray-700 hover:text-black transition" />
      </Link>
      <Link to="/likepage" onClick={() => setIsOpen(false)} className="relative text-2xl text-[#c60000c4]">
        <MdFavorite className="text-2xl cursor-pointer" />
        {likedItems.length > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse">
            {likedItems.length}
          </span>
        )}
      </Link>
      <Link to="/cartpage" className="relative">
  <CiShoppingBasket className="text-2xl cursor-pointer" />
  {cartItems.length > 0 && (
    <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse">
      {cartItems.length}
    </span>
  )}
</Link>

    </div>
  </nav>
</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center space-x-10 py-3 bg-gradient-to-r from-gray-900 to-white">
        {[
          { to: '/homepage', label: 'Home' },
          { to: '/productpage', label: 'Product' },
          { to: '/aboutpage', label: 'About Us' },
          { to: '/contactpage', label: 'Contact Us' },
        ].map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className="relative text-white font-medium transition duration-300 hover:text-blue-400 group"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
