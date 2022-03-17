import React, { Component } from 'react';
import GetData from './HandleData';
import { NavLink} from 'react-router-dom';
import '../css/layout.css';
import MessageForm from './MessageForm';

import {Button, Container, Row, Col} from 'react-bootstrap';

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
          <h1>Main page stub</h1>
          { mapData(this.state.dataList.length >= 1) }      
        </div>

        <br></br><br></br>

        <Container>

          <Row className='alignCenter'>
            <Col>
              <NavLink to={'../login'}>
                <Button>
                  Log Out
                </Button>
              </NavLink>  
            </Col>
            <Col xs={8}>
              <h1>
                Welcome!
              </h1>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <MessageForm></MessageForm>
          </Row>

          <Row>
            {/* THIS IS WHERE THE LIST OF REMINDERS SHOULD GO */}
          </Row>
          
        </Container>
    </div>
    );
  }
}

export default Main;