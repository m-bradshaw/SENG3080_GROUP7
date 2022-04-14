import {Button, Form, Row, Col, Container} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';
import GetData from './HandleData';

function ExistingMessage(props) {
    return(
        <Row>
            {console.log(props)}
            <Col xs={3}>
                <p>{props.date}</p>
            </Col>
            <Col xs={2}>
                <p>{props.time}</p>
            </Col>
            <Col>
                <p>{props.message}</p>       
            </Col>
        </Row> 
    );
}

export default ExistingMessage; 