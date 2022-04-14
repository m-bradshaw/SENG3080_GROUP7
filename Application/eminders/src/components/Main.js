import React, { Component } from 'react';
import RequestJsonData from './HandleData';
import { NavLink} from 'react-router-dom';
import '../css/layout.css';
import MessageForm from './MessageForm';

import {Button, Container, Row, Col, Stack} from 'react-bootstrap';
import ExistingMessage from './ExistingMessage';

class Main extends Component {

  // Initialize the state
  constructor(props){      
    super(props);    
    this.state = {
        dataList: [],
        currentData: null, // We want to be able to set this with data from a clicked reminder (to edit)
    }
    this.dataSource = "api/stub/main";

    this.messageFormSubmit = this.messageFormSubmit.bind(this); 
    this.setData = this.setData.bind(this); 
    this.existingMessageDelete = this.existingMessageDelete.bind(this); 
    this.existingMessageEdit = this.existingMessageEdit.bind(this); 
  }

  logState() {
    console.log("dataList:");
    console.log(this.state.dataList); 
    console.log("currentData:");
    console.log(this.state.currentData);
  }

  // Fetch the list on first mount
  componentDidMount() {
    console.log("componentDidMount");
    RequestJsonData(this.dataSource, this.setData);
  }

  compoenentDidUpdate() {
    console.log("componentDidUpdate");
    RequestJsonData(this.dataSource, this.setData); 
  }

  // Sets the list of existing reminders
  setData = (json) => {
    if (json) {
        this.setState({dataList: json});
    }
    this.logState(); 
  }

  // This method can be called from the MessageForm
  // Basically in here we want to be able to push the data to the server for either post or patch
  messageFormSubmit = (json) => {
    if (json) {
        console.log("messageFormSubmit called in Main");
    }

    this.logState(); 
  }

  // Button handler for editing an existing message. 
  // In here we want to be able to fill in the fields of the create/edit area (and reload it) with the values from the existing message. 
  existingMessageEdit = (value) => {
    console.log("Existing message edit clicked");
    this.setState({currentData: value});
    console.log(value); 
  }

  // We should probably do a toast popup or something to confirm in here before actually removing from our list. 
  existingMessageDelete = (value) => {
    console.log("Existing message delete clicked");    
    console.log(value); 
  }

  render() {
    console.log("Rendering Main:");
    const jsonObject = this.state.dataList;
    //const currentFill = this.state.currentData; 
    this.logState();

    // Map the incoming server data to a list of ExistingMessage components
    var mapData = (show) => {
        if (show) {
            return (
                <Container className="alignCenter">
                  {
                    jsonObject.map((value, index) => {
                        return (
                          <ExistingMessage date={value.date} message={value.message} time={value.time} key={index} editClickHandler={this.existingMessageEdit} deleteClickHandler={this.existingMessageDelete}>{index}</ExistingMessage>                                                    
                        );
                    })
                  }
                </Container>
            );
        }
        else {
            return (
                <div>NO ITEMS AVAILABLE FROM SERVER</div>
            );
        }
    }

    return (
      <div>
        <Container className='m-3'>
          <NavLink to={'../login'}>
            <Button>Log Out</Button>
          </NavLink>  
        </Container>

        <Container className='flex'>
          <div className='m-3'>

            <Stack gap={4} className="mx-auto">
              <h1 className='alignCenter'>Welcome!</h1>

              <h4>Create/Edit Reminder:</h4> 
              <MessageForm responseHandler={this.messageFormSubmit} fillData={this.state.currentData}></MessageForm>

              <h4>My Reminders:</h4> 

              <div>
                { mapData(this.state.dataList.length >= 1) }    
                {/* THIS IS WHERE THE LIST OF REMINDERS SHOULD GO */}
              </div>

            </Stack>

          </div>           
        </Container>

      </div>
    );
  }
}

export default Main;