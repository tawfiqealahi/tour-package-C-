import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage/HomePage';
import { Router,Route, Switch } from 'react-router-dom';
import Login from './Components/LoginDetails/Login/Login';



function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <Router>
        <Switch>
        <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
