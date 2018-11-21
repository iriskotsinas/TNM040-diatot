import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import logo from './logo.png';
import bloodglucose from './bloodglucose.jpg';

export default class FirstPage extends Component {
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div style={{height: '100px', position: 'fixedHeader', background: '#9bcbd6'}}>
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
            <Content style={{backgroundColor: "#9bcbd6"}}>
              <div class="bloodgraph">
                <img src={bloodglucose} height="400" alt="bloodglucose" />
              </div>
              <a href="log" style={{textDecoration: 'none'}}>
              <div className="mainButton">
              KNAPP</div></a>
              <div className="center">
                <div className="smallButtons">KNAPP2</div>
                <div className="smallButtons">KNAPP3</div>
              </div>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
