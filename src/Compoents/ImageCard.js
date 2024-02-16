// ImageCard.js
import React from 'react';

const ImageCard = ({ name, imagePath }) => {
  return (
    <div className="image-card">
      <img src={imagePath} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default ImageCard;
