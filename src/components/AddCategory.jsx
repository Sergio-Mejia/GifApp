import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("The Office");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form action="" onSubmit={ onSubmit }>
        <input 
          type="text"
          placeholder="Buscar Gifts"
          value={inputValue}
          onChange={onInputChange}
        />
    </form>
  );
};
