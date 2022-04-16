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
    
    const defaultFormData = {
      message: "", 
      date: "", 
      time: "", 
      recurring: false, 
      daily: false, 
      weekly: false, 
      monthly: false, 
      yearly: false  
    }

    this.state = {
      dataList: [],
      formData: defaultFormData,
      selectedData: {}
    }
    this.dataSource = "api/stub/main";

    // Ensure component state is bound to changes from the following methods
    this.setExistingRemindersList = this.setExistingRemindersList.bind(this); 
    this.resetForm = this.resetForm.bind(this);     
    this.deleteExistingMessage = this.deleteExistingMessage.bind(this); 
    this.editExistingMessage = this.editExistingMessage.bind(this); 
    this.submitForm = this.submitForm.bind(this); 

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
    console.log("formData:");
    console.log(this.state.formData);
  }

  triggerAlert(message) {
    alert(JSON.stringify(message)); 
  }



  logOutButton = () => {
    return (
      <Container className='mt-3'>
        <NavLink to={'../login'}>
          <Button variant='outline-dark'><i class="bi bi-door-closed-fill"></i> Log Out</Button>
        </NavLink>  
      </Container>
    )
  }



  // Sets the list of existing reminders
  setExistingRemindersList = (json) => {
    if (json) {
        this.setState({dataList: json});
    }
    //this.logState(); 
  }

  // Map the incoming server data to a list of ExistingMessage components
  mapExistingMessages = (show) => {
    const jsonObject = [...this.state.dataList];
    if (show) {
      return (
        <Container className="alignCenter">
          <ListGroup className="md-2">
            {
              jsonObject.map((value, index) => {
                  return (
                    <ListGroup.Item key={index} active={((this.state.selectedData) && (value === this.state.selectedData))}>
                      <ExistingMessage values={value} key={index} editClickHandler={this.editExistingMessage} deleteClickHandler={this.deleteExistingMessage}></ExistingMessage>                                                    
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
  deleteExistingMessage = (data) => {
    var msg = "Existing message delete clicked";
    console.log(msg);    
    console.log(data); 
    this.setState({
      selectedData: data.values
    });
    this.triggerAlert(msg); 
  }

  // Button handler for editing an existing message. 
  // In here we want to be able to fill in the fields of the create/edit area (and reload it) with the values from the existing message. 
  editExistingMessage = (data) => {
    var dataCopy = {...data.values}; 
    this.setState({
      formData: dataCopy, 
      selectedData: data.values
    });
  }


  radioCheckUpdated = (event) => {
    console.log("radioCheckUpdated called!")

    var current = this.state.formData; 
    current.daily = event.target.id === "Daily";
    current.weekly = event.target.id === "Weekly";
    current.monthly = event.target.id === "Monthly";
    current.yearly = event.target.id === "Yearly";

    this.setState({formData : current})
  }
  
  recurringCheckUpdated = (event) => {
    console.log("recurringCheckUpdated called!")

    var current = this.state.formData; 
    current.recurring = event.target.checked;
    
    this.setState({formData : current})
  }

  
  mainForm = () => {
    return (
      <Form noValidate validated={this.state.validated} onSubmit={this.submitForm} onReset={this.resetForm}>

        <Form.Group className="mb-3" controlId='formTextMessage'>
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={5} required placeholder='Enter message here...' defaultValue={this.state.formData.message}></Form.Control>      
        </Form.Group>        

        <Form.Group className="mb-3" controlId='formDate'>
          <Form.Label>Date:</Form.Label>
          <Form.Control type="date" required defaultValue={this.state.formData.date}></Form.Control>           
        </Form.Group>       

        <Form.Group className="mb-3" controlId='formTime'> 
          <Form.Label>Time:</Form.Label>
          <Form.Control type="time" required defaultValue={this.state.formData.time}></Form.Control>      
        </Form.Group>

        <Stack direction="horizontal" gap={3} className="alignCenter">

          <Form.Group className="mb-3" controlId="formRecurringCheckbox" >
            <Form.Check type="checkbox" label="Recurring" checked={this.state.formData.recurring} onChange={this.recurringCheckUpdated}/>
          </Form.Group>  

          <Form.Group className="mb-3" controlId="formTimeRadios">
            <Form.Check inline type="radio" name="timeGroup" label="Daily" id="Daily" disabled={!this.state.formData.recurring} checked={this.state.formData.daily} onChange={this.radioCheckUpdated} />
            <Form.Check inline type="radio" name="timeGroup" label="Weekly" id="Weekly" disabled={!this.state.formData.recurring} checked={this.state.formData.weekly} onChange={this.radioCheckUpdated} />
            <Form.Check inline type="radio" name="timeGroup" label="Monthly" id="Monthly" disabled={!this.state.formData.recurring} checked={this.state.formData.monthly} onChange={this.radioCheckUpdated} />
            <Form.Check inline type="radio" name="timeGroup" label="Yearly" id="Yearly" disabled={!this.state.formData.recurring} checked={this.state.formData.yearly} onChange={this.radioCheckUpdated} />
          </Form.Group> 
    
        </Stack>

        <Stack direction="horizontal" gap={3} className='alignCenter'>
          <Button variant='outline-success' type='submit'>Submit</Button>  
          <Button variant='outline-danger' type='reset' value="Reset">Reset</Button>  
        </Stack>

      </Form> 
    )
  }

  submitForm = (event) => {

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
        this.triggerAlert(newData); 
      }  
    }

    // Validation has been done (set colours)
    this.setState({
        validated: true, 
        formData: {
          message: "", 
          date: "", 
          time: "", 
          recurring: false, 
          daily: false, 
          weekly: false, 
          monthly: false, 
          yearly: false                
        }, 
        selectedData: {}
    });
  };

  resetForm = (json) => {

    this.triggerAlert("Message form Reset triggered!");
    if (json) {
        console.log("messageFormReset called in Main");
    }
    this.setState({
      formData: {
        message: "", 
        date: "", 
        time: "", 
        recurring: false, 
        daily: false, 
        weekly: false, 
        monthly: false, 
        yearly: false                
      }, 
      selectedData: {}
    });
    
  }



  render() {
    console.log("Rendering Main:");
    return (
      <div>

        {this.logOutButton()}

        <Container className='mx-auto m-5'>          
            <Stack gap={4}>

              <h1 className='alignCenter'>Welcome!</h1>

              <h4>Create/Edit Reminder:</h4> 
              
              <div>
                {this.mainForm()}
              </div>

              <h4 className='mt-5'>My Reminders:</h4> 

              <div>
                { this.mapExistingMessages(this.state.dataList.length >= 1) }    
              </div>

            </Stack>      
        </Container>

      </div>
    );
  }
}

export default Main;