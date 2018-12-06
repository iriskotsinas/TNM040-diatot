import React, { Component } from 'react';
import {HashRouter, NavLink, Route, BrowserRouter} from 'react-router-dom';
import Mainpage from "./components/mainpage";
import Newlog from "./components/newlog";
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import logo from './components/img/logo.png';


/* {window.alert("WARNING: This website is a project under construction and is not a reliable source for calculating your insulin dose. DO NOT USE FOR CALCULATING YOUR INSULIN DOSE");} */

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Layout fixedHeader>

            <Header transparent>  {/* style={{color: 'white'}} */}
              <div className="center">
                <NavLink to="mainpage" style={{textDecoration: 'none'}}>
                  <img className="logoTop" src={logo} height="70" alt="logo"/>
                </NavLink>
              </div>
              <NavLink to="mainpage" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Help</NavLink>
            </Header>

            <Drawer title="Menu">
              <Navigation>
                <a href="/">Log book</a>
                <br></br><br></br><br></br>
                <p>------Settings------</p>
                <a href="/">General</a>
                <a href="/">Insulin</a>
                <a href="/">Dosing</a>
                <a href="/">Carbs</a>
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
            </HashRouter>
          );
        }
      }
      export default App;
