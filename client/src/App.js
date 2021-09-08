import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;