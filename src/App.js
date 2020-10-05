import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from "./components/Registration/Registration";
import SelectedTopic from "./components/SelectedTopic/SelectedTopic";
import VolunteerList from "./components/VolunteerList/VolunteerList";


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        
        <PrivateRoute path="/registration/:id">
              <Registration></Registration>
        </PrivateRoute>
        <Route path="/list">
            <SelectedTopic></SelectedTopic>
        </Route>
        <Route path="/volunteer">
            <VolunteerList/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
