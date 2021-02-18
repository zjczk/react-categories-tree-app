import React, { Component } from 'react';

import './App.css';

import Entries from '../components/Entries/Entries';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          entries: [ 
            {
            name: 'Category article', 
            subOptions: [
              {
                name: `Category article ${Math.floor(Math.random() * 10) + 1}`,
                subOptions: []
              },
              {
                name: `Category article ${Math.floor(Math.random() * 10) + 1}`,
                subOptions: [
                  {
                    name: `Category article ${Math.floor(Math.random() * 10) + 1}`,
                    subOptions: []
                  },
                  {
                    name: `Category article ${Math.floor(Math.random() * 10) + 1}`,
                    subOptions: []
                  }
                ]
              }
            ]
          }
        ]
        };
      }

  render() {
    return (
      <div className="App">
        <Entries
        entries={this.state.entries}
        trigger={() => {this.setState({entries: this.state.entries})}}
        editTrigger={() => {this.setState({entries: this.state.entries})}}
        />
      </div>
    );
  }
}

export default App;
