import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div className="image">
                <img src={img} alt="img" />
            </div>
            <div className="item-details">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p><span className='orange-color'>{price}</span></p>
                    <p><small>{shipping}</small></p>
                    <p><small>{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ReviewItem;