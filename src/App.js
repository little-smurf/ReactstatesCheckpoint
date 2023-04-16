import React from "react";
import './App.css';

class App extends React.Component {

  state = {
    Person: {
      fullName: "Oumayma Selmi",
      bio: "Hello world! This is my react states checkpoint.",
      imgSrc: "./ouma.jpg",
      profession: "Software Engineer"
    },
    shows: false,
    mountedTime: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  toggleShows = () => {
    this.setState({ shows: !this.state.shows })
  }

  render() {
    return (
      <div className="App">
        <button className="btn--secondary" variant="primary" onClick={this.toggleShows}>Click Me</button>
        {this.state.shows &&
          <div>
            <h2>{this.state.Person.fullName}</h2>
            <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} />
            <p>{this.state.Person.bio}</p>
            <p>{this.state.Person.profession}</p>
          </div>
        }
        <p>Component mounted {this.state.mountedTime} seconds ago</p>
      </div>
    );
  }
}

export default App;
/*
Add a button that toggles the show state. When the show state is true, the person's profile will appear.
Create a field that shows the time interval since the last component was mounted using the component lifecycle.
Hint: use the setInterval method.
*/