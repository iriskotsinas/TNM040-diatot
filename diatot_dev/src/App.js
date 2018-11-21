import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import FirstPage from "./components/FirstPage";
import Log from "./components/Log";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <FirstPage/>
            </div>
          )}/>
          <Route exact={true} path='/log' render={() => (
            <div className="App">
              <Log/>
            </div>
          )}/>
          <Route exact={true} path='/firstpage' render={() => (
            <div className="App">
              <FirstPage/>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
