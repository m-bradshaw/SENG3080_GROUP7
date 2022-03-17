import React, { Component } from 'react';
import GetData from './HandleData';
import { NavLink} from 'react-router-dom';

import {Button, Form} from 'react-bootstrap';

class Main extends Component {

  // Initialize the state
  constructor(props){      
    super(props);    
    this.state = {
        dataList: []
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
        this.setState({dataList: json.message});
    }
  }

  render() {
    const list = this.state.dataList;

    var mapData = (show) => {
        if (show) {
            return (
                <div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        );
                    })
                }
                </div>
            );
        }
        else {
            return (
                <div>NO ITEMS AVAILABLE FROM SERVER</div>
            );
        }
    }

    const divStyle={backgroundColor: 'green'};
    return (
      <div>
        <div style={divStyle}>
          <h1>List of Items from server: (Stub MAIN)</h1>
          { mapData(this.state.dataList.length >= 1) }      
        </div>
        <div>
          <NavLink to={'../login'}>
            <Button>
              Log Out
            </Button>
          </NavLink>  
          <br>        
          </br>
          <h1>
            Welcome!
          </h1>     
          <h4>
            Create/Edit Reminder:
          </h4>        
          <Form>
            <Form.Group className="mb-3" controlId='formTextMessage'>
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder='Enter message here...'></Form.Control>      
            </Form.Group>        
            <Form.Group className="mb-3" controlId='formDate'>
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" placeholder='Enter message here...'></Form.Control>      
            </Form.Group>        
            <Form.Group className="mb-3" controlId='formTime'>
              <Form.Label>Time:</Form.Label>
              <Form.Control type="time" placeholder='Enter message here...'></Form.Control>      
            </Form.Group>    
            <Form.Group className="mb-3" controlId="formRecurringCheckbox">
              <Form.Check type="checkbox" label="Recurring" />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="formTimeRadios">
              <Form.Check type="radio" name="timeGroup" label="Daily" />
              <Form.Check type="radio" name="timeGroup" label="Weekly" />
              <Form.Check type="radio" name="timeGroup" label="Monthly" />
              <Form.Check type="radio" name="timeGroup" label="Yearly" />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="formDayCheckbox">
              <Form.Check type="checkbox" name="dayGroup" label="Sunday" />
              <Form.Check type="checkbox" name="dayGroup" label="Monday" />
              <Form.Check type="checkbox" name="dayGroup" label="Tuesday" />
              <Form.Check type="checkbox" name="dayGroup" label="Wednesday" />
              <Form.Check type="checkbox" name="dayGroup" label="Thursday" />
              <Form.Check type="checkbox" name="dayGroup" label="Friday" />
              <Form.Check type="checkbox" name="dayGroup" label="Saturday" />
            </Form.Group> 
            <Button variant='primary' type='submit'>Submit</Button>
            <Button variant='teritary' type='cancel'>Cancel</Button>
          </Form> 
        </div>
    </div>
    );
  }
}

export default Main;