import { ToggleButton } from "react-bootstrap";
import { CheckSquare, Square } from "react-bootstrap-icons";
import React from "react";
import { ToggleButtonProps } from "react-bootstrap/ToggleButton";

export const CheckButton: React.FC<ToggleButtonProps & { id: string }> = (
  props
) => {
  return (
    <ToggleButton {...props} type="checkbox">
      {props.checked ? <CheckSquare /> : <Square />} {props.children}
    </ToggleButton>
  );
};
