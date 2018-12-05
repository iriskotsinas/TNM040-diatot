import React, { Component } from 'react';
import {NavLink, Route, BrowserRouter} from 'react-router-dom';
import Mainpage from "./components/mainpage";
import Newlog from "./components/newlog";
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import logo from './components/img/logo.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout fixedHeader>

            <Header className="topBar" transparent style={{color: 'white'}}>
              <div className="center">
                <NavLink to="mainpage" style={{textDecoration: 'none'}}>
                  <img className="logoTop" src={logo} height="70" alt="logo"/>
                </NavLink>
              </div>
              <NavLink to="mainpage" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Help</NavLink>
            </Header>

            <Drawer title="Settings">
              <Navigation>
                <a href="/">Settings</a>
                <a href="/">Your diary</a>
                <a href="/">Add</a>
                <a href="Sök">Blood</a>
              </Navigation>
            </Drawer>

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

                </Layout>
              </div>
            </BrowserRouter>
          );
        }
      }
      export default App;
