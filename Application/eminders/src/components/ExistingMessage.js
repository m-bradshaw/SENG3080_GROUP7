import {Button, Form, Row, Col, Container, Stack} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';
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
            {console.log(props.values)}

            <Col xs={2}>
                <p>{props.values.date}</p>
            </Col>
            <Col xs={1}>
                <p>{props.values.time}</p>
            </Col>
            <Col xs={4}>
                <p>{props.values.message}</p>       
            </Col>

            <Col xs={1} className="alignCenter">
                {(props.values.daily) ? <p>Daily</p> : null}
                {(props.values.weekly) ? <p>Weekly</p> : null}
                {(props.values.monthly) ? <p>Mmonthly</p> : null}
                {(props.values.yearly) ? <p>Yearly</p> : null}
            </Col>

            <Col xs={2}>
                <Stack direction="horizontal" gap={2}>
                    <Button size="sm" variant='outline-warning' onClick={handleEditClick}>Edit</Button>
                    <Button size="sm" variant='outline-danger' onClick={handleDeleteClick}>Delete</Button>
                </Stack>                
            </Col>

        </Row> 
    );
}

export default ExistingMessage; 