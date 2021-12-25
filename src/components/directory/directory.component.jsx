import React, { useState } from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import { sections as initSections } from "./directory.data";

const Directory = () => {
  const [sections] = useState(initSections);
  return (
    <div className="directory-menu">
      {sections.map((s) => (
        <MenuItem
          key={s.id}
          title={s.title}
          imageUrl={s.imageUrl}
          size={s.size}
        />
      ))}
    </div>
  );
};

export default Directory;
