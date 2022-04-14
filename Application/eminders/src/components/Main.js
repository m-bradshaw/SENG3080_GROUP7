import React, { Component } from 'react';
import GetData from './HandleData';
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
        dataList: [[]]
    }
    this.dataSource = "api/stub/main";
  }

  // Fetch the list on first mount
  componentDidMount() {
    GetData(this.dataSource, this.setData);
  }

  compoenentDidUpdate() {
    GetData(this.dataSource, this.setData); 
  }

  setData = (json) => {
    if (json) {
        console.log("setData called with...");
        console.log(json);
        this.setState({dataList: json});
    }
  }

  render() {
    const jsonObject = this.state.dataList;

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
              <MessageForm></MessageForm>

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