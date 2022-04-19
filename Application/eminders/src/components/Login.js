import React from 'react';
import '../css/layout.css';
import GoogleButton from 'react-google-button'

import {Container} from 'react-bootstrap';

export default function Login (props) {

    function googleLogin() {
        console.log("Clicked")
        console.log(props.loginRoute)
        // window.open(route.loginRoute, "_self");
        window.open(props.loginRoute, "_self");
    }

    return (
        <Container className="verticalCenter">            
            <div>
                <h1 className='extraLargeTitle m-3'>e-minders</h1>
                <GoogleButton className='mx-auto' onClick={googleLogin}></GoogleButton>
            </div>
        </Container>
    );    
}