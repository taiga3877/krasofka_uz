import React from 'react';
import { useLikeStore } from '../../Store/UseLikeStore.js';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'; // filled heart

const Like = () => {
  const { likedItems, toggleLike } = useLikeStore();


  return (
    <div className="p-6 max-w-[1440px] mx-auto">
  <h1 className="text-3xl font-bold mb-6">Your Liked Items</h1>

  {likedItems.length === 0 ? (
    <p className="text-gray-500 text-lg">You haven't liked anything yet 💔</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {likedItems.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-video object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
          <p className="text-gray-700 text-lg flex items-center justify-between">
            ${product.price}
            <span className="hover:scale-110 transition-transform duration-200">
              <button onClick={() => toggleLike(product)} aria-label="Toggle Like">
                {product.isLiked ? (
                  <MdFavoriteBorder className="text-2xl text-gray-500" />
                ) : (
                <MdFavorite className="text-2xl text-red-600" />
                )}
              </button>
            </span>
          </p>
          <button className="mt-3 w-full py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-200">
          Add to cart
          </button>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default Like;
