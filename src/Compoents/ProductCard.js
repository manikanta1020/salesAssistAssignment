import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { BsFillCartPlusFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { title, price, category, image, rating } = product;

  return (
    <div className="card">
    <CiBookmark className="bookmark-icon" />
      <img src={image} alt={title} className="card-image" />
     
      <div className="card-body">

        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
        {/* <p className="card-description">{description}</p> */}
        <p className="card-price">${price}</p>
        <div className="card-rating">
          <p>Rating: {rating.rate}</p>
          <p>({rating.count} reviews)</p>

        </div>
        <BsFillCartPlusFill />

      </div>
    </div>
  );
};

export default ProductCard;
