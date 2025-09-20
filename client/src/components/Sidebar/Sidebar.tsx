import React from "react";
import { Category } from "../../types";

import "./Sidebar.css";

interface SidebarProps {
  categories: Category[];
}

export const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
  return (
    <div className={"sidebar"}>
      <h3>Kategorien</h3>
      {categories.length ? (
        <ul>
          {categories[0].childrenCategories.list.map(({ name, urlPath }) => (
            <li key={urlPath}>
              <a href={`/${urlPath}`}>{name}</a>
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
