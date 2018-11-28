import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Users from './users/Users.js';
import logo from './img/logo.png';
import bloodglucose from './img/bloodglucose.png';
import blood_drop from './img/blood_drop.png';
import sensor_icon_50p from './img/sensor_icon_50p.png';


export default class mainpage extends Component {
/*
  constructor(props){
    super(props);
    this.state = {
      name: "Ola"
    };
    this.calculate = this.calculate.bind(this);
  }

calculate(){
  console.log("Hej");
  this.setState({name:"Jacob"});
}
  */
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div>
          <Layout fixedHeader>
            <Header className="topBar" transparent style={{color: 'white'}}>
              <div className="center">
                <a href="mainpage" style={{textDecoration: 'none'}}>
                  <img className="logoTop" src={logo} height="70" alt="logo"/>
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

            <Content className="content" > {/*  style={{backgroundColor: "rgb(245,245,246)"}} */}
              <div className="bloodgraph">
                <img className="graph" src={bloodglucose} alt="bloodglucose" />
              </div>

              <a href="newlog" style={{textDecoration: 'none'}}>
              <div className="mainButton">New log + </div></a>  {/* {this.state.name} */}
          {/*    <div className="controlGlucose">
                <p>Control Glucose
                </p>
              </div>  */}
            {/*   <Users title="Users List"/> */}
              <div className="center">
                <div className="smallButtons" >CGM  <img className ="sensor_icon" src={sensor_icon_50p} alt="sensor_icon" />
                {/* onClick={this.calculate} */}
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
