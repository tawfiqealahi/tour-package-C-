import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './Components/LoginDetails/Login/Login';
import ErrorPage from './Components/ErrorPage';
import AuthProvider from './Components/Context/AuthProvider';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/LoginDetails/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import Orders from './Components/Orders/Orders';
import AllOrders from './Components/AllOrders/AllOrders';



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
          <Route exact path="/orders">
            <Orders></Orders>
          </Route>
          <Route exact path="/allorders">
            <AllOrders></AllOrders>
          </Route>
        <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/servicedetails">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>


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
