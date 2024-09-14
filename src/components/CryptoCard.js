import React from 'react';

const CryptoCard = ({ crypto }) => {
  return (
    <div className="crypto-card">
      <img src={crypto.image} alt={`${crypto.name} logo`} className="crypto-logo" />
      <h2>{crypto.name}</h2>
      <p>Current Price: ${crypto.current_price}</p>
      <p>Market Cap: ${crypto.market_cap}</p>
    </div>
  );
};

export default CryptoCard;
