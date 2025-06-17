import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const {cartItems = {}, addToCart, removeFromCart, url, isLoading, error, initialized} = useContext(StoreContext);
    
    if (!initialized || isLoading) {
        return <div className="food-item loading">Loading...</div>;
    }

    if (error) {
        return <div className="food-item error">{error}</div>;
    }

    if (!id || !name) {
        console.warn('FoodItem missing required props:', { id, name });
        return null;
    }

    const itemCount = initialized ? (cartItems[id] || 0) : 0;
    const imagePath = image ? `${url}/images/${image}` : assets.default_food_image;
    
    // For debugging
    if (process.env.NODE_ENV === 'development') {
        console.debug('FoodItem props:', { id, name, price, cartItems: cartItems[id] });
    }

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img 
                    className='food-item-image' 
                    src={imagePath} 
                    alt={name}
                    onError={(e) => {
                        e.target.src = assets.default_food_image;
                        e.target.onerror = null;
                    }} 
                />
                {itemCount === 0 ? (
                    <img 
                        className='add' 
                        onClick={() => addToCart(id)} 
                        src={assets.add_icon_white} 
                        alt="Add to cart" 
                    />
                ) : (
                    <div className="food-item-counter">
                        <img 
                            src={assets.remove_icon_red} 
                            onClick={() => removeFromCart(id)} 
                            alt="Remove item" 
                        />
                        <p>{itemCount}</p>
                        <img 
                            src={assets.add_icon_green} 
                            onClick={() => addToCart(id)} 
                            alt="Add item" 
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{desc || 'No description available'}</p>
                <p className="food-item-price">Rs {price || 0}</p>
            </div>
        </div>
    )
}

export default FoodItem
