import React from "react";
import { FilterTabStyled } from "./FilterTabStyled";

function FilterTab({
  text,
  updateAppsList,
  value,
  name,
  filter,
  defaultChecked,
}) {
  return (
    <FilterTabStyled
      onClick={(e) =>
        updateAppsList(e.target.value).setActiveButton(e.target.value)
      }
      defaultChecked={defaultChecked}
      value={value}
      name={name}
      filter={filter}
    >
      {text}
    </FilterTabStyled>
  );
}

export default FilterTab;
