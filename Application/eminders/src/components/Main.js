import React, { Component } from 'react';
import RequestJsonData from './HandleData';
import { NavLink} from 'react-router-dom';
import '../css/layout.css';
import {Button, Container, Row, Col, Stack, ListGroup, Form} from 'react-bootstrap';
import ExistingMessage from './ExistingMessage';

class Main extends Component {

  // Initialize the state
  constructor(props){      
    super(props); 

    this.state = {
      dataList: [],
      currentData: null
    }
    this.dataSource = "api/stub/main";

    // Ensure component state is bound to changes from the following methods
    this.setExistingRemindersList = this.setExistingRemindersList.bind(this); 
    this.handleFormReset = this.handleFormReset.bind(this);     
    this.existingMessageDelete = this.existingMessageDelete.bind(this); 
    this.existingMessageEdit = this.existingMessageEdit.bind(this); 
    this.handleFormSubmit = this.handleFormSubmit.bind(this); 
  }
  
  // Fetch the list on first mount
  componentDidMount() {
    console.log("Main - Mount");
    RequestJsonData(this.dataSource, this.setExistingRemindersList);
  }

  componentDidUpdate() {
    console.log("Main - Update");
    // RequestJsonData(this.dataSource, this.setData); 
  }

  logState() {
    console.log("dataList:");
    console.log(this.state.dataList); 
    console.log("currentData:");
    console.log(this.state.currentData);
  }

  triggerAlert(message) {
    alert(message); 
  }



  logOutButton = () => {
    return (
      <Container className='m-3'>
        <NavLink to={'../login'}>
          <Button>Log Out</Button>
        </NavLink>  
      </Container>
    )
  }



  // Sets the list of existing reminders
  setExistingRemindersList = (json) => {
    if (json) {
        this.setState({dataList: json});
    }
    this.logState(); 
  }

  // Map the incoming server data to a list of ExistingMessage components
  mapExistingMessages = (show) => {
    const jsonObject = this.state.dataList;
    if (show) {
        return (
            <Container className="alignCenter">
              <ListGroup variant="flush">
                {
                  jsonObject.map((value, index) => {
                      return (
                        <ListGroup.Item key={index}>
                          <ExistingMessage values={value} key={index} editClickHandler={this.existingMessageEdit} deleteClickHandler={this.existingMessageDelete}>{index}</ExistingMessage>                                                    
                        </ListGroup.Item>                            
                      );
                  })
                }
              </ListGroup>
            </Container>
        );
    }
    else {
        return (
            <div>NO ITEMS AVAILABLE FROM SERVER</div>
        );
    }
  }

  // We should probably do a toast popup or something to confirm in here before actually removing from our list. 
  existingMessageDelete = (data) => {
    var msg = "Existing message delete clicked";
    console.log(msg);    
    console.log(data); 
    this.triggerAlert(msg); 
  }

  // Button handler for editing an existing message. 
  // In here we want to be able to fill in the fields of the create/edit area (and reload it) with the values from the existing message. 
  existingMessageEdit = (data) => {
    this.setState({
      currentData: data.values
    });
  }


  
  mainForm = () => {
    return (
      <Form noValidate validated={this.state.validated} onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>

        <Form.Group className="mb-3" controlId='formTextMessage'>
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={5} required placeholder='Enter message here...' defaultValue={(this.props.fillData) ? this.props.fillData.message : ""}></Form.Control>      
        </Form.Group>        

        <Form.Group className="mb-3" controlId='formDate'>
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" required defaultValue={(this.props.fillData) ? this.props.fillData.date : null}></Form.Control>           
        </Form.Group>       

        <Form.Group className="mb-3" controlId='formTime'> 
            <Form.Label>Time:</Form.Label>
            <Form.Control type="time" required defaultValue={(this.props.fillData) ? this.props.fillData.time : null}></Form.Control>      
        </Form.Group>

        <Stack direction="horizontal" gap={3} className="alignCenter">

            <Form.Group className="mb-3" controlId="formRecurringCheckbox" >
                <Form.Check type="checkbox" label="Recurring" defaultChecked={(this.props.fillData) ? this.props.fillData.recurring : false}/>
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formTimeRadios">
                <Form.Check inline type="radio" name="timeGroup" label="Daily" id="Daily" checked={
                    this.state.daily
                } onChange={this.handleRadioChange}/>
                <Form.Check inline type="radio" name="timeGroup" label="Weekly" id="Weekly" checked={
                    this.state.weekly
                } onChange={this.handleRadioChange}/>
                <Form.Check inline type="radio" name="timeGroup" label="Monthly" id="Monthly" checked={
                    this.state.monthly
                } onChange={this.handleRadioChange}/>
                <Form.Check inline type="radio" name="timeGroup" label="Yearly" id="Yearly" checked={
                    this.state.yearly
                } onChange={this.handleRadioChange}/>
            </Form.Group> 
    
        </Stack>

        <Stack direction="horizontal" gap={3} className='alignCenter'>
            <Button variant='primary' type='submit'>Submit</Button>  
            <Button variant='primary' type='reset' value="Reset">Reset</Button>  
        </Stack>

      </Form> 
    )
  }

  handleFormSubmit = (event) => {

    console.log(this.props); 
    console.log(this.state); 
    console.log(event); 

    const form = event.currentTarget;
    const valid = form.checkValidity(); 
    if (!valid) {
        // Stop the page from reloading
        event.preventDefault();
        event.stopPropagation();
    }
    else {
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
        console.log(newData); 
        alert(newData); 
      }  
    }

    // Validation has been done (set colours)
    this.setState({
        validated: true
    });
  };

  handleFormReset = (json) => {

    this.triggerAlert("Message form Reset triggered!");
    if (json) {
        console.log("messageFormReset called in Main");
    }
    this.setState({
      currentData: null
    });
    
  }



  render() {
    console.log("Rendering Main:");
    return (
      <div>

        {this.logOutButton()}

        <Container className='flex'>
          <div className='m-2'>
            <Stack gap={4} className="mx-auto">

              <h1 className='alignCenter'>Welcome!</h1>

              <h4>Create/Edit Reminder:</h4> 
              
              {this.mainForm()}

              <h4>My Reminders:</h4> 

              <div>
                { this.mapExistingMessages(this.state.dataList.length >= 1) }    
              </div>

            </Stack>
          </div>           
        </Container>

      </div>
    );
  }
}

export default Main;