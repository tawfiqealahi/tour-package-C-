import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import MyOrder from "../../MyOrder/MyOrder";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useFirebase();
  const { url, path } = useRouteMatch();

  // const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`https://desolate-citadel-65887.herokuapp.com/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user.email]);
  return (
    <div>
      <div className="row">
        <h3>Dashboard</h3>
        <div className="col-md-3 p-5 bg-secondary">
          <div className="dashboard">
            <Link to={`${url}`}>
              <li className="text-white ">My Order</li>
            </Link>
            <Link to={`${url}/addreview`}>
              <li className="text-white">Review</li>
            </Link>

            {isAdmin && (
              <div>
                <h5 className="text-white mt-3">Admin</h5>
                <Link to={`${url}/manageAllOrder`}>
                  <li className="text-white">Manage All Order</li>
                </Link>
                <Link to={`${url}/addProduct`}>
                  <li className="text-white">Add A Product</li>
                </Link>
                <Link to={`${url}/makeAdmin`}>
                  <li className="text-white">Make Admin</li>
                </Link>
                <Link to={`${url}/manageProducts`}>
                  <li className="text-white">Manage Products</li>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-9">
          <Switch>
            <Route exact path={path}>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path={`${path}/addreview`}>
              <AddReview></AddReview>
            </Route>

            <Route exact path={`${path}/manageAllOrder`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
