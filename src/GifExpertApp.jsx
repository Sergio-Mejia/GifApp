import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["The Office", "React"]);

  const onAddCategory = (newCategory) => {

    //Si la categoria ya existe, no hacer nada
    if( categories.includes( newCategory )) return; 
    // categories.push( newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* listado de Gif */}
      <ol>
        {categories.map((category, index ) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
