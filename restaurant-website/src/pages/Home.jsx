import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/header_img.jpg"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Our Restaurant
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Experience fine dining at its best with our carefully crafted menu and exceptional service
        </p>
        <Link
          to="/menu"
          className="btn btn-accent text-lg px-8 py-3"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default Home;
