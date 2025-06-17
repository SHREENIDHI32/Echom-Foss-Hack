import React from 'react';
import PropTypes from 'prop-types';

const FoodItem = ({ id, name, desc, price, image }) => {
  // Default image if the provided one fails to load
  const defaultImage = '/images/default-food.jpg';
  const [imgSrc, setImgSrc] = React.useState(image);
  const [isHovered, setIsHovered] = React.useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    setImgSrc(defaultImage);
  };

  if (!id || !name) {
    console.warn('FoodItem: Missing required props (id or name)');
    return null;
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={name}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary-dark mb-2">{name}</h3>
        {desc && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{desc}</p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            ${price?.toFixed(2) || '0.00'}
          </span>
          <button 
            className="btn btn-accent"
            onClick={() => console.log(`Add to cart: ${id}`)}
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

FoodItem.defaultProps = {
  desc: '',
  price: 0,
  image: '/images/default-food.jpg'
};

export default FoodItem;
