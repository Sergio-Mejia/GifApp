import React, { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'The Office', 'React']);

    const onAddCategory = () => {
        setCategories([ 'Premier League', ...categories]);
    }

  return (
    <>
      <h1>GifExpertApp</h1>


      {/* listado de Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map( category => {
            return <li key={ category }>{category}</li>
        })}
      </ol>
    </>
  );
};
