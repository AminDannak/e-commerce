import React from "react";

import "./collection-item.styles.scss";
import { DummyProduct } from "../../model/DummyProduct";

type Props = DummyProduct;

const CollectionItem = ({ name, price, imageUrl }: Props) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
