import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <img src={logo} alt="crap" className="logo" /> */}
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          {t("shop").toUpperCase()}
        </Link>
        <Link className="option" to="/contact">
          {t("contact_us").toUpperCase()}
        </Link>
      </div>
    </div>
  );
};

export default Header;
