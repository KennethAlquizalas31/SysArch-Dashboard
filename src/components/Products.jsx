// src/components/Product.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import './Products.css'; // Import CSS for styling

const Product = () => {
    const [newProducts] = useState([
        { id: 16, name: 'GPU - AMD Radeon RX 6800', price: 650 },
        { id: 17, name: 'RAM - G.Skill 32GB DDR4', price: 180 },
        { id: 18, name: 'SSD - Crucial 500GB SATA', price: 70 },
        { id: 19, name: 'Motherboard - MSI B450', price: 150 },
        { id: 20, name: 'Monitor - Dell UltraSharp 27"', price: 400 },
        { id: 21, name: 'Mechanical Keyboard - Corsair K70', price: 150 },
        { id: 22, name: 'Wireless Mouse - Razer Basilisk', price: 80 },
        { id: 23, name: 'Webcam - Logitech C920', price: 90 },
        { id: 24, name: 'Microphone - Blue Yeti', price: 120 },
        { id: 25, name: 'Graphics Card Stand - G-Frame', price: 25 },
        { id: 26, name: 'Gaming Chair - Secretlab Titan', price: 350 },
        { id: 27, name: 'Router - TP-Link Archer AX50', price: 120 },
        { id: 28, name: 'USB Hub - Anker 10-Port', price: 40 },
        { id: 29, name: 'External SSD - SanDisk 1TB', price: 150 },
        { id: 30, name: 'Cooling Pad - Cooler Master', price: 35 },
      ]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Include Sidebar here */}
      <div className="product-container" style={{ marginLeft: '200px', padding: '20px' }}>
        <h2>Computer Parts for Sale</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;