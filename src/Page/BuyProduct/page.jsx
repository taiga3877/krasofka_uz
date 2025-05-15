import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import registerimg from '../../assets/image-Photoroom (5).png'





const BuyProduct = () => {
    const SendMessage = async (event, setLoading, setButtonText) => {
        event.preventDefault();
        setLoading(true);
        setButtonText("Sending...");

        const token = '8076107371:AAGso6mhQYQWY-C7CtOi14utVFYSESggwVA';
        const chat_id = 6365725666;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const name = event.target.name.value;
        const number = event.target.number.value;
        const message = event.target.message.value;

        const fullMessage = `📬 New Buy Product:\n\n👤 Name: ${name}\n📱 Phone: ${number}\n📝💬 Message: ${message}`;

        try {
            await axios.post(url, {
                chat_id: chat_id,
                text: fullMessage,
            });

            // Симулируем задержку на 7 секунд
            await new Promise((resolve) => setTimeout(resolve, 4000));

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
            <div className="w-full max-w-[1440px] mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={registerimg} alt="Feedback" className="rounded-xl  max-w-full h-auto" />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl transition-all duration-300">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">We’re Here for Yo</h1>
                    <p className="text-gray-500 mb-8">Tell us what’s on your mind — we’ll reach out as soon as we can.</p>

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
                                placeholder='Islom'
                                required
                                className="w-full h-[48px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Number *</label>
                            <input
                                type="number"
                                id="number"
                                placeholder='+998 90 123 45 67'
                                name="number"
                                required
                                className="w-full h-[48px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                            />
                        </div>


                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name of Product *</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='For example: New balance 327'
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

export default BuyProduct