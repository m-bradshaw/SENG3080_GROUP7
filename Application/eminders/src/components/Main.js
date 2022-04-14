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
        currentData: null, 
    }
    this.dataSource = "api/stub/main";
  }

  // Fetch the list on first mount
  componentDidMount() {
    console.log("compoenentDidMount");
    RequestJsonData(this.dataSource, this.setData);
  }

  compoenentDidUpdate() {
    console.log("compoenentDidUpdate");
    RequestJsonData(this.dataSource, this.setData); 
  }

  setData = (json) => {
    if (json) {
        console.log("setData called with...");
        console.log(json);
        this.setState({dataList: json});
    }

    // console log
    console.log("DataList:");
    console.log(this.state.dataList); 
    console.log("CurrentData:")
    console.log(this.state.currentData);
  }

  // This method can be called from the MessageForm
  messageFormSubmit = (json) => {
    if (json) {
        console.log("messageFormSubmit called in Main with...");
        console.log(json);
        this.setState({currentData: json});
    }
  }

  render() {
    const jsonObject = this.state.dataList;
    const fillData = this.state.currentData; 

    // Map the incoming server data to a list of ExistingMessage components
    var mapData = (show) => {
        if (show) {
            return (
                <Container className="alignCenter">
                  {
                    jsonObject.map((value, index) => {
                        return (
                          <ExistingMessage date={value.date} message={value.message} time={value.time} key={index}>{index}</ExistingMessage>                                                    
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
              <MessageForm responseHandler={this.messageFormSubmit} fillData={fillData}></MessageForm>

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