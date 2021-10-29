import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Button ,} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
           <Link to='/login'> 
           <Button> GOOGLE  LOGIN
            </Button>
           </Link>
        </div>
    );
};

export default Login;