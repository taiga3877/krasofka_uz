import React from 'react'

const LocationPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.9758951050862!2d69.2375901!3d41.200499099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61284896a357%3A0x39082adb468e1c24!2z0KLQsNGI0LrQtdC90YIg0JjQvdC00LXQutGB!5e0!3m2!1sru!2s!4v1745149198518!5m2!1sru!2s"
        width="1000"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-lg"
      ></iframe>

      <h1 className="text-center mt-8 text-3xl font-bold text-gray-800">
        Tashkent City, Index Majmuasi 4A, 48
      </h1>
    </div>
  )
}

export default LocationPage
