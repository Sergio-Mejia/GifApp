import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //No aceptar una letra o enviar mensajes sin contenido
    if (inputValue.trim().length <= 1) return;

    //Obtener las categorias anteriores y agregar una nueva
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());

    //Limpiar caja de texto
    setInputValue("");
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
