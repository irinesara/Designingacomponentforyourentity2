import React from 'react';
import Button from './button';

const Productcard = () => {
  // Static product details
  const productImage = "https://example.com/real-image.jpg"; // Replace with the URL of the real image
  const productName = "Sample Product";
  const productPrice = "$99.99";

  const handleViewProduct = () => {
    alert('Viewing product details...');
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4">
      <img className="w-full h-48 object-cover" src={productImage} alt="Product" />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-700">{productName}</h2>
        <p className="text-lg font-semibold text-green-600">{productPrice}</p>
        <Button label="View Product" onClick={handleViewProduct} />
      </div>
    </div>
  );
};

export default Productcard;