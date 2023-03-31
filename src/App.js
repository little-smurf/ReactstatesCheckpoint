import React from "react";
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  Person = {
  fullName: "Sara Sem7a",
  bio:"bioexample",
  imgSrc:"imgpathexample",
  profession:"profexample",
  shows: Boolean
  };
  handleClick=()=>this.setState({name:'Arya'})
  render() {
  return(
  <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  </>
  )
  }
  }
export default App;
/*
Add a button that toggles the show state. When the show state is true, the person's profile will appear.
Create a field that shows the time interval since the last component was mounted using the component lifecycle.
Hint: use the setInterval method.
*/