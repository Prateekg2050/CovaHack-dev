import React, { Component } from 'react';
import {SignOut} from '../firebase';

const Dashboard=()=>{
    return(
        <>
        <div>
            <SignOut/>
        </div>
        </>
    );
};

export default Dashboard;


// export default class Fetchdata extends Component
// {
//     state = {
//         loading: true,
//         person: null

//     }

//     async componentDidMount(){
//         const url = 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//         const res = await fetch(url);
//         const data = await res.json();
//         this.setState({person: data,loading: false})
//         console.log(data)
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.loading || !this.state.person? <div>loading....</div> : <div>{this.state.person.state_id}</div>}
//             </div>
//         );
//     }
// }



























