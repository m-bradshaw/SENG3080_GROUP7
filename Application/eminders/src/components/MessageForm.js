import {Button, Form, Row, Col} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState} from 'react';

function MessageForm(props) {
    const [validated, setValidated] = useState(false);
    const [recurring, setRecurring] = useState(false);
    const [daily, setDaily] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const handleRecurringToggle = (event) => {
        if (event.target) {
            setRecurring(event.target.checked); 
        }
    };

    const handleDailySelected = (event) => {
        if (event.target) {
            var checked = event.target.id === "Daily";
            setDaily(checked); 
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
            
            <Form.Group className="mb-3" controlId="formRecurringCheckbox" onChange={handleRecurringToggle}>
                <Form.Check type="checkbox" label="Recurring" />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="formTimeRadios" disabled={!recurring} onChange={handleDailySelected}>
                <Form.Check inline type="radio" name="timeGroup" label="Daily" disabled={!recurring} id="Daily"/>
                <Form.Check inline type="radio" name="timeGroup" label="Weekly" disabled={!recurring}/>
                <Form.Check inline type="radio" name="timeGroup" label="Monthly" disabled={!recurring}/>
                <Form.Check inline type="radio" name="timeGroup" label="Yearly" disabled={!recurring}/>
            </Form.Group> 
        
            <Form.Group className="mb-3" controlId="formDayCheckbox" disabled={!daily}>
                <Form.Check inline type="checkbox" name="dayGroup" label="Sunday" disabled={!daily}/>
                <Form.Check inline type="checkbox" name="dayGroup" label="Monday" disabled={!daily}/>
                <Form.Check inline type="checkbox" name="dayGroup" label="Tuesday" disabled={!daily}/>
                <Form.Check inline type="checkbox" name="dayGroup" label="Wednesday" disabled={!daily}/>
                <Form.Check inline type="checkbox" name="dayGroup" label="Thursday" disabled={!daily}/>
                <Form.Check inline type="checkbox" name="dayGroup" label="Friday" disabled={!daily}/>
                <Form.Check inline type="checkbox" name="dayGroup" label="Saturday" disabled={!daily}/>
            </Form.Group>

            <div className='alignCenter'>
                <Button variant='primary' type='submit'>Submit</Button>    
            </div>                   

        </Form> 
    );
}

export default MessageForm; 