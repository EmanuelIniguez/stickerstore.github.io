import React, { useState } from 'react';
import ProductCard from './ProductCard';


const ProductList = ({ products }) => {
    const [cartItems, setCartItems] = useState([]);


    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };


    return (
        <div className="product-list-container">
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>

        </div>
    );
};

export default ProductList;
