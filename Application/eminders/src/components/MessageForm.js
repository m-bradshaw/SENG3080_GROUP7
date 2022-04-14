import {Button, Form, Row, Col, Stack} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';

function MessageForm(props) {
    const [validated, setValidated] = useState(false);
    const [recurring, setRecurring] = useState(false);
    const [defaultData, setDefaultData] = useState(props.fillData)

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        const valid = form.checkValidity(); 
        if (!valid) {
            // Stop the page from reloading
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            handleValidSubmission(event); 
        }

        // Validation has been done (set colours)
        setValidated(true);
    };

    const handleRecurringToggle = (event) => {
        if (event.target) {
            setRecurring(event.target.checked); 
        }
    };

    const handleValidSubmission = (event) => {

        // Stop the page from submitting the form itself / reloading.
        event.preventDefault();
        event.stopPropagation();

        console.log("Handling Valid Submission");

        if (event.target) {
            var newData = {
                message: event.target[0].value, 
                date: event.target[1].value, 
                time: event.target[2].value, 
                recurring: event.target[3].checked, 
                daily: event.target[4].checked, 
                weekly: event.target[5].checked, 
                monthly: event.target[6].checked, 
                yearly: event.target[7].checked                
            }

            // Call the response handler to set the data in the main component
            props.responseHandler(newData); 
        }        
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
            
            <Stack direction="horizontal" gap={3} className="alignCenter">
                <Form.Group className="mb-3" controlId="formRecurringCheckbox" onChange={handleRecurringToggle}>
                    <Form.Check type="checkbox" label="Recurring"/>
                </Form.Group>  
                <Form.Group className="mb-3" controlId="formTimeRadios" disabled={!recurring}>
                    <Form.Check inline type="radio" name="timeGroup" label="Daily" disabled={!recurring} id="Daily"/>
                    <Form.Check inline type="radio" name="timeGroup" label="Weekly" disabled={!recurring} id="Weekly"/>
                    <Form.Check inline type="radio" name="timeGroup" label="Monthly" disabled={!recurring} id="Monthly"/>
                    <Form.Check inline type="radio" name="timeGroup" label="Yearly" disabled={!recurring} id="Yearly"/>
                </Form.Group> 
            </Stack>

            <div className='alignCenter'>
                <Button variant='primary' type='submit'>Submit</Button>    
            </div>                   

        </Form> 
    );
}

export default MessageForm; 