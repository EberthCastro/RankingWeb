import React, { useState } from "react";
import { InputPopUpStyled } from "./InputPopUpStyle";

function InputPopUp({ setRenderAppsList, originalDataOrder }) {
  const [inputValue, setInputValue] = useState("");

  const filterByName = (word) => {
    if (word === "") {
      setRenderAppsList(originalDataOrder);
      setInputValue("");
    } else {
      const filteredResult = originalDataOrder.filter((app) =>
        app.app_name.toLowerCase().includes(word)
      );
      setRenderAppsList(filteredResult);
      setInputValue(word);
    }
  };

  return (
    <>
      <InputPopUpStyled
        type="text"
        id="searchByWord"
        placeholder="Search..."
        onKeyUp={(e) => filterByName(e.target.value)}
      />
    </>
  );
}

export default InputPopUp;
