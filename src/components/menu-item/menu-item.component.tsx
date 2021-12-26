import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./menu-item.styles.scss";

// whatever you expect in 'this.props.match.params.*'
interface PathParamsType {}

type Props = RouteComponentProps<PathParamsType> & {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: "large";
};

const MenuItem: FC<Props> = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
