import React, { useState } from "react";

import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import DUMMY_SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [collections, setCollections] = useState(DUMMY_SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((item) => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShopPage;
