import React from 'react';

interface ItemInfo {
  img: string;
  text: string;
}

const ContactItem: React.FC<ItemInfo> = ({ img, text }) => {
  return (
    <div className={'address item'}>
      <img src={img} alt="" />
      <h6>{text}</h6>
    </div>
  );
};

export default ContactItem;
