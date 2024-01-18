import React from 'react';
import './Card.css';
const Card = ({ campaignName, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={campaignName} />
      <h2>{campaignName}</h2>
      <button>View Campaign</button>
      <button>...</button>
    </div>
  );
};

export default Card;