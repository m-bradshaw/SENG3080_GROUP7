import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GetData from './HandleData';
import '../css/layout.css';

import {Button, Container, Form, Row, Col} from 'react-bootstrap';

class Login extends Component {
    // Initialize the state
    constructor(props){      
        super(props);    
        this.state = {
            dataList: []
        }
        this.dataSource = "api/stub/login";
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
                    <h1>Project Login stub</h1>                    
                    { mapData(this.state.dataList.length >= 1) }                        
                </div>

                <br></br><br></br>

                <Container>
                    <Row className='alignCenter'>
                        <Col></Col>
                        <Col xs={8}>
                            <h1>e-minders</h1>
                        </Col>
                        <Col></Col>                        
                    </Row>
                    <Row className='alignCenter'>
                        <Col xs={8}>
                            <Form>
                                <Form.Group className="mb-3" controlId='formBasicText'>
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="username" placeholder='Username'></Form.Control>      
                                </Form.Group>       
                                <Form.Group className="mb-3" controlId='formBasicText'>
                                    <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
                                    <Form.Control type="password" id="inputPassword5" aria-describedby='passwordHelpBlock'></Form.Control>      
                                </Form.Group>  
                                <NavLink to={'../main'}>
                                    <Button variant='primary' type='submit'>Login</Button>
                                </NavLink>
                            </Form>
                        </Col>
                    </Row>
                    <Row  className='alignCenter'>
                        <Col>
                            <Button>Create Account</Button>
                        </Col>
                        <Col></Col>
                        <Col>
                            <Button >Forgot Password</Button>
                        </Col>
                    </Row>                    
                </Container>
            </div>
        );
    }
}
export default Login;