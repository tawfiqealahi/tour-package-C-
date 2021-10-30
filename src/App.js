import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './Components/LoginDetails/Login/Login';
import ErrorPage from './Components/ErrorPage';
import AuthProvider from './Components/Context/AuthProvider';
import Services from './Components/Services/Services';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/service">
            <Services></Services>
          </Route>
        <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/*">
            <ErrorPage></ErrorPage>
          </Route>

        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
