import logo from './logo.svg';
import React from "react";
import './css/App.css';

function App() {
  const [serverData, setServerData] = React.useState(null); 

  React.useEffect(() => {
    // https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setServerData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{!serverData ? "Loading server data..." : serverData}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
