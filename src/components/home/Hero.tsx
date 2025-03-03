import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <img
        src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=80"
        alt="Mechanic working on car"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Professional Auto Care Services</h1>
        <p className="text-xl max-w-2xl">
          Expert vehicle maintenance and repair services to keep your car running at its best. 
          Book your appointment today with our certified technicians.
        </p>
        <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-block w-fit">
          Book Now
        </button>
      </div>
    </div>
  );
}