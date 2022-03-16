import React, { Component } from 'react';
import GetData from './HandleData';

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

    return (
      <div className="App">
        <h1>List of Items from server: (Stub MAIN)</h1>
        { mapData(this.state.dataList.length >= 1) }      
      </div>
    );
  }
}

export default Main;