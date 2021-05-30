import axios from "axios";
import React, { useState } from "react";
import State1 from "./State1";
import "../index.css";
const Dashboard = (props) => {
  return (
    <>
      <div
        style={{ textAlign: "center" }}
        className="bg-light d-flex p-2 flex-column ">
        <h1 className="centers">{`Hi, ${props.user.displayName}`}</h1>
        <div className="users">
          <p>Find COVID vaccines appointment availability:</p>
        </div>
        <div className="pincss">
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "5px",
              border: "1px solid grey",
              borderRadius: "10px",
              margin: "5px",
            }}>
            <Pin />
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "5px",
              borderRadius: "10px",
              border: "1px solid grey",
              margin: "5px",
            }}>
            <State1 />
          </div>
        </div>
      </div>
    </>
  );
};

const Pin = () => {
  const [pin, setPin] = useState("");
  const [sessions, setSessions] = useState([]);
  const [date1, setDate1] = useState("30-05-2021");
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const handleChange = (e) => {
    setPin(e.target.value);
  };
  const findByPin = () => {
    //TODO: Make date variable
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date1}`
      )
      .then((res) => {
        console.log(res.data);
        setSessions(res.data.sessions);
      });
  };
  /*TODO: #1: Add other necessary details if required
  #2: Add styling
  #3: Implement other APIs from https://apisetu.gov.in/public/api/cowin/
  */
  return (
    <div className="d-flex p-2 flex-column">
      <h3>Find by pin</h3>
      <input type="text" name="pin" value={pin} onChange={handleChange} />
      <br />
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => {
          let date = e.target.value.split("-");
          setDate(e.target.value);
          setDate1(`${date[2]}-${date[1]}-${date[0]}`);
        }}
      />
      <button
        type="button"
        class="btn btn-primary ms-2"
        onClick={findByPin}
        style={{ margin: "10px" }}>
        Find
      </button>
      <ul className="list-group">
        {sessions.length > 0 &&
          sessions.map((data, index) => (
            <li key={`${index}-sessions`} className="list-group-item">
              <div>
                <p>{data.name}</p>
                <p>{data.address}</p>
                <p>{data.center_id}</p>
                <p>{data.vaccine}</p>
                <p>{data.date}</p>
                <div>
                  <p>Slots:&nbsp;</p>
                  {data.slots.map((d) => (
                    <p>{d}</p>
                  ))}
                </div>
                <p>{data.fee_type}</p>
                <p>Minimum age limit: {data.min_age_limit}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Dashboard;
