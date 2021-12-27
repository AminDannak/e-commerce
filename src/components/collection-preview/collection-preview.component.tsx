import React, { FC } from "react";

import "./collection-preview.styles.scss";
import { DummyCategory } from "../../model/DummyCategory";
import CollectionItem from "../collection-item/collection-item.component";

type Props = DummyCategory;

const PRODUCTS_PER_CATEGORY = 4;

const CollectionPreview: FC<Props> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, i) => i < PRODUCTS_PER_CATEGORY)
          .map((item) => (
            <CollectionItem id={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
