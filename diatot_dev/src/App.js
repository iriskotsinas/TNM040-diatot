import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Mainpage from "./components/mainpage";
import Newlog from "./components/newlog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Mainpage/>
            </div>
          )}/>
          <Route exact={true} path='/newlog' render={() => (
            <div className="App">
              <Newlog/>
            </div>
          )}/>
          <Route exact={true} path='/mainpage' render={() => (
            <div className="App">
              <Mainpage/>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
