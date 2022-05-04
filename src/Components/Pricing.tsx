import React from 'react';
import PricingItem from './PricingItem';

interface PricingInfo {
  data: { title: string; text: string; text2: string; features: string[] };
}

const Pricing: React.FC<PricingInfo> = ({ data: { title, text, text2, features } }) => {
  return (
    <div className="pricing">
      <div className="pricing__text">
        <h2>{title}</h2>
        <h4 className="mobile">{text}</h4>
        <h4 className="desk">{text2}</h4>
      </div>
      <div className="pricing__items">
        <PricingItem title={'FREE'} price={'0'} list={features} />
        <PricingItem title={'STANDARD'} price={'10'} list={features} />
        <PricingItem title={'BUSINESS'} price={'99'} list={features} />
      </div>
    </div>
  );
};

export default Pricing;
