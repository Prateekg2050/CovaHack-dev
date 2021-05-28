import React from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(firebase.auth());
  return (
    <div className="App">
      <header className="App-header">
        <section>{user ? <Dashboard /> : <Landing />}</section>
      </header>
    </div>
  );
}

export default App;
