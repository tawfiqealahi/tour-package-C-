import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import AllProducts from "./components/AllProducts/AllProducts";
import OurAbout from "./components/OurAbout/OurAbout";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";

function App() {

  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path="/products/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/about">
            <OurAbout></OurAbout>
          </Route>
          <Route path="/logIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    
  );

}

export default App;


