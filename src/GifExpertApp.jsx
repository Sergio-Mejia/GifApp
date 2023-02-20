import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["The Office", "React"]);

  const onAddCategory = () => {
    setCategories(["Premier League", ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories} />

      {/* listado de Gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
