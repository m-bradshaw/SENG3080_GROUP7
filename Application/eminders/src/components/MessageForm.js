import {Button, Form, Row, Col} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';

function MessageForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId='formTextMessage'>
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder='Enter message here...' required></Form.Control>      
            </Form.Group>        
            <Form.Group className="mb-3" controlId='formDate'>
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" required></Form.Control>      
            </Form.Group>        
            <Form.Group className="mb-3" controlId='formTime'>
                <Form.Label>Time:</Form.Label>
                <Form.Control type="time" required></Form.Control>      
            </Form.Group> 
            
            <Form.Group className="mb-3" controlId="formRecurringCheckbox">
                <Form.Check type="checkbox" label="Recurring" />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="formTimeRadios">
                <Form.Check inline type="radio" name="timeGroup" label="Daily" />
                <Form.Check inline type="radio" name="timeGroup" label="Weekly" />
                <Form.Check inline type="radio" name="timeGroup" label="Monthly" />
                <Form.Check inline type="radio" name="timeGroup" label="Yearly" />
            </Form.Group> 
        
            <Form.Group className="mb-3" controlId="formDayCheckbox">
                <Form.Check inline type="checkbox" name="dayGroup" label="Sunday" />
                <Form.Check inline type="checkbox" name="dayGroup" label="Monday" />
                <Form.Check inline type="checkbox" name="dayGroup" label="Tuesday" />
                <Form.Check inline type="checkbox" name="dayGroup" label="Wednesday" />
                <Form.Check inline type="checkbox" name="dayGroup" label="Thursday" />
                <Form.Check inline type="checkbox" name="dayGroup" label="Friday" />
                <Form.Check inline type="checkbox" name="dayGroup" label="Saturday" />
            </Form.Group>

            <div className='alignCenter'>
                <Button variant='primary' type='submit'>Submit</Button>    
            </div>                   

        </Form> 
    );
}

export default MessageForm; 