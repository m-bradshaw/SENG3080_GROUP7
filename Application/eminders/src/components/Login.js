import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import GetData from './HandleData';
import '../css/layout.css';

import {Button, Container, Form, Row, Col} from 'react-bootstrap';

class Login extends Component {
    // Initialize the state
    constructor(props){      
        super(props);    
        this.state = {
            dataList: [], 
            formValidated: false,
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

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({formValidated: true});
    };

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
                {(this.state.formValidated) ? <Navigate to={'../main'}></Navigate> : null}
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
                            <Form noValidate validated={this.state.formValidated} onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId='formUsername'>
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="username" placeholder='Username' required></Form.Control>      
                                </Form.Group>       
                                <Form.Group className="mb-3" controlId='formPassword'>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" aria-describedby='passwordHelpBlock' required></Form.Control>      
                                </Form.Group>  
                                <Button variant='primary' type='submit'>Login</Button>
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