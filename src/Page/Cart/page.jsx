import React from 'react';
import { useCartStore } from '../../Store/useCartStore';
import { MdDelete } from 'react-icons/md';
import samba from '../../assets/adidas samba.png';

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
                <img
                  src={item.image || samba} // Default image if no image is found
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
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

          <div className="text-right text-xl font-semibold pt-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
