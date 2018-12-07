import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {DataTable, TableHeader} from 'react-mdl';
import Mainpage from '../mainpage.js';
import BSSect from './BSSect.js';
import kryss from '../img/kryss.png';
import exp_arrow from '../img/exp_arrow.png';
import down2 from '../img/down2.png';

class Log extends Component {
  constructor(props){
    super(props);
    this.state = {
      bloodSugar: 0.0,
      carbs: 0.0,
      insulinDose: 0.0,
      carbRatio: 11.50,  /* 11.50 */
      corrRatio: 4.30, /*4.30*/
      bgTarget: 6.0,
      sero: 0.0,
      date: new Date()
    };

    this.calcBS = this.calcBS.bind(this);
    this.calcCarbs = this.calcCarbs.bind(this);
    this.calcInsulin = this.calcInsulin.bind(this);
    this.calcInsManual = this.calcInsManual.bind(this);
  }

  /* Set blood sugar */
  calcBS(a){
    let x = Number(a.target.value);

    this.setState({
      bloodSugar: x,
      insulinDose: this.calcInsulin(x, this.state.carbs)
    })
  }

  /* Set carbs */
  calcCarbs(b){
    let x = Number(b.target.value);

    this.setState({
      carbs: x,
      insulinDose: this.calcInsulin(x, this.state.bloodSugar)
    })
  }

  /* Calculate insulin dose */
  calcInsulin(carbs, bs){
    let carbDose = carbs/this.state.carbRatio;
    let corrDose;

    if (bs < this.state.bgTarget) {
      corrDose = -((bs-this.state.bgTarget) / this.state.corrRatio);
    } else if (bs > this.state.bgTarget){
      corrDose = (bs-this.state.bgTarget) / this.state.corrRatio;
    } else {
      corrDose = bs / this.state.corrRatio;
    }

    return carbDose + corrDose;
  }

  /* Set carbs */
  calcInsManual(e){
    let x = Number.parseFloat(e.target.value);

    this.setState({
      insulinDose: x
    })

  }

  /* Format date */
  formatDate() {
    let now = this.state.date;
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) hours = "0"+hours;
    if (minutes < 10) minutes = "0"+minutes;

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    return (
      hours + ":" +
      minutes + ", " +
      now.getDate() + " " +
      monthNames[now.getMonth()] + " " +
      now.getFullYear()
    )
  }

  render(){
    return (
      <div>
        <h3 className="log">{this.props.title}</h3>
        <div class="date">
          <span>{this.formatDate()}</span>
        </div>

        {/*BS SECTION*/}
        <div className="bsSection">
          <h5 className="sectionhead">Blood sugar</h5>
          <div className="miniButton">CGM</div>
          <input className="inputSize" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" step="0.1" placeholder={this.state.bloodSugar} onBlur={this.calcBS}></input>
          <span className="textSize">mmol/L</span>
        </div>

        {/*CARBS SECTION*/}
        <div>
          <h5 className="sectionhead">Carbs</h5>
          <div className="carbsSection">
            <div className="expContent">
              <img className="arrow" src={down2} height="40" alt="ArrowRight" />
            </div>
            <div className="logContent">
              <p className="underRubrik">Total carbs</p>
              <div className="carbsContainer">
                <table>
                  <tr>
                    <th>Food</th>
                    <th>Weight</th>
                    <th>Carbs</th>
                  </tr>
                  <tr>
                    <td>Potato, boiled</td>
                    <td>60g</td>
                    <td>30g</td>
                  </tr>
                  <tr>
                    <td>Banana</td>
                    <td>80g</td>
                    <td>45g</td>
                  </tr>
                  <tr>
                    <td>Choclate</td>
                    <td>120g</td>
                    <td>79g</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="valueContent">
              <input className="inputSize" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" step="0.1" placeholder={this.state.carbs} onBlur={this.calcCarbs}></input>
              <span className="textSize">grams</span>
            </div>
          </div>
        </div>


        {/*INSULIN SECTION*/}
        <div className="insulinSection">
          <h5>Insulin dose</h5><div>
          <span className="activeInsulin">Active insulin: 0.93</span>  {/*byt ut 0.93 mot variabel activeInsulin*/}
          <input className="inputSize" type="number" step="0.1" value={this.state.insulinDose} onBlur={this.calcInsManual}></input>
          <span className="textSize"> units</span></div>
        </div>


            {/*SAVE BUTTON*/}
            <NavLink to="mainpage" style={{textDecoration: 'none'}}>
              <div className="mainButton" style={{marginTop: '10%'}}>Save</div>
              {/* LÄGG TILL NY LOG I LOG-BOK */}
            </NavLink>

          </div>
        )
      }
    }

    export default Log;
