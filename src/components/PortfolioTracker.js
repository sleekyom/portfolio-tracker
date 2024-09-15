import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';

const PortfolioTracker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,cardano,binancecoin,solana,polkadot,dogecoin,shiba-inu,terra,avalanche,chainlink,uniswap,wrapped-bitcoin,bitcoin-cash,litecoin,algorand,polygon,stellar,vechain,axie-infinity',  // Top 20 by market cap
            },
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const filteredData = cryptoData.filter(crypto =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredData.map(crypto => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}</div>
    </div>
  );
};

export default PortfolioTracker;
