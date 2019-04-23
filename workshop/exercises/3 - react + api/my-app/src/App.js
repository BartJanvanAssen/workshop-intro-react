import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {items: ['a', 'b', 'c']}
  }

  componentDidMount () {
    fetch('http://localhost:3000')
    .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          alert(data)
          console.log(data);
          this.setState({items: data.stack})
        });
      }
    )
    .catch(function(err) {
      alert('Fetch Error :-S', err);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {
              this.state.items.map(item => {
                return (
                  <h1>{item}</h1>
                )
              })
            }
          </div>
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
    );
  }
}

export default App;
