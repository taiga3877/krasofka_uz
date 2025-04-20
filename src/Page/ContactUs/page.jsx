import React, { useState } from 'react'
import Contactruning from '../../assets/image copy 2.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import registerimg from '../../assets/img (6).png'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';





const product = [
  {
    id:1,
    icon: <FaLocationDot size={48} />,
    title: "Our Location",
    p: "Tashkent, Index Savdo Majmuasi"
  },
  {
    id:2,
    icon: <MdOutlineAccessTime size={48} />,
    title: "Operating Time",
    p: "Mon-Sun: 10:00 - 18:00"
  },
  {
    id:3,
    icon: <MdEmail size={48} />,
    title: "Our Email",
    p: "taiga3877@gmail.com"
  },
  {
    id:4,
    icon: <MdOutlinePhone size={48} />,
    title: "Call Us",
    p: "+998 (94) 772 20 32"
  }
]


const ContactUs = () => {
  const SendMessage = async (event, setLoading, setButtonText) => {
    event.preventDefault();
    setLoading(true);
    setButtonText("Sending...");
  
    const token = '8008921149:AAFYLw0qJ0G6vUxg1K-VJdRft-H6H6m1rnI';
    const chat_id = 6365725666;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
    const name = event.target.name.value;
    const email = event.target.email.value;
    const topic = event.target.topic.value;
    const message = event.target.message.value;
  
    const fullMessage = `📬 New Feedback:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Topic: ${topic}\n💬 Message: ${message}`;
  
    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: fullMessage,
      });
  
      // Симулируем задержку на 7 секунд
      await new Promise((resolve) => setTimeout(resolve, 7000));
  
      toast.success("Mission complete ✅", {
        position: "top-right",
        autoClose: 3000,
      });
      
      document.getElementById("myForm").reset();
    } catch (error) {
      console.error('Mission failed ❌', error);
    } finally {
      setLoading(false);
      setButtonText("Send Message");
    }
  };
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState("Send Message");

  return (
    <div>
      <div className='bg-cover bg-center
      h-[554px]
      '
        style={{ backgroundImage: `url(${Contactruning})` }}
      >
        <div className='flex items-center justify-center h-[554px]'>

          <div
            className="bg-black/50  m-auto p-8 rounded-xl text-white text-center max-w-2xl">

            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
              Contact Us
            </h1>
            <p className="mb-2">Duis vestibulum elit vel neque pharetra vulputate.</p>
            <p>Duis rutrum non risus in imperdiet.</p>
          </div>
        </div>
      </div>
      <br />
      <div className='w-full max-w-[1440px] m-auto py-16 px-4 flex flex-wrap justify-around gap-y-12'>
      {product.map((product, index) => {
  const content = (
    <div
      className="w-[220px] h-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center p-4"
    >
      {product.icon}
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm">{product.p}</p>
    </div>
  );

  switch (product.id) {
    case 1:
      return (
        <Link to="/locationpage" key={index}>
          {content}
        </Link>
      );
    case 3:
      return (
        <a href="https://mail.google.com/mail/taiga3877" key={index}>
          {content}
        </a>
      );
      case 4:
      return (
        <a href="#998947722032" key={index}>
          {content}
        </a>
      );
    default:
      return <div key={index}>{content}</div>;
  }
})}

      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={registerimg} alt="Feedback" className="rounded-xl  max-w-full h-auto" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl transition-all duration-300">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">We Value Your Feedback</h1>
          <p className="text-gray-500 mb-8">Please fill out the form below and we’ll be in touch soon.</p>

          <form
        onSubmit={(e) => SendMessage(e, setLoading, setButtonText)}
        id="myForm"
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full h-[48px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full h-[48px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
        </div>

        {/* Topic */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Topic *</label>
          <input
            type="text"
            id="topic"
            name="topic"
            required
            className="w-full h-[48px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full h-[120px] px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 resize-none transition"
          ></textarea>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 active:scale-95 transition-all flex items-center gap-2"
            disabled={loading}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"
                />
              </svg>
            )}
            {buttonText}
          </button>
        </div>
      </form>
        </div>
      </div>
      <ToastContainer />

    </div>
  )
}

export default ContactUs