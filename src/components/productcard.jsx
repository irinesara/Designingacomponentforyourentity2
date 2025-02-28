import React from 'react';
import Button from './button';

const ProductCard = () => {
    const productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUALWG-2fpbSUPbiVSUNHjPbi2SzaPQA21g&s';
    const productName = 'Sample Product';
    const productPrice = '$99.99';

    return (
        <div className="product-card">
            <img src={productImage} alt={productName} />
            <h2>{productName}</h2>
            <p>{productPrice}</p>
            <Button />
        </div>
    );
};

export default ProductCard;