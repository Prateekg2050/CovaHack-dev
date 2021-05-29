import axios from "axios";
import React, { useEffect, useState } from "react";

 const District = (props) => {

const [sessions, setSessions] = useState([]);

    useEffect(()=>{
      findByDistrict_id();
    },[props.district_id])
    
    const findByDistrict_id = () => {
      //TODO: Make date variable
      axios
        .get(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${props.district_id}&date=31-03-2021`
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


  export default District;


