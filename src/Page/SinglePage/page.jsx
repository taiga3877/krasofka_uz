import React from 'react';
import { useParams } from 'react-router-dom';
import samba from '../../assets/adidas samba.png'
import new530 from '../../assets/new balance 530.png'
import new327 from '../../assets/new balance 327.png'
import nikeblack from '../../assets/nike black.png'
import { motion } from "framer-motion";
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useLikeStore } from '../../Store/UseLikeStore.js';

const products = [
  {
    id: 1,
    image: new530,
    name: "New Balance 530",
    brand: "New Balance",
    price: 125,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh and synthetic",
    cushioning: "ABZORB",
    purpose: "Lifestyle",
    color: "Silver/White",
    weight: "Light",
    ventilation: "Good"
  },
  {
    id: 2,
    image: new327,
    name: "New Balance 327",
    brand: "New Balance",
    price: 140,
    size: "39, 40, 41, 42, 43, 44",
    material: "Suede and textile",
    cushioning: "EVA foam",
    purpose: "Lifestyle",
    color: "Blue/White",
    weight: "Light",
    ventilation: "Medium"
  },
  {
    id: 3,
    image: nikeblack,
    name: "Nike Black",
    brand: "Nike",
    price: 110,
    size: "40, 41, 42, 43, 44, 45",
    material: "Synthetic leather",
    cushioning: "Air Sole",
    purpose: "Casual",
    color: "Black",
    weight: "Medium",
    ventilation: "Low"
  },
  {
    id: 4,
    image: samba,
    name: "Adidas Samba",
    brand: "Adidas",
    price: 130,
    size: "39, 40, 41, 42, 43",
    material: "Leather",
    cushioning: "Standard",
    purpose: "Street / Sports",
    color: "White/Black",
    weight: "Light",
    ventilation: "Medium"
  },
  {
    id: 5,
    image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/d36a9190-12ff-44db-a37c-c5ea8eeaaf16/men-s-shoes-clothing-accessories.png",
    name: "Nike Dunk",
    brand: "Nike",
    price: 120,
    size: "39, 40, 41, 42, 43, 44",
    material: "Leather",
    cushioning: "Foam midsole",
    purpose: "Lifestyle",
    color: "Multicolor",
    weight: "Medium",
    ventilation: "Moderate"
  },
  {
    id: 6,
    image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/c6134e57-788e-4c05-9efe-4b16a1d1c9ae/men-s-shoes-clothing-accessories.png",
    name: "Nike Blazer",
    brand: "Nike",
    price: 110,
    size: "40, 41, 42, 43, 44",
    material: "Leather and suede",
    cushioning: "Foam",
    purpose: "Streetwear",
    color: "White/Gray",
    weight: "Medium",
    ventilation: "Low"
  },
  {
    id: 7,
    image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/9a9bf21f-44d0-48c4-9867-1df6d84ed49a/men-s-shoes-clothing-accessories.png",
    name: "Nike Air Max",
    brand: "Nike",
    price: 130,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh and synthetic",
    cushioning: "Air Max",
    purpose: "Running",
    color: "White/Black",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 8,
    image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/205ad606-a2e0-44af-9d6e-226033f26ef1/men-s-shoes-clothing-accessories.png",
    name: "Air Jordan 1",
    brand: "Nike",
    price: 140,
    size: "39, 40, 41, 42, 43, 44",
    material: "Leather",
    cushioning: "Air",
    purpose: "Basketball / Lifestyle",
    color: "Red/White/Black",
    weight: "Medium",
    ventilation: "Low"
  },
  {
    id: 9,
    image: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_509,c_limit/15dc783a-f0e0-4781-8220-628e531e09e7/men-s-shoes-clothing-accessories.png",
    name: "Nike Air Force 1",
    brand: "Nike",
    price: 100,
    size: "39, 40, 41, 42, 43, 44",
    material: "Leather",
    cushioning: "Air",
    purpose: "Casual",
    color: "White",
    weight: "Medium",
    ventilation: "Low"
  },
  {
    id: 10,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/f8cff80a-5e1c-4b68-a79f-b1d4e07d4e6b/zion-4-pf-basketball-shoes-X2d9C7.png",
    name: "Zion 4 PF",
    brand: "Nike",
    price: 250,
    size: "40, 41, 42, 43, 44, 45",
    material: "Synthetic mesh",
    cushioning: "Zoom Air",
    purpose: "Basketball",
    color: "Black/Red",
    weight: "Medium",
    ventilation: "High"
  },
  {
    id: 11,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a9a19a2-0915-4b69-84e2-02dc3a735c1d/AIR+FORCE+1+SP.png",
    name: "Nike Air Force 1 SP",
    brand: "Nike",
    price: 180,
    size: "39, 40, 41, 42, 43, 44",
    material: "Leather",
    cushioning: "Air",
    purpose: "Lifestyle",
    color: "White/Gold",
    weight: "Medium",
    ventilation: "Low"
  },
  {
    id: 12,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2862b680-2e59-4bb1-985b-0eb4074c5d3b/NIKE+PEGASUS+TRAIL+5+GTX.png",
    name: "Nike Pegasus Trail 5 GORE-TEX",
    brand: "Nike",
    price: 320,
    size: "39, 40, 41, 42, 43, 44",
    material: "GORE-TEX and mesh",
    cushioning: "React foam",
    purpose: "Trail running",
    color: "Gray/Black",
    weight: "Medium",
    ventilation: "High"
  },
  {
    id: 13,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31a17614-4755-48c0-95ed-2023ebfaaf38/NIKE+INITIATOR.png",
    name: "Nike Initiator",
    brand: "Nike",
    price: 150,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh and synthetic",
    cushioning: "Cushion foam",
    purpose: "Training",
    color: "Silver/Black",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 14,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6fc782b0-9c16-49e2-b6bf-88aa015e974e/AIR+JORDAN+1+LOW.png",
    name: "Air Jordan 1 Low",
    brand: "Nike",
    price: 210,
    size: "40, 41, 42, 43, 44",
    material: "Leather",
    cushioning: "Air",
    purpose: "Lifestyle",
    color: "Black/White",
    weight: "Medium",
    ventilation: "Low"
  },
  {
    id: 15,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3bbbc21-03a4-46c6-adc1-3066a1ea7e96/NIKE+CALM+SLIDE.png",
    name: "Nike Calm",
    brand: "Nike",
    price: 90,
    size: "39, 40, 41, 42, 43, 44",
    material: "Synthetic",
    cushioning: "Soft foam",
    purpose: "Slide",
    color: "Beige",
    weight: "Light",
    ventilation: "Open design"
  },
  {
    id: 16,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/52e47696-f000-4bb9-a6d3-41aa19220379/NIKE+SB+DUNK+LOW+PRO.png",
    name: "Nike Air Max 90",
    brand: "Nike",
    price: 150,
    size: "40, 41, 42, 43, 44",
    material: "Leather/Synthetic",
    cushioning: "Air Max",
    purpose: "Lifestyle / Running",
    color: "White/Gray/Red",
    weight: "Medium",
    ventilation: "Medium"
  },
  {
    id: 17,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3874a4be-3556-44e7-ac29-7a97aee7a1c3/GIANNIS+IMMORTALITY+4+EP.png",
    name: "Nike Zoom Pegasus 39",
    brand: "Nike",
    price: 130,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh/Synthetic",
    cushioning: "ZoomX foam",
    purpose: "Running",
    color: "Black/Blue",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 18,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61fde680-cfc0-4ab5-8f80-bf66c1538245/AIR+MAX+2013.png",
    name: "Nike Radiant Trail",
    brand: "Nike",
    price: 150,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh/Suede",
    cushioning: "React foam",
    purpose: "Trail running",
    color: "Red/Black",
    weight: "Medium",
    ventilation: "High"
  },
  {
    id: 19,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8312e20d-5b44-4b90-a355-1f8397f74d1a/AIR+ZOOM+PEGASUS+41.png",
    name: "Nike VaporMax Flyknit",
    brand: "Nike",
    price: 200,
    size: "39, 40, 41, 42, 43, 44",
    material: "Flyknit/Synthetic",
    cushioning: "VaporMax air",
    purpose: "Running",
    color: "Black/Gray",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 20,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/202d540b-5aa9-4d60-9c9a-86475b81d34d/KILLSHOT+2+LEATHER.png",
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 180,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh/Synthetic",
    cushioning: "Air Max",
    purpose: "Lifestyle / Running",
    color: "Black/White",
    weight: "Medium",
    ventilation: "High"
  },
  {
    id: 21,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c7ec36b-06e3-4734-820b-a78f30bc298a/ZOOMX+INVINCIBLE+RUN+3+WIDE.png",
    name: "Nike Zoom Fly 5",
    brand: "Nike",
    price: 160,
    size: "39, 40, 41, 42, 43, 44",
    material: "Flyknit",
    cushioning: "ZoomX foam",
    purpose: "Running",
    color: "Blue/Black",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 22,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/f8cff80a-5e1c-4b68-a79f-b1d4e07d4e6b/zion-4-pf-basketball-shoes-X2d9C7.png", name: "Nike Air Max 2021",
    brand: "Nike",
    price: 190,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh/Synthetic",
    cushioning: "Air Max",
    purpose: "Lifestyle",
    color: "Gray/White",
    weight: "Medium",
    ventilation: "High"
  },
  {
    id: 23,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/3f8c5b05-6d0f-49f4-b472-7425357e6a52/dunk-low-retro-shoes-mh4Q5d.png", name: "Nike Air Zoom Pegasus 38",
    brand: "Nike",
    price: 120,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh/Synthetic",
    cushioning: "ZoomX foam",
    purpose: "Running",
    color: "Blue/Black",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 24,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/d4941cf1-0a49-48ad-8b18-507bb9f1ba1b/sabrina-2-stronger-than-gold-ep-basketball-shoes-sRw62Z.png", name: "Nike Air Force 1 Crater",
    brand: "Nike",
    price: 140,
    size: "39, 40, 41, 42, 43, 44",
    material: "Recycled materials",
    cushioning: "Air",
    purpose: "Lifestyle",
    color: "Beige",
    weight: "Medium",
    ventilation: "Low"
  },
  {
    id: 25,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_1011,c_limit/0a070d72-8442-415e-bba8-41e0b5ca86b3/tatum-3-pf-basketball-shoes-cVsscl.png", name: "Nike VaporMax 2021",
    brand: "Nike",
    price: 220,
    size: "39, 40, 41, 42, 43, 44",
    material: "Flyknit/Synthetic",
    cushioning: "VaporMax air",
    purpose: "Running",
    color: "Black/Red",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 26,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3ca0e8ff-9564-46b0-a808-072cc0e8053a/NIKE+SB+FORCE+58.png",
    name: "Nike SB Force 58",
    brand: "Nike",
    price: 250,
    size: "40, 41, 42, 43, 44",
    material: "Flyknit",
    cushioning: "ZoomX foam",
    purpose: "Running",
    color: "White/Red",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 27,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a995b23a-7e1a-4a0d-91b7-dd418e9f4e74/NIKE+COURT+VISION+MID+NN.png", name: "Nike Free Run 5",
    brand: "Nike",
    price: 110,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh/Synthetic",
    cushioning: "Nike Free",
    purpose: "Running",
    color: "Gray/Black",
    weight: "Light",
    ventilation: "High"
  },
  {
    id: 28,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a995b23a-7e1a-4a0d-91b7-dd418e9f4e74/NIKE+COURT+VISION+MID+NN.png",
    name: "Nike Lunarlon Flex",
    brand: "Nike",
    price: 100,
    size: "39, 40, 41, 42, 43, 44",
    material: "Mesh/Synthetic",
    cushioning: "Lunarlon",
    purpose: "Running",
    color: "Black/Red",
    weight: "Light",
    ventilation: "High"
  }
];
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-4 text-red-600">Product not found.</div>;
  }

  const { likedItems, toggleLike } = useLikeStore();
  const isLiked = likedItems.some((item) => item.id === product.id);
  return (
    <motion.div
      className="max-w-5xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-start bg-white shadow-2xl rounded-2xl p-6 hover:shadow-3xl transition-shadow duration-300">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />

        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h1>
          <ul className="space-y-3 text-[17px] text-gray-700">
            <li>
              <span className="font-semibold text-gray-800">Brand:</span>{" "}
              {product.brand}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Price:</span>{" "}
              <span className="text-green-600 font-bold text-xl">
                ${product.price}
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-800">Sizes:</span>{" "}
              {product.size}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Material:</span>{" "}
              {product.material}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Cushioning:</span>{" "}
              {product.cushioning}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Purpose:</span>{" "}
              {product.purpose}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Color:</span>{" "}
              {product.color}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Weight:</span>{" "}
              {product.weight}
            </li>
            <button
              onClick={() => toggleLike(product)}
              aria-label="Toggle Like"
              className="hover:scale-110 transition-transform duration-200"
            >
              {isLiked ? (
                <MdFavorite className="text-2xl text-red-600" />
              ) : (
                <MdFavoriteBorder className="text-2xl text-gray-500" />
              )}
            </button>
            <button className="mt-3 w-full py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition">
              Add to cart
            </button>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
