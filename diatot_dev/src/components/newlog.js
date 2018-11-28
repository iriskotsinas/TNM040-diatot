import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import logo from './img/logo.png';
//import FirstPage from "./components/FirstPage";

export default class Newlog extends Component {
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div style={{height: '100px', position: 'fixedHeader', background: '#9bcbd6'}}>
          <Layout fixedHeader>
            <Header transparent style={{color: 'white'}}>
              <div className="center">
                <a href="mainpage">
                  <img className="logoTop" src={logo} height="70" alt="logo" />
                </a>
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
            <Content style={{backgroundColor: "rgb(245,245,246)"}}>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
