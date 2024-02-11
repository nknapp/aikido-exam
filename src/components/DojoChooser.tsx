import React from "react";
import { Dropdown } from "react-bootstrap";
import { dojos } from "../exam-tables";
import css from "./DojoChooser.module.scss";
import { useSelectedDojo } from "../store/selectedDojo";

export const DojoChooser: React.FC = () => {
  const { selectedDojo, selectDojo } = useSelectedDojo();
  return (
    <Dropdown>
      <Dropdown.Toggle variant={"success"} className={css.dropdownItem}>
        {selectedDojo.logo && <img src={selectedDojo.logo} alt={"logo"} />}
        {selectedDojo.name}{" "}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.entries(dojos).map(([id, dojo]) => {
          return (
            <Dropdown.Item key={id} className={css.dropdownItem} onClick={() => selectDojo(id)}>
              {dojo.logo && <img src={dojo.logo} alt={"logo"} />}
              {dojo.name}{" "}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
