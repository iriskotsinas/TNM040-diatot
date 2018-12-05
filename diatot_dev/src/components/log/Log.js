import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Mainpage from '../mainpage.js';
import BSSect from './BSSect.js';
import exp_arrow from '../img/exp_arrow.png';
import arrowright from '../img/arrowright.png';


class Log extends Component {
  constructor(){
    super();
    this.state = {
      bloodSugar: 0.0,
      carbs: 0.0,
      insulinDose: 0.0,
      carbRatio: 11.50,
      corrRatio: 4.30,
      bgTarget: 6.0,
      sero: 0.0
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
  calcInsulin(x, y){
    return x + y;


  }

  /* Set carbs */
  calcInsManual(e){
    let x = Number.parseFloat(e.target.value);

    this.setState({
      insulinDose: x
    })

  }



  render(){
    return (
      <div>
        <h3 className="log">{this.props.title}</h3>
            <p>datumstämpel</p>

        {/*BS SECTION*/}
        <div className="bsSection">
          <h5>Blood sugar</h5>

           <div className="miniButton">CGM</div>

        <input className="inputSize" type="number" step="0.1" placeholder={this.state.bloodSugar} onBlur={this.calcBS}></input>
        <span className="textSize">mmol/L</span>

          {/*<div className="valueContent">
          <input type="number" step="0.1" placeholder={this.state.carbs} onBlur={this.calcCarbs}></input>
          <p> mmol/L</p>
        </div>*/}

        </div>

      {/*CARBS SECTION*/}
      <div>
        <h5>Carbs</h5>
        <div className="carbsSection">
          <div className="expContent">
            <img className="arrow" src={exp_arrow} alt="ArrowRight" />
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
                  <td>30g KH</td>
                </tr>
                <tr>
                  <td>Banana</td>
                  <td>80g</td>
                  <td>45g KH</td>
                </tr>
                <tr>
                  <td>Choclate</td>
                  <td>120g</td>
                  <td>79g KH</td>
                </tr>
              </table>

{/*
              <DataTable
                  shadow={0}
                  rows={[
                      {food: 'Potato, boiled', weight: 60, carbs: 30},
                      {food: 'GF pasta, boiled', weight: 70, carbs: 19.6},
                      {food: 'Apple', weight: 132, carbs: 18.5}
                  ]}
              >
                  <TableHeader name="food" tooltip="Type of food">Food</TableHeader>
                  <TableHeader numeric name="weight" tooltip="Weight of food">Weight</TableHeader>
                  <TableHeader numeric name="carbs"  tooltip="Grams of carbs">Carbs</TableHeader>

              </DataTable>

*/}
{/*cellFormatter={(carbs) => `\$${carbs.toFixed(2)}`}*/}
              {/*      <p className="carbsList">Potato, boiled     60g     30g KH
                GF pasta, boiled    70g     19,6g KH
                Apple               132g    18,5g KH
                </p>  */}
              </div>
            </div>

            <div className="valueContent">
              <input className="inputSize" type="number" step="0.1" placeholder={this.state.carbs} onBlur={this.calcCarbs}></input>

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
