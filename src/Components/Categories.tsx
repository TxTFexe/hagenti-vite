import React from "react";
import { Link } from "react-router-dom";

type CategoriesProps = {
  items: {
    name: string;
    url: string;
  }[];
};

const Categories: React.FC<CategoriesProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Link key={`${item.name}_${index}`} to={"/" + item.url}>
          <div>{item.name}</div>
        </Link>
      ))}
    </>
  );
};

export default Categories;
