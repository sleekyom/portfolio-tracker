import React from 'react';

const CryptoCard = ({ crypto }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
  };

  return (
    <div className="crypto-card">
      <img src={crypto.image} alt={`${crypto.name} logo`} className="crypto-logo" />
      <h2>{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
      <p>Current Price: {formatCurrency(crypto.current_price)}</p>
      <p>Market Cap: {formatCurrency(crypto.market_cap)}</p>
      <p>Max Supply: {crypto.max_supply ? formatNumber(crypto.max_supply) : 'N/A'}</p>
      <p>Circulating Supply: {formatNumber(crypto.circulating_supply)}</p>
    </div>
  );
};

export default CryptoCard;
