import React from "react";
import "./menu-item.styles.scss";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  imageUrl: string;
  size?: "large";
}

const MenuItem = ({ title, imageUrl, size }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{t("shop_now").toUpperCase()}</span>
      </div>
    </div>
  );
};

export default MenuItem;
