import React from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import {SignIn,SignOut} from "../firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Form, Nav, FormControl,Carousel} from "react-bootstrap";
function App() {
  const [user] = useAuthState(firebase.auth());
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

        <div className="container-fluid">
          <a className="navbar-brand" href="#">CovaHack</a>
          <div className="" id="navbarTogglerDemo02">
            {user != null ? null: <form className="d-flex">
              <SignIn/>
            </form>}
            
            <form className="d-flex">
              <SignOut/>
            </form>
          </div>
        </div>
      </nav>
     
      <header className="App-header">
        <section>{user ? <Dashboard user={user} /> : <Landing />}</section>
      </header>
    </div>
  );
}

export default App;
