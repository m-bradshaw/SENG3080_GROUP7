import React from 'react';
import '../css/layout.css';
import GoogleButton from 'react-google-button'

import {Container} from 'react-bootstrap';

export default function Login (props) {

    function googleLogin(route) {
        window.open(route.loginRoute, "_self");
    }

    return (
        <Container className="verticalCenter">            
            <div>
                <h1 className='extraLargeTitle m-3'>e-minders</h1>
                <GoogleButton className='mx-auto' onClick={() => googleLogin(props)}></GoogleButton>
            </div>
        </Container>
    );    
}