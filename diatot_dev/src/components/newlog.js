import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Log from './log/Log.js'
//import FirstPage from "./components/FirstPage";

export default class Newlog extends Component {
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div>
          <Layout fixedHeader>
            <Content style={{backgroundColor: "rgb(245,245,246)"}}>
              <Log title="New log"/>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
