import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itmes: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // fetch call
      .then(res => res.json()) // get parsed json data
      .then(jsonData => { //set to state
        this.setState({
          isLoading: true,
          itmes: jsonData
        })
      })
  }

  render() {
    const margin = { margin: 0 };
    const list = { borderBottom: "1px red solid", padding: "5px" };
    const { isLoading, itmes } = this.state;

    if (!isLoading) {
      return <div>Loading ..... </div>
    } else {
      return (
        <div className="my-class">
          <ul>
            {itmes.map((item) =>
              <li style={list} key={item.id}>Name: {item.name}
                <p style={margin}>Email: {item.email}</p>
              </li>
            )}
          </ul>
        </div >
      );
    }
  }
}

export default App;