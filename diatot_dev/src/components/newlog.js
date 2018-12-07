import React, { Component } from 'react';
import './App.css';
import { Layout, Content} from 'react-mdl';
import Log from './log/Log.js'
import kryss from './img/kryss.png';
import { NavLink } from 'react-router-dom';
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
              <NavLink to="mainpage" style={{textDecoration: 'none'}}>
                <div className="cancelButton">
                  <img className="cancel" src={kryss} height="10" alt="kryss"/>   Cancel
                </div>
              </NavLink>
              <NavLink to="newlog" style={{textDecoration: 'none'}}>
                <div className="clearButton">Clear</div>
              </NavLink>
              <div className="textbox"><Log title="New log"/></div>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
