import {Button, Form, Row, Col, Container, Stack} from 'react-bootstrap';
import '../css/layout.css';
import {Children, React, useState} from 'react';
import GetData from './HandleData';

function ExistingMessage(props) {

    const handleEditClick = () => {
        props.editClickHandler(props); 
    }

    const handleDeleteClick = () => {
        props.deleteClickHandler(props); 
    }

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
            <Col>
                <Stack direction="horizontal" gap={3} className="alignCenter">
                    <Button size="sm" variant='warning' onClick={handleEditClick}>Edit</Button>
                    <Button size="sm" variant='danger' onClick={handleDeleteClick}>Delete</Button>
                </Stack>                
            </Col>
        </Row> 
    );
}

export default ExistingMessage; 