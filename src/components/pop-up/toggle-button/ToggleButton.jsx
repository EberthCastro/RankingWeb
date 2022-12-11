import React from "react";
import { Label, Input, Switch, Span } from "./ToggleButtonStyle";

function ToggleButton({
  text,
  name,
  renderAppsList,
  filterAppType,
  reorderFilter,
}) {
  if (filterAppType) {
    return (
      <>
        <Label>
          <Input
            name={name}
            type="radio"
            value={text}
            onClick={(e) => filterAppType(e.target.value)}
          />
          <Switch />
          <Span> {text} </Span>
        </Label>
      </>
    );
  }
  if (reorderFilter) {
    return (
      <>
        <Label>
          <Input
            name={name}
            type="radio"
            value={text}
            onClick={(e) => reorderFilter(e.target.value)}
          />
          <Switch />
          <Span> {text} </Span>
        </Label>
      </>
    );
  }
}

export default ToggleButton;
