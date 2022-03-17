import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import GetData from './HandleData';
import Loginscreen from './Loginscreen';

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

        return (
            <div>
                <div className="App">

                    <h1>Project Login STUB</h1>
                    {/* Link to Main.js */}

                    <NavLink to={'../main'}>
                        <button variant="raised">
                            GO TO MAIN PAGE
                        </button>
                    </NavLink>
                    
                    { mapData(this.state.dataList.length >= 1) }    

                </div>

                <div>
                    <Loginscreen></Loginscreen>
                </div>
            </div>
        );
    }
}
export default Login;