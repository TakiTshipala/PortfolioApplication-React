import React from "react";
import "./App.scss";
import Login from "./components/Login";
import Logout from './components/Logout';
import Admin from './components/Admin';
import Register from './components/Register';
import RegisterGoogle from './components/RegisterGoogle';
import Header from "./components/Header";
import Error from "./Pages/Error";
import Placeholderone from "./Pages/Placeholderone";
import Placeholdertwo from "./Pages/Placeholdertwo";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Admin" component={Admin}/>
                <Route path="/Logout" component={Logout}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/Placeholderone" component={Placeholderone}/>
                <Route path="/Placeholdertwo" component={Placeholdertwo}/>
                <Route path="/RegisterGoogle" component={RegisterGoogle}/>
                <Route component={Error}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
