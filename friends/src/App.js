
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./components/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/login' >Login</Link>
        </nav>
        <Switch>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
