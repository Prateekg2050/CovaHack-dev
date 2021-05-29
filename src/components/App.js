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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">
          <a className="navbar-brand" href="#">covi-info</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <SignIn/>
            </form>
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
