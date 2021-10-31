import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Button ,} from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import MenuBar from '../../Header/MenuBar/MenuBar';
// import { useLocation,useHistory } from 'react-router-dom';


const Login = () => {

    const {signInWithGoogle}= useAuth();
   

   

        return (
        <div>
            <MenuBar></MenuBar>
           
           <Button onClick={signInWithGoogle}> GOOGLE  LOGIN
            </Button>
           
        </div>
    );
};

export default Login;