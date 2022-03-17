import {Button, Form, Row, Col, Container} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';
import GetData from './HandleData';

function ExistingMessage(props) {
    return(
        <Container>
        {console.log(props)}
            <h1>{props.date}</h1>
            <p>{props.time}</p>
            <p>{props.message}</p>            
        </Container>
    );
}

export default ExistingMessage; 