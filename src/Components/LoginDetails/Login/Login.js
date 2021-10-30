import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Button ,} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    // const {signInWithGoogle}= useAuth;

    const handleGoogleSignIn=()=>{
console.log('clicked dfnhvjbfbhjibvjifnbvjirbfjhvbrfbvirfvjfddklfsn,m,vn');
    }

        return (
        <div>
           
           <Button onClick={handleGoogleSignIn}> GOOGLE  LOGIN
            </Button>
           
        </div>
    );
};

export default Login;