import React from 'react';
import '../css/layout.css';

import {Button, Container, Row, Col} from 'react-bootstrap';

export default function Login (props) {

    function googleLogin(route) {
        window.open(route.loginRoute, "_self");
    }

    return (
        <Container className="alignCenter">    
            <Row className='alignCenter'>
                <Col xs={8}>
                    <h1>e-minders</h1>
                    <Button variant='primary' onClick={() => googleLogin(props)}><i className="bi bi-google"></i> Login with Google</Button>
                </Col>
            </Row>       
        </Container>
    );    
}