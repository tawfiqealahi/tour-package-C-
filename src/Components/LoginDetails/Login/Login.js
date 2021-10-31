import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import MenuBar from '../../Header/MenuBar/MenuBar';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// import { useLocation,useHistory } from 'react-router-dom';


const Login = () => {

    const {signInWithGoogle}= useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/servicedetails';
   
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {console.log(error);});
    }

   

        return (
            <div>
                 <MenuBar></MenuBar>
            <div className="login-form">
               
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? 
                    <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
        </div>
    );
};

export default Login;