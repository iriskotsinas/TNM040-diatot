import React, { Component } from 'react';
import './App.css';
import { Layout, Content} from 'react-mdl';
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
            <Content className="content">
              <Log title="New log"/>


            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
