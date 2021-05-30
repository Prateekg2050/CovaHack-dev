import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";
import District from "./District";

const District1 = (props) => {
  const [sessions, setSessions] = useState([]);
  const [district_id, setdistrictid] = useState("");

  useEffect(() => {
    findByDistrict_id();
  }, [props.state_id]);

  const findByDistrict_id = () => {
    //TODO: Make date variable
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${props.state_id}`
      )
      .then((res) => {
        console.log(res.data);
        setSessions(res.data.districts);
      });
  };

  return (
    <>
      <div>
        <DropdownButton
          id="dropdown-basic-button"
          title="Select District"
          style={{ padding: "10px" }}>
          {sessions.map((val) => {
            return (
              <Dropdown.Item
                onClick={() => {
                  setdistrictid(val.district_id);
                }}>
                {val.district_name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        {district_id != "" ? <District district_id={district_id} /> : null}
      </div>
    </>
  );
};

export default District1;
