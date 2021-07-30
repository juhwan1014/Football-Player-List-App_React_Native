import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import PlayerDetail from './components/PlayerDetail';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
        </ul>
        <Switch>
          <Route path="/playerDetail/:id"><PlayerDetail /></Route>
          <Route path="/home"><Home /></Route>
        </Switch>

      </div>
    </Router>
  );
}