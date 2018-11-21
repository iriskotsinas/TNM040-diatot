import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import logo from './img/logo.png';
import bloodglucose from './img/bloodglucose.png';
import blood_drop from './img/blood_drop.png';
import sensor_icon_50p from './img/sensor_icon_50p.png';


export default class FirstPage extends Component {
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div className="topBar" >
          <Layout fixedHeader>
            <Header transparent style={{color: 'white'}}>
              <div class="center">
              <a href="firstpage" style={{textDecoration: 'none'}}>
                <img src={logo} height="100" alt="logo" /></a>
              </div>
                  <Navigation>
                    <a href="/">Help</a>
                  </Navigation>
              </Header>
            <Drawer title="Settings">
                <Navigation>
                    <a href="/">Settings</a>
                    <a href="/">Your diary</a>
                    <a href="/">Add</a>
                    <a href="Sök">Blood</a>
                  </Navigation>
              </Drawer>
            <Content style={{backgroundColor: "#FAFAFB"}}>
              <div class="bloodgraph">
                <img className="graph" src={bloodglucose} alt="bloodglucose" />
              </div>
              <a href="log" style={{textDecoration: 'none'}}>
              <div className="mainButton">New log +</div></a>
              <div className="controlGlucose">
                <p>Control Glucose
                </p>
              </div>
              <div className="center">
                <div className="smallButtons">CGM <img className ="sensor_icon" src={sensor_icon_50p} alt="sensor_icon" />
                </div>
                <div className="smallButtons">BG <img className ="blood_drop" src={blood_drop} alt="blood_drop" />
                </div>
              </div>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
