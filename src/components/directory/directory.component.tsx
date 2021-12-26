import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import DUMMY_SECTIONS_DATA from "./directory.data";

const Directory = () => {
  const { t } = useTranslation();

  const [sections] = useState(DUMMY_SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map((s) => (
        <MenuItem
          key={s.id}
          title={t(s.titleKey)}
          imageUrl={s.imageUrl}
          linkUrl={s.linkUrl}
          size={s.size}
        />
      ))}
    </div>
  );
};

export default Directory;
