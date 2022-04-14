import {Button, Form, Row, Col, Container} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';
import GetData from './HandleData';

function ExistingMessage(props) {
    return(
        <Container>
            {console.log(props)}
            <Row>
                <Col md="2">
                    <p>{props.date}</p>
                </Col>
                <Col md="2">
                    <p>{props.time}</p>
                </Col>
                <Col md="auto">
                    <p>{props.message}</p>       
                </Col>
            </Row> 
        </Container>
    );
}

export default ExistingMessage; 