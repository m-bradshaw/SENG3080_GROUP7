import React, { Component } from 'react';

class Main extends Component {

  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  compoenentDidUpdate() {
    this.getList(); 
  }

  setData = (json) => {
    console.log("setData called with...");
    console.log(json);
    this.setState({list: json.message});
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/stub/main')
    .then(res => {
        if (res.status !== 200) {
            console.error("Response status: " + res.status.toString()); 
        }
        else {
            return res.json();
        }
    }
    )
    .then(jsonData => {
            this.setData(jsonData); 
        }
    );
  }

  render() {
    console.log("Render called");
    const list = this.state.list;
    console.log(this.state.list);

    var mapItems = (show) => {
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
        { mapItems(this.state.list.length >= 1) }      
      </div>
    );
  }
}

export default Main;