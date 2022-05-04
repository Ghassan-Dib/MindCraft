import React from 'react';

interface PartnersItemInfo {
  img: string;
}

const PartnersItem: React.FC<PartnersItemInfo> = ({ img }) => {
  return (
    <div className="item">
      <h6>Client Name</h6>
      <img src={require('../images/' + img)} alt="" />
    </div>
  );
};

export default PartnersItem;
