import axios from "axios";
import React, { useState } from "react";
import { SignOut } from "../firebase";
import State1 from './State1';

import '../index.css';
import {button} from "react-bootstrap";
const Dashboard = (props) => {
  return (
    <>
      <div className='bg-light'>
      <div className="users">
      <p>{`Hi, ${props.user.displayName}`}</p>
      <p>Find COVID vaccines appointment availability:</p>
      </div>
      <div className="pincss">
      <Pin />
       </div>
      <br/>
      <State1/>
      </div>
   
    </>
  );
};

const Pin = () => {
  const [pin, setPin] = useState("");
  const [sessions, setSessions] = useState([]);
  const handleChange = (e) => {
    setPin(e.target.value);
  };
  const findByPin = () => {
    //TODO: Make date variable
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=29-05-2021`
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
    <div>
      <h3>Find by pin</h3>
      <input type="text" name="pin" value={pin} onChange={handleChange} />
      <button type="button" class="btn btn-primary ms-2" onClick={findByPin}>Find</button>
      <ul>
        {sessions.length > 0 &&
          sessions.map((data, index) => (
            <li key={`${index}-sessions`}>
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
