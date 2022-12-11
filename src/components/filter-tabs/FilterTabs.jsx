import React, { useState } from "react";
import FilterTab from "./filter-tab/FilterTab";
import { FilterTabsContainer } from "./FilterTabsContainer";

function FilterTabs({
  bestAppsList,
  intermediateAppsList,
  worstAppsList,
  setRenderAppsList,
  originalDataOrder,
  setOriginalDataOrder,
  secondDataOrder,
  setSecondDataOrder,
}) {
  const [tabState, setTabState] = useState("Mejores");

  const updateAppsList = (order) => {
    //Mejores, Peores, Intermedias
    if (order === "Mejores") {
      setOriginalDataOrder(bestAppsList);
      setRenderAppsList(bestAppsList); // Estado 1 - Render
      setSecondDataOrder(bestAppsList);
      setTabState(order);
    }
    if (order === "Intermedias") {
      setOriginalDataOrder(intermediateAppsList);
      setRenderAppsList(intermediateAppsList); // Render
      setSecondDataOrder(bestAppsList);
      setTabState(order);
    }
    if (order === "Peores") {
      setOriginalDataOrder(worstAppsList);
      setRenderAppsList(worstAppsList); // Render
      setSecondDataOrder(bestAppsList);
      setTabState(order);
    }
  };

  return (
    <FilterTabsContainer>
      <FilterTab
        updateAppsList={updateAppsList}
        text="Best"
        value="Mejores"
        name="filter"
      />
      <FilterTab
        updateAppsList={updateAppsList}
        text="Intermediate"
        value="Intermedias"
        name="filter"
      />
      <FilterTab
        updateAppsList={updateAppsList}
        text="Worst"
        value="Peores"
        name="filter"
      />
    </FilterTabsContainer>
  );
}

export default FilterTabs;
