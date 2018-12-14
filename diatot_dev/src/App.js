import React, { Component } from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import Mainpage from "./components/mainpage";
import Help from "./components/help";
import Newlog from "./components/newlog";
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import logo from './components/img/logo.png';
import pil2 from './components/img/pil2.png';

/* {window.alert("WARNING: This website is a project under construction and is not a reliable source for calculating your insulin dose. DO NOT USE FOR CALCULATING YOUR INSULIN DOSE");} */

class App extends Component {

  constructor() {
    super();
    this.state = {
      showPopup: false,
      activeInsulinList: []
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  /* -------------------------------- */
/*  calcActiveInsulin(){
    let x = 0.0;

    for(let i=0; i < this.state.activeInsulinList.length; i++) {
      x += this.state.activeInsulinList[i];
    }
    return x;
  }

  addActiveInsulin(){
    let dummyList = this.state.activeInsulinList.slice().push(
      new ActiveIns(5, this.state.activeInsulinTime)
    );

    this.setState({
      activeInsulinList: dummyList,
    })
  }*/

  /* -------------------------------- */


  render() {
    return (
      <HashRouter>
        <div>
          <Layout fixedHeader>

            <Header transparent>  {/* style={{color: 'white'}} */}
              <div className="center2">
                <NavLink to="mainpage" style={{textDecoration: 'none'}}>
                  <img className="logoTop" src={logo} height="70" alt="logo"/>
                </NavLink>
              </div>
              <NavLink to="help" style={{textDecoration: 'none'}}>
                <div className="help">Help</div>
              </NavLink>
            </Header>


            <Drawer title="------Menu------">
              <Navigation>
                <a href="/mainpage">
                  <img className="pointer" src={pil2} height="23" alt="pil2"/>   Go to start page</a>
                  <a href="/">
                    <img className="pointer" src={pil2} height="23" alt="pil2"/>   Log book</a>
                    <br></br><br></br><br></br>
                    <h2>------Settings------</h2>
                    <a href="/">
                      <img className="pointer" src={pil2} height="23" alt="pil2"/>   General</a>
                      <a href="/">
                        <img className="pointer" src={pil2} height="23" alt="pil2"/>   Insulin</a>
                        <a href="/">
                          <img className="pointer" src={pil2} height="23" alt="pil2"/>   Dosing</a>
                          <a href="/">
                            <img className="pointer" src={pil2} height="23" alt="pil2"/>   Carbs</a>
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

                              <Route exact={true} path='/help' render={() => (
                                  <div className="App">
                                    <Help/>
                                  </div>
                                )}/>

                              </Layout>
                            </div>
                          </HashRouter>
                        );
                      }
                    }
                    export default App;
