import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["The Office"]);

  const onAddCategory = (newCategory) => {
    //Si la categoria ya existe, no hacer nada
    if (categories.includes(newCategory)) return;
    // categories.push( newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>


      <AddCategory onNewCategory={(event) => onAddCategory(event)} />


      {/* listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
