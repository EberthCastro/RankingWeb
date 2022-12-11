import React from "react";
//components
import ToggleButton from "./toggle-button/ToggleButton";
import InputPopUp from "./input-popup/InputPopUp";
//styles
import {
  PopUpContainer,
  FiltersContainer,
  CloseButton,
  Overlay,
  Span,
  ToggleButtonsTops,
  ToggleButtonsType,
} from "./PopUpStyle";

function PopUp({
  state,
  setState,
  renderAppsList,
  setRenderAppsList,
  originalDataOrder,
}) {
  const filterAppType = (type) => {
    const filteredData = originalDataOrder.filter((app) => app.type === type);
    setRenderAppsList(filteredData); // Estado 1
  };

  const resetFilterAppType = (type) => {
    const filteredData = originalDataOrder;
    setRenderAppsList(filteredData);
  };

  const reorderFilter = (order) => {
    if (order === "Best 10") {
      const filteredData = originalDataOrder
        .sort((a, b) => (a.rating > b.rating ? -1 : 1))
        .slice(0, 10);
      setRenderAppsList(filteredData);
    } else if (order === "Worst 10") {
      const filteredData = originalDataOrder
        .sort((a, b) => (a.rating > b.rating ? 1 : -1))
        .slice(0, 10);
      setRenderAppsList(filteredData);
    }
  };

  return (
    <>
      {state && (
        <Overlay>
          <PopUpContainer>
            <InputPopUp
              setRenderAppsList={setRenderAppsList}
              renderAppsList={renderAppsList}
              originalDataOrder={originalDataOrder}
            />
            <CloseButton onClick={() => setState(false)}>X</CloseButton>
            <Span>Filters</Span>
            <FiltersContainer>
              <ToggleButtonsTops>
                <ToggleButton
                  renderAppsList={renderAppsList}
                  text="Best 10"
                  name="firstFilter"
                  filterAppType={reorderFilter}
                />
                <ToggleButton
                  renderAppsList
                  text="Worst 10"
                  name="firstFilter"
                  filterAppType={reorderFilter}
                />
              </ToggleButtonsTops>
              <ToggleButtonsType>
                <ToggleButton
                  name="secondFilter"
                  text="Mobile"
                  filterAppType={filterAppType}
                />
                <ToggleButton
                  name="secondFilter"
                  text="Web"
                  filterAppType={filterAppType}
                />
                <ToggleButton
                  name="secondFilter"
                  text="Desktop"
                  filterAppType={filterAppType}
                />
                <ToggleButton
                  name="secondFilter"
                  text="Reset filter"
                  filterAppType={resetFilterAppType}
                />
              </ToggleButtonsType>
            </FiltersContainer>
          </PopUpContainer>
        </Overlay>
      )}
    </>
  );
}

export default PopUp;
