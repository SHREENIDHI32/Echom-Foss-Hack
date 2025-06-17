import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="mb-6">
            Welcome to our restaurant, where culinary excellence meets warm hospitality. 
            Established in 2020, we've been serving our community with passion and dedication.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">Our Philosophy</h2>
          <p className="mb-6">
            We believe in using only the finest ingredients, sourced locally whenever possible, 
            to create dishes that delight and inspire. Our team of expert chefs combines traditional 
            techniques with modern innovation to bring you an unforgettable dining experience.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">Our Kitchen</h2>
          <p className="mb-6">
            Led by our award-winning head chef, our kitchen team works tirelessly to ensure 
            every dish that leaves our kitchen meets our exacting standards. We take pride in 
            our attention to detail and commitment to excellence.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">Community</h2>
          <p className="mb-6">
            We're proud to be part of our local community and actively participate in various 
            charitable initiatives. We believe in giving back and creating positive change 
            through our work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
