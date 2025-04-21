import React from 'react';
import { useCartStore } from '../../Store/UseCartStore.js';
import { Link } from 'react-router-dom';


const CartPage = () => {

  // Access cart items, removeFromCart, and updateQuantity from the store
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-xl p-4">
              <div className="flex items-center gap-4">
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image || samba} // Default image if no image is found 
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </Link>
                <div>
                <Link to={`/product/${item.id}`}>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                </Link>
                  <p className="text-gray-700">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="text-xl text-gray-600 hover:text-gray-800"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  placeholder={item.quantity}
                  className="w-12 text-center border rounded-md"
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="text-xl text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 transition text-2xl"
              >
               X
              </button>
            </div>
          ))}

<div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t mt-6">
  <div className="text-xl font-semibold text-gray-800">
    Total: <span className="text-red-500">${totalPrice.toFixed(2)}</span>
  </div>
  <Link to={'/buyitems'}>
  <button
    className="mt-4 sm:mt-0 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
  >
    Buy Product
  </button>
  </Link>
</div>

        </div>
      )}
    </div>
  );
};

export default CartPage;
