import { useState } from "react";
import { Search, X } from "lucide-react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import samba from '../../assets/adidas samba.png'
import new530 from '../../assets/new balance 530.png'
import new327 from '../../assets/new balance 327.png'
import nikeblack from '../../assets/nike black.png'
import { useLikeStore } from "../../Store/UseLikeStore";
import { Link } from "react-router-dom";
import { useCartStore } from "../../Store/useCartStore";

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
          ventilation: "Good",
          quantity: 1,
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
          ventilation: "Medium",
          quantity: 1,
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
          ventilation: "Low",
          quantity: 1,
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
          ventilation: "Medium",
          quantity: 1,
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
          ventilation: "Moderate",
          quantity: 1,
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
          ventilation: "Low",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "Low",
          quantity: 1,
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
          ventilation: "Low",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "Low",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "Low",
          quantity: 1,
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
          ventilation: "Open design",
          quantity: 1,
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
          ventilation: "Medium",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "Low",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
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
          ventilation: "High",
          quantity: 1,
        }
      ];


const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { likedItems, toggleLike } = useLikeStore();
  const [selectedBrand, setSelectedBrand] = useState('');
  const { cartItems, addToCart, removeFromCart } = useCartStore();
  // Filter products by selected brand and search term
  const filteredProducts = products.filter(product => {
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesBrand && matchesSearch;
  });
  return (
    <div className="max-w-7xl w-full mx-auto p-6 flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full lg:w-[300px] bg-gradient-to-b from-gray-900 to-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-white mb-4 text-center">Brand Category</h1>
        <div className="space-y-4">
          {['', 'Nike', 'Adidas', 'New Balance'].map((brand) => (
            <h2
              key={brand}
              className="text-xl font-medium text-white hover:text-yellow-300 transition-colors cursor-pointer"
              onClick={() => setSelectedBrand(brand)}
            >
              {brand === '' ? 'All Brands' : `${brand} Brand`}
            </h2>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Search Bar */}
        <div className="relative flex items-center w-full max-w-md mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 pl-10 pr-10 py-2 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-md transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 text-gray-400 hover:text-gray-600 transition-all"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isLiked = likedItems.some((item) => item.id === product.id);
              const isInCart = cartItems.some((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
                  </Link>

                  <p className="text-gray-700 text-lg flex items-center justify-between">
                    ${product.price}
                    <span className="hover:scale-110 transition-transform duration-200">
                      <button onClick={() => toggleLike(product)} aria-label="Toggle Like">
                        {isLiked ? (
                          <MdFavorite className="text-2xl text-red-600" />
                        ) : (
                          <MdFavoriteBorder className="text-2xl text-gray-500" />
                        )}
                      </button>
                    </span>
                  </p>

                  {/* Cart Button */}
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
            })
          ) : (
            <p className="text-center col-span-full text-xl">Nothing found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
