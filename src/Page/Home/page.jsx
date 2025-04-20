import React from 'react';
import nike from '../../assets/image-Photoroom (2).png'
import auto from '../../assets/photo (9).png';
import sambaback from '../../../public/image.png';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

import samba from '../../assets/adidas samba.png'
import new530 from '../../assets/new balance 530.png'
import new327 from '../../assets/new balance 327.png'
import nikeblack from '../../assets/nike black.png'
import nikerun from '../../assets/nike-run.png'

import comment from '../../assets/img.png'
import comment1 from '../../assets/img (1).png'
import comment2 from '../../assets/img (2).png'
import { Link } from 'react-router-dom';
import { useCartStore } from "../../Store/UseCartStore.js";

const products = [
  { id: 1, image: new530, name: "New Balance 530", brand: "New Balance", price: 125 },
  { id: 2, image: new327, name: "New Balance 327", brand: "New Balance", price: 140 },
  { id: 3, image: nikeblack, name: "Nike Black", brand: "Nike", price: 110 },
  { id: 4, image: samba, name: "Adidas Samba", brand: "Adidas", price: 130 },
  { id: 5, image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/d36a9190-12ff-44db-a37c-c5ea8eeaaf16/men-s-shoes-clothing-accessories.png", name: "Nike Dunk", brand: "Nike", price: 120 },
  { id: 6, image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/c6134e57-788e-4c05-9efe-4b16a1d1c9ae/men-s-shoes-clothing-accessories.png", name: "Nike Blazer", brand: "Nike", price: 110 },
  { id: 7, image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/9a9bf21f-44d0-48c4-9867-1df6d84ed49a/men-s-shoes-clothing-accessories.png", name: "Nike Air Max", brand: "Nike", price: 130 },
  { id: 8, image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/205ad606-a2e0-44af-9d6e-226033f26ef1/men-s-shoes-clothing-accessories.png", name: "Air Jordan 1", brand: "Nike", price: 140 },
  { id: 9, image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/15dc783a-f0e0-4781-8220-628e531e09e7/men-s-shoes-clothing-accessories.png", name: "Nike Air Force 1", brand: "Nike", price: 100 },
  { id: 10, image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/f8cff80a-5e1c-4b68-a79f-b1d4e07d4e6b/zion-4-pf-basketball-shoes-X2d9C7.png", name: "Zion 4 PF", brand: "Nike", price: 250 },
  { id: 11, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a9a19a2-0915-4b69-84e2-02dc3a735c1d/AIR+FORCE+1+SP.png", name: "Nike Air Force 1 SP", brand: "Nike", price: 180 },
  { id: 12, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2862b680-2e59-4bb1-985b-0eb4074c5d3b/NIKE+PEGASUS+TRAIL+5+GTX.png", name: "Nike Pegasus Trail 5 GORE-TEX", brand: "Nike", price: 320 },
  { id: 13, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31a17614-4755-48c0-95ed-2023ebfaaf38/NIKE+INITIATOR.png", name: "Nike Initiator", brand: "Nike", price: 150 },
  { id: 14, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6fc782b0-9c16-49e2-b6bf-88aa015e974e/AIR+JORDAN+1+LOW.png", name: "Air Jordan 1 Low", brand: "Nike", price: 210 },
  { id: 15, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3bbbc21-03a4-46c6-adc1-3066a1ea7e96/NIKE+CALM+SLIDE.png", name: "Nike Calm", brand: "Nike", price: 90 },
  { id: 16, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/52e47696-f000-4bb9-a6d3-41aa19220379/NIKE+SB+DUNK+LOW+PRO.png", name: "Nike SB Dunk Low Pro", brand: "Nike", price: 280 },
  { id: 17, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3874a4be-3556-44e7-ac29-7a97aee7a1c3/GIANNIS+IMMORTALITY+4+EP.png", name: "Giannis Immortality 4 EP", brand: "Nike", price: 140 },
  { id: 18, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61fde680-cfc0-4ab5-8f80-bf66c1538245/AIR+MAX+2013.png", name: "Nike Air Max 2013", brand: "Nike", price: 350 },
  { id: 19, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8312e20d-5b44-4b90-a355-1f8397f74d1a/AIR+ZOOM+PEGASUS+41.png", name: "Nike Pegasus 41", brand: "Nike", price: 300 },
  { id: 20, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/202d540b-5aa9-4d60-9c9a-86475b81d34d/KILLSHOT+2+LEATHER.png", name: "Nike Killshot 2 Leather", brand: "Nike", price: 170 }
];

const product2 = [
  {
    id: 21,
    brand: "Nike Invincible",
    model: "Invincible 3",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c7ec36b-06e3-4734-820b-a78f30bc298a/ZOOMX+INVINCIBLE+RUN+3+WIDE.png",
    price: 290
  },
  {
    id: 22,
    brand: "Nike Zion",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/f8cff80a-5e1c-4b68-a79f-b1d4e07d4e6b/zion-4-pf-basketball-shoes-X2d9C7.png",
    price: 225
  },
  {
    id: 23,
    brand: "Nike Dunk",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/3f8c5b05-6d0f-49f4-b472-7425357e6a52/dunk-low-retro-shoes-mh4Q5d.png",
    price: 180
  },
  {
    id: 24,
    brand: "Nike Sabrina",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/d4941cf1-0a49-48ad-8b18-507bb9f1ba1b/sabrina-2-stronger-than-gold-ep-basketball-shoes-sRw62Z.png",
    price: 330
  },
  {
    id: 5,
    brand: "Nike Tatum",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/0a070d72-8442-415e-bba8-41e0b5ca86b3/tatum-3-pf-basketball-shoes-cVsscl.png",
    price: 210
  },
  {
    id: 26,
    brand: "Nike SB Force",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3ca0e8ff-9564-46b0-a808-072cc0e8053a/NIKE+SB+FORCE+58.png",
    price: 165
  },
  {
    id: 27,
    brand: "Nike Court Vision",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a995b23a-7e1a-4a0d-91b7-dd418e9f4e74/NIKE+COURT+VISION+MID+NN.png",
    price: 190
  },
  {
    id: 28,
    brand: "Nike ZoomX",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dafc5576-7bcd-4db7-ba9d-f2d9acc42ba8/NIKE+ZOOMX+INVINCIBLE+RUN+FK+3.png",
    price: 400
  }
];



const conit = [
  {
    img: comment,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae?',
    comment: 'Carolyn Banks, Miami'
  },
  {
    img: comment1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae?',
    comment: 'Carolyn Banks, Miami'
  },
  {
    img: comment2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae?',
    comment: 'Carolyn Banks, Miami'
  }
]







const HomePage = ({ isExist, isExistCart }) => {
  const { cartItems, addToCart, removeFromCart } = useCartStore();

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Hero Section */}
      <div className="bg-[#E7E8E9] w-full h-auto md:h-[800px] flex flex-col md:flex-row items-center p-6 md:p-[30px] relative">
        <div className="md:ml-[110px] text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl p-1 md:p-[3px]">Fantastic Features That</h1>
          <h1 className="font-bold text-3xl md:text-5xl p-1 md:p-[3px]">Makes You Look Cool</h1>
          <p className="p-1 md:p-[3px]">Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim.</p>
          <p className="p-1 md:p-[3px]">Nullam pulvinar felis at metus.</p>
          <br />
          <Link to={'/productpage'}>
            <button className="p-2 w-[160px] h-[50px] bg-[#F22735] rounded-[10px] font-bold text-white">
              View All Items
            </button>
          </Link>
        </div>
        <div className="md:absolute md:right-[-90px] mt-6 md:mt-0">
          <img src={nike} alt="Nike Product" className="w-full " />
        </div>
      </div>

      {/* Info & Discount Section */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-[1300px] h-auto md:h-[500px] rounded-lg shadow-lg bg-white p-6 mx-auto my-8">
        {/* Левая часть */}
        <div className="w-full md:w-1/2 h-auto p-4">
          <div className="flex items-center gap-4">
            <img src={auto} alt="Person" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-lg font-bold">Dorothy Holland</h1>
              <p className="text-sm font-normal text-gray-500">Chief Marketing Officer</p>
            </div>
          </div>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl mt-2 leading-tight">
            Aliquam Faucibus <br /> Odionecom.
          </h1>
          <p className="mt-4 text-gray-700">
            Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet.
          </p>
          <p className="mt-2 text-gray-700">
            Namaki duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna.
          </p>
        </div>

        {/* Правая часть */}
        <div
          className="bg-cover w-full md:w-1/2 h-[300px] md:h-[500px] rounded-lg flex items-center justify-start p-6 text-white"
          style={{ backgroundImage: `url(${sambaback})` }}
        >
          <div>
            <h1 className="font-bold text-3xl md:text-5xl p-2">25% Discount</h1>
            <p className="p-2">Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.</p>
            <p className="p-2">Ut imperdiet et leo in vulputate.</p>
            <Link to={'/contactpage'}>
              <button className="mt-4 p-2 w-full md:w-[160px] h-[50px] bg-[#F22735] rounded-lg font-bold text-white">
                Get Discount
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-6xl text-center'>Sneakers Models</h1>
        <br />
        <p className='font-bold text-center'>Duis vestibulum elit vel neque pharetra</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-6">
  {products.map((product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);

    return (
      <div
        key={product.id}
        className="bg-white shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105"
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
        </Link>
        <p className="text-gray-700 text-lg flex items-center justify-between">
          ${product.price}

        </p>
        <button
          onClick={() =>
            isInCart ? removeFromCart(product.id) : addToCart(product)
          }
          className={`mt-3 w-full py-2 ${
            isInCart ? 'bg-gray-400 hover:bg-gray-500' : 'bg-red-500 hover:bg-red-600'
          } text-white font-bold rounded-lg transition duration-200`}
        >
          {isInCart ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    );
  })}
</div>

      </div>
      <br />
      <br />
      <br />
      <div
        className="bg-cover bg-center rounded-lg flex flex-col md:flex-row items-center justify-around mx-auto shadow-lg max-w-4xl w-full min-h-[400px] p-6"
        style={{ backgroundImage: `url(${nikerun})` }}
      >
        {/* Левая часть */}
        <div className="text-center text-white md:w-1/2">
          <h1 className="text-[120px] md:text-[170px] font-bold leading-none">90%</h1>
          <h2 className="text-lg md:text-xl">Lorem ipsum dolor sit amet.</h2>
        </div>

        {/* Правая часть */}
        <div className="text-white md:w-1/2 text-center md:text-left p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Offer Of The Month</h1>
          <p className="text-sm md:text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque quaerat numquam.
          </p>
          <Link to={'/contactpage'}>
            <button className="mt-4 p-3 w-full md:w-[160px] h-[50px] bg-[#F22735] rounded-lg font-bold text-white">
              Get Offer Today
            </button>
          </Link>
        </div>
      </div>

      <br />
      <br />
      <br />
      <h1 className='text-4xl text-center font-bold p-[8px]'>New Products Arrival</h1>
      <p className='text-[18px] font-light text-center p-[8px]'>Duis vestibulum elit vel neque pharetra</p>'
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-wrap lg:grid-cols-4 gap-6">
  {product2.map((product) => {
    const isInCart = cartItems.some((item) => item.id === product.id); // вычисляем, есть ли товар в корзине

    return (
      <div
        key={product.id}
        className="bg-white shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105"
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-3">{product.brand}</h2>
        </Link>
        <p className="text-gray-700 text-lg flex items-center justify-between">
          ${product.price}
        </p>
        <button
          onClick={() =>
            isInCart ? removeFromCart(product.id) : addToCart(product)
          }
          className={`mt-3 w-full py-2 ${
            isInCart ? 'bg-gray-400 hover:bg-gray-500' : 'bg-red-500 hover:bg-red-600'
          } text-white font-bold rounded-lg transition duration-200`}
        >
          {isInCart ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    );
  })}
</div>

      <br />
      <br />
      <h1 className="text-3xl md:text-5xl font-bold text-center p-4">
        Our Grateful Customers
      </h1>
      <p className="text-center p-4 text-sm md:text-base">
        Duis vestibulum elit vel neque pharetra
      </p>

      {/* Контейнер отзывов */}
      <div className="max-w-6xl w-full mx-auto grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {conit.map((otzv) => (
          <div
            key={otzv.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <img src={otzv.img} alt="Customer" className="m-auto w-20 h-20 rounded-full" />
            <h1 className="text-lg font-bold mt-4">{otzv.title}</h1>
            <p className="text-orange-500 mt-2">{otzv.comment}</p>
          </div>
        ))}
      </div>


    </div>

  );
};

export default HomePage;
