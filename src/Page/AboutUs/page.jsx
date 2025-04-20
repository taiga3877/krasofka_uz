import React from 'react';
import Aboutimg from '../../assets/image.png';
import { GiTriangleTarget } from "react-icons/gi";
import { SiCssdesignawards } from "react-icons/si";
import { BsBrowserEdge } from "react-icons/bs";
import { GiEcology } from "react-icons/gi";
import Aboutruning from '../../assets/image copy.png'
import avtor1 from '../../assets/img (3).png'
import avtor2 from '../../assets/img (4).png'
import avtor3 from '../../assets/img (5).png'
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import nikerun from '../../assets/nike-run.png'

const data = [
  {
    img: avtor1,
    h1: "MARLON MCDONALD",
    p: "Product Manager"
  },
  {
    img: avtor2,
    h1: "REBECCA GRAND",
    p: "Graphic Designer"
  },
  {
    img: avtor3,
    h1: "JOHN BAILEY",
    p: "Head Of Marketing"
  }
]
const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${Aboutimg})` }}
      >
        <div className="w-full h-auto min-h-[400px] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="bg-black/50 p-6 sm:p-8 rounded-xl text-white text-center max-w-2xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 sm:mb-6">
              About Us
            </h1>
            <p className="mb-2 text-sm sm:text-base">
              Duis vestibulum elit vel neque pharetra vulputate.
            </p>
            <p className="text-sm sm:text-base">
              Duis rutrum non risus in imperdiet.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] m-auto py-16 px-4 flex flex-wrap justify-around gap-y-12">
        {/* Карточка 1 */}
        <div className="w-[220px] h-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center p-4">
          <GiTriangleTarget size={48} className="text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Superior Accuracy</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Карточка 2 */}
        <div className="w-[220px] h-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center p-4">
          <SiCssdesignawards size={48} className="text-purple-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Awards</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Карточка 3 */}
        <div className="w-[220px] h-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center p-4">
          <GiEcology size={48} className="text-green-500 mb-4 " />
          <h2 className="text-xl font-semibold mb-2">Eco Friendly</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Карточка 4 */}
        <div className="w-[220px] h-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center p-4">
          <BsBrowserEdge size={48} className="text-indigo-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Browser Compatible</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-10'>
        <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>

          {/* Text Block */}
          <div className='text-center lg:text-left'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg tracking-tight animate-fade-in-up">
              New Arrivals Every Week
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias voluptates hic aliquam dolore doloremque. Atque ipsa dignissimos explicabo provident.
            </p>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias voluptates hic aliquam dolore doloremque. Atque ipsa dignissimos explicabo provident.
            </p>
            <div className="mt-6">
              <button className="h-[56px] w-[180px] bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
                See All Models
              </button>
            </div>
          </div>

          {/* Image */}
          <div className='flex justify-center lg:justify-end'>
            <img
              className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[615px] h-auto'
              src={Aboutruning}
              alt="Running Model"
            />
          </div>

        </div>
      </div>

      <br />
      <br />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 drop-shadow-lg tracking-tight animate-fade-in-up">Our Incredible Team</h1>
      <br />
      <hr className='text-center m-auto w-[700px] h-[4px] bg-red-500 border-none' />
      <br />
      <br />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
          {data.map((otziv, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg w-full sm:w-[300px] md:w-[320px] lg:w-[350px] h-[400px] transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <img
                className="w-full h-[220px] object-cover rounded-t-2xl"
                src={otziv.img}
                alt=""
              />
              <div className="p-5 text-center">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">{otziv.h1}</h1>
                <p className="text-gray-600 text-sm">{otziv.p}</p>

                <div className="flex justify-center gap-6 mt-4 flex-wrap">
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
            </div>
          ))}
        </div>
      </div>

      <div
        className="bg-cover bg-center rounded-lg flex flex-col md:flex-row items-center justify-around mx-auto shadow-lg min-h-[400px] p-6 w-full max-w-7xl"
        style={{ backgroundImage: `url(${nikerun})` }}
      >
        {/* Левая часть */}
        <div className="text-center text-white md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-[80px] sm:text-[100px] md:text-[140px] font-bold leading-none">90%</h1>
          <h2 className="text-base sm:text-lg md:text-xl">Lorem ipsum dolor sit amet.</h2>
        </div>

        {/* Правая часть */}
        <div className="text-white md:w-1/2 text-center md:text-left p-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">Offer Of The Month</h1>
          <p className="text-sm sm:text-base md:text-lg mt-2 max-w-xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque quaerat numquam.
          </p>
          <div className="mt-4">
            <button className="h-[56px] w-[180px] bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
              Get Offer Today
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
