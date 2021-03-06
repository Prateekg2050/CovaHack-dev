import React, { useState } from "react";
import { Sdata } from "./Sdata";
import { DropdownButton, Dropdown } from "react-bootstrap";
import District1 from "./District1";

const State1 = () => {
  const [stateId, setStateId] = useState("");
  return (
    <>
      <div>
        <h3>Find by District</h3>
        <DropdownButton
          id="dropdown-basic-button"
          title="Select State"
          style={{ padding: "10px" }}>
          {Sdata.map((val) => {
            return (
              <Dropdown.Item
                onClick={() => {
                  setStateId(val.state_id);
                }}>
                {val.state_name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        {stateId != "" ? <District1 state_id={stateId} /> : null}
      </div>
    </>
  );
};

export default State1;
