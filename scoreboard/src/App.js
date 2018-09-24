import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'
import User1 from './components/User1'
import User2 from './components/User2'

import UserBoard from './components/UserBoard'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My First React App</h1>
        </header>
        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <User />
          <User1 />
          <User2 />
          {/* <UserBoard /> */}
        
            {/* <div>
                <h1>User Board</h1>
                  <div>
                    <p>
                      "User: "
                      <b>Alice</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      "User: "
                      <b>Dana</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      "User: "
                      <b>Mark</b>
                    </p>
                  </div>
                  
            </div> */}
				

        </main>

        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }


}

export default App;
