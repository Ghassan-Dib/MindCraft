import React from 'react';

interface PricingItemInfo {
  title: string;
  price: string;
  list: string[];
}

const PricingItem: React.FC<PricingItemInfo> = ({ title, price, list }) => {
  return (
    <div className={title}>
      <div className="heading">
        <h3>{title}</h3>
        <h6>Organize across all apps by hand</h6>
      </div>
      <div className="payment">
        <h1>{price}</h1>
        <div className="block">
          <h3>$</h3>
          <h6>Per Month</h6>
        </div>
      </div>
      <ul>{list ? list.map((d, i) => <li key={i}>{d}</li>) : 'loading..'}</ul>
      <button>Order Now</button>
    </div>
  );
};

export default PricingItem;
