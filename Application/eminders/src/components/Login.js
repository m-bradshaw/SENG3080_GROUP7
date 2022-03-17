import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import GetData from './HandleData';

import cn from 'classnames';
import Button from 'react-bootstrap/Button';
import styles from '../css/Loginscreen.module.scss';

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
                    <h1>Project Login STUB</h1>                    
                    { mapData(this.state.dataList.length >= 1) }    
                </div>

                <div>
                    <div className={`loginscreen ${cn(styles.block, styles.block_layout)}`}>
                    <div className={cn(styles.flex, styles.flex_layout)}>
                        <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>
                        {'e-minders'}
                        </h1>
                        <h4 className={cn(styles.highlights, styles.highlights_layout)}>
                        {'Username'}
                        </h4>
                        <div className={cn(styles.box, styles.box_layout)} />
                        <h4 className={cn(styles.highlights, styles.highlights_layout1)}>
                        {'Password'}
                        </h4>
                        <div className={cn(styles.box, styles.box_layout1)} />

                        <div className={cn(styles.flex1, styles.flex1_layout)}>
                        <Button className={cn(styles.text_body, styles.text_body_layout)}>
                            {'Create Account'}
                        </Button>
                        <div className={cn(styles.flex1_spacer)} />
                        <Button className={cn(styles.text_body, styles.text_body_layout)}>Forgot Password</Button>
                        </div>

                        <NavLink to={'../main'}>
                        <Button className={cn(styles.image, styles.image_layout)}>Login</Button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;