import React, { Component } from 'react';
import './App.css';
import { Layout, Content} from 'react-mdl';
import Log from './log/Log.js'



export default class Newlog extends Component {
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div>
          <Layout fixedHeader>
            <Content className="content">
              <div className="textbox">
                {/* All in Log.js */}
                <Log title="New log"/>
              </div>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
