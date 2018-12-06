import React, { Component } from 'react';
import './App.css';
import { Layout, Content} from 'react-mdl';
import backWhite from './img/backWhite.png';
import { NavLink } from 'react-router-dom';

export default class Help extends Component {
  render() {
    return (
    <div>
      {/* using CommonJS modules*/}
      {/*var Media = require("react-media");*/}
      <div>
        <Layout fixedHeader>
          <Content className="content">
            <NavLink to="mainpage" style={{textDecoration: 'none'}}>
              <div className="backButton">
                <img className="back" src={backWhite} height="20" alt="backWhite"/>   Go back
              </div>
            </NavLink>
          <div className="textbox">
            <h2>Help</h2>
            <h1>Lite info om appen, how to use, osv osv osv osv osv osv</h1>
          </div>
        </Content>
      </Layout>
    </div>
  </div>

    );
  }
}
