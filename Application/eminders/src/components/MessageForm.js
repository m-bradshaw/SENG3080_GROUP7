import {Button, Form, Row, Col, Stack} from 'react-bootstrap';
import '../css/layout.css';
import {React, useState, Component} from 'react';

class MessageForm extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            validated: false, 
            recurring: false,
            editMessage: props.fillData !== null
        }

        // Ensure component state is bound to changes from the following methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleRecurringToggle = this.handleRecurringToggle.bind(this); 
        this.handleValidSubmission = this.handleValidSubmission.bind(this); 
    }

    componentDidMount() {
        console.log("MessageForm - Mount");
    }

    componentDidUpdate() {
        console.log("MessageForm - Update")
        if (this.props.fillData === null) {
            
        }
        //this.setState({editMessage: (this.props.fillData !== null)})
    }
    
    handleSubmit = (event) => {

        const form = event.currentTarget;
        const valid = form.checkValidity(); 
        if (!valid) {
            // Stop the page from reloading
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.handleValidSubmission(event); 
        }

        // Validation has been done (set colours)
        this.setState({validated: true});
    };

    handleValidSubmission = (event) => {

        // Stop the page from submitting the form itself / reloading.
        // event.preventDefault();
        // event.stopPropagation(); 

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
            this.props.submitResponseHandler(newData); 
        }        
    };

    handleReset = (event) => {
        this.props.resetResponseHandler(event); 
    }

    handleRecurringToggle = (event) => {
        if (event.target) {
            this.setState({recurring: event.target.checked}); 
        }
    };

    render() {
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} onReset={this.handleReset}>
            {console.log("Rendering message form:")}
    
    {
        console.log("Default data in message form: ")}{
        // We should be able to fill the defaults here with props.fillData if applicable
        console.log(this.props.fillData)
    }
                <Form.Group className="mb-3" controlId='formTextMessage'>
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder='Enter message here...' required></Form.Control>      
                    {/* <Form.Control as="textarea" rows={5} placeholder='Enter message here...' required defaultValue={(props.fillData) ? props.fillData.message : null}></Form.Control>       */}
                </Form.Group>        
    
                <Form.Group className="mb-3" controlId='formDate'>
                    <Form.Label>Date:</Form.Label>
                    {/* <Form.Control type="date" required defaultValue={(props.fillData) ? props.fillData.date : null}></Form.Control>       */}
                    <Form.Control type="date" required></Form.Control>      
                </Form.Group>       
    
                <Form.Group className="mb-3" controlId='formTime'> 
                    <Form.Label>Time:</Form.Label>
                    {/* <Form.Control type="time" required defaultValue={(props.fillData) ? props.fillData.time : null}></Form.Control>       */}
                    <Form.Control type="time" required></Form.Control>      
                </Form.Group>
                
                <Stack direction="horizontal" gap={3} className="alignCenter">
                    <Form.Group className="mb-3" controlId="formRecurringCheckbox" onChange={this.handleRecurringToggle}>
                        <Form.Check type="checkbox" label="Recurring"/>
                        {/* <Form.Check type="checkbox" label="Recurring" checked={(props.fillData) ? props.fillData.recurring : null}/> */}
                    </Form.Group>  
    
                    <Form.Group className="mb-3" controlId="formTimeRadios" disabled={!this.state.recurring}>
                        <Form.Check inline type="radio" name="timeGroup" label="Daily" disabled={!this.state.recurring} id="Daily"/>
                        <Form.Check inline type="radio" name="timeGroup" label="Weekly" disabled={!this.state.recurring} id="Weekly"/>
                        <Form.Check inline type="radio" name="timeGroup" label="Monthly" disabled={!this.state.recurring} id="Monthly"/>
                        <Form.Check inline type="radio" name="timeGroup" label="Yearly" disabled={!this.state.recurring} id="Yearly"/>
                        {/* <Form.Check inline type="radio" name="timeGroup" label="Daily" disabled={!recurring} id="Daily" checked={(props.fillData) ? props.fillData.daily : null}/>
                        <Form.Check inline type="radio" name="timeGroup" label="Weekly" disabled={!recurring} id="Weekly" checked={(props.fillData) ? props.fillData.weekly : null}/>
                        <Form.Check inline type="radio" name="timeGroup" label="Monthly" disabled={!recurring} id="Monthly" checked={(props.fillData) ? props.fillData.monthly : null}/>
                        <Form.Check inline type="radio" name="timeGroup" label="Yearly" disabled={!recurring} id="Yearly" checked={(props.fillData) ? props.fillData.yearly : null}/> */}
                    </Form.Group> 
                </Stack>
    
                <Stack direction="horizontal" gap={3} className='alignCenter'>
                    <Button variant='primary' type='submit'>Submit</Button>  
                    <Button variant='primary' type='reset' value="Reset">Reset</Button>  
                </Stack>
    
            </Form> 
        );
    }    
}

export default MessageForm; 