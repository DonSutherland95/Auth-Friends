import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from './components/FriendsList';
import AddFriend from "./components/AddFriend"

function App() {
  
  return (
    <Router>
      <div className="App">
      {/*
        <nav>
          <Link to='/login' >Login</Link>
        </nav>
        <Switch>
          <Route exact path='/login' component={Login}/>
        </Switch>
      */}
      <ul>
          <li>
            <Link to='/login' >Login</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
      </ul>
      <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList}  />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
