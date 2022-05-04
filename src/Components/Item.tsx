import React from 'react';

interface ItemInfo {
  img: string;
  title: string;
  text: string;
}

const Item: React.FC<ItemInfo> = ({ img, title, text }) => {
  return (
    <div className="features__items__box">
      <img src={require('../images/' + img)} alt="icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Item;
