import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './Components/LoginDetails/Login/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HomePage></HomePage>

        <Switch>
        <Route exact path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
