import {Button, Form, Row, Col, Container, Stack, ListGroup} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';
import GetData from './HandleData';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ExistingMessage(props) {

    const handleEditClick = () => {
        props.editClickHandler(props); 
    }

    const handleDeleteClick = () => {
        props.deleteClickHandler(props); 
    }

    return(
        <Row className='alignCenter mx-2'>

            {/* {console.log(props)} */}
            {/* {console.log(props.values)} */}

            <Col xs={2} className="alignCenter mx-1">
                <p>{props.values.date}</p>
            </Col>
            <Col xs={1} className="alignCenter mx-1">
                <p>{props.values.time}</p>
            </Col>
            <Col xs={4} className="alignCenter mx-1">
                <p>{props.values.title}</p>       
            </Col>

            <Col xs={1} className="alignCenter mx-1">
                {(props.values.recurring && props.values.daily) ? <p>Daily</p> : null}
                {(props.values.recurring && props.values.weekly) ? <p>Weekly</p> : null}
                {(props.values.recurring && props.values.monthly) ? <p>Monthly</p> : null}
                {(props.values.recurring && props.values.yearly) ? <p>Yearly</p> : null}
            </Col>

            <Col xs={true} className="mx-1">
                <Button className="m-1" size="sm" variant='warning' onClick={handleEditClick}><i class="bi bi-pencil-fill"></i></Button>     
                <Button className="m-1" size="sm" variant='danger' onClick={handleDeleteClick}><i class="bi bi-trash3"></i></Button>
            </Col>
        </Row> 
    );
}

export default ExistingMessage; 