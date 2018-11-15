import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Media from "react-media";  // using ES modules
import logo from './logo.png';
import bloodglucose from './bloodglucose.jpg';


class App extends Component {
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div style={{height: '100px', position: 'fixedHeader', background: '#9bcbd6'}}>
          <Layout fixedHeader>
            <Header transparent style={{color: 'white'}}>
              <div class="center">
                <img src={logo} height="100" alt="logo" />
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
              <div className="mainButton">KNAPP</div>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}

export default App;
