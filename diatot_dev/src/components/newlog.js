import React, { Component } from 'react';
import './App.css';
import { Layout, Content} from 'react-mdl';
import Log from './log/Log.js'
import cross from './img/cross.png';
import cirkel from './img/cirkel.png';
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
              <div className="textbox">
               <NavLink to="mainpage" style={{textDecoration: 'none'}}>
                 <div className="cancelButton">
                   <img className="cancel"src={cross} height="15" alt="cross"/>  Cancel
                 </div>
               </NavLink>
               <NavLink to="newlog" style={{textDecoration: 'none'}}>
                 <div className="clearButton" onClick={this.clearAll}><img className="ring"src={cirkel} height="12" alt="cirkel"/> Clear</div>
               </NavLink>
                <Log title="New log"/>
              </div>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
