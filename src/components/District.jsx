import axios from "axios";
import React, { useEffect, useState } from "react";

 const District = (props) => {

const [sessions, setSessions] = useState([]);

const [date1, setDate1] = useState("30-05-2021");
const [date, setDate] = useState(new Date().toISOString().substr(0, 10));


    useEffect(()=>{
      findByDistrict_id();
    },[props.district_id,date1])
    
    const findByDistrict_id = () => {
      //TODO: Make date variable
      axios
        .get(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${props.district_id}&date=${date1}`
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
        <p>Enter the date</p>
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
        <ul className="list-group">
          {sessions.length > 0 &&
            sessions.map((data, index) => (
              <li key={`${index}-sessions`} className='list-group-item'>
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


