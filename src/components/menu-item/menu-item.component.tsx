import React from "react";
import "./menu-item.styles.scss";

interface Props {
  title: string;
  imageUrl: string;
  size?: "large";
}

const MenuItem = ({ title, imageUrl, size }: Props) => {
  console.log(imageUrl);
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
