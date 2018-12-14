import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import sensorwhite from '/Users/emmasegolsson/Documents/koma-projekt/diatot/diatot_dev/diatot_dev/src/components/img/sensorwhite.png';
import cross from '../img/cross.png';
import arrow from '../img/arrow.svg';
import cirkel from '../img/cirkel.png';





/*
class ActiveIns {

  constructor(insulinDose, activeInsulinTime){
      this.insulinDose = insulinDose;
      this.activeInsulinTime = activeInsulinTime;
      this.creationDate = new Date();
      this.actInsSpeed =  this.insulinDose / this.activeInsulinTime;
  }
*/

  /* MÅSTE JUSTERAS FÖR ATT MINSKA AKTIVT INSULIN I FÖRHÅLLANDE TILL TIDEN */
/*
  calcActiveInsComponent(){
    let actIns = this.activeInsulin - (new Date() - this.creationDate) * this.actInsSpeed;

    if (actIns <= 0) {
      return 0.0;
    } else {
      return actIns
    }
  }
}*/

/*  onClick={this.clearAll()} */

class Log extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrowClass: 'arrow',
      bloodSugar: 0.0,
      carbs: 0.0,
      insulinDose: 0.0,
      carbRatio: 11.50,  /* 11.50 */
      corrRatio: 4.30, /*4.30*/
      bgTarget: 6.0,
      activeInsulin: 0.93,
      /*activeInsulinList: [],*/
      activeInsulinTime: 4.0,
      date: new Date()
    };

    /*this.clearAll = this.clearAll.bind(this);*/
    this.rotateImage = this.rotateImage.bind(this);
    this.calcBS = this.calcBS.bind(this);
    this.calcCarbs = this.calcCarbs.bind(this);
    this.calcInsulin = this.calcInsulin.bind(this);
    /*this.calcInsManual = this.calcInsManual.bind(this);*/
  }

  /* Responsive popup */



  /* Set blood sugar */
  calcBS(a){
    let x = Number.parseFloat(a.target.value).toPrecision(2);

    this.setState({
      bloodSugar: x,
      insulinDose: this.calcInsulin(x, this.state.carbs),
      /*activeInsulin: this.calcActiveInsulin()*/
    })
  }

  /* Set carbs */
  calcCarbs(b){
    let x = Number.parseFloat(b.target.value).toPrecision(2);

    this.setState({
      carbs: x,
      insulinDose: this.calcInsulin(x, this.state.bloodSugar),
      /*activeInsulin: this.calcActiveInsulin()*/
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

    return carbDose + corrDose - this.state.activeInsulin;
  }

  /* Manual input insulin -- NOT DONE */
  /*
  calcInsManual(e){
    let x = Number.parseFloat(e.target.value);

    this.setState({
      insulinDose: x
    })

  }*/

  /* MÅSTE JUSTERAS FÖR ATT MINSKA AKTIVT INSULIN I FÖRHÅLLANDE TILL TIDEN */
  calcActiveInsulin(){
    let x = 0.0;

    for(let i=0; i < this.state.activeInsulinList.length; i++) {
      x += this.state.activeInsulinList[i];
    }
    /*return x;*/

    this.setState({
      activeInsulin: x
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

  /* Rotates the arrow */
  rotateImage(){
    let classname;

    if (this.state.arrowClass === 'arrow') {
      classname = 'arrowRot'
    } else if (this.state.arrowClass === 'arrowRot') {
      classname = 'arrow'
    }

    this.setState({
      arrowClass: classname
    })
  }

  /* Clear all function */

/*
  clearAll(){

      this.state.bloodSugar = 0.0;
      this.state.carbs = 0.0;
      this.state.insulinDose = 0.0;

}*/


  render(){
    /*const activeInsulin = this.calcActiveInsulin()*/

    return (
      <div>

      <NavLink to="mainpage" style={{textDecoration: 'none'}}>
        <div className="cancelButton">
          <img className="cancel"src={cross} height="15" alt="cross"/>  Cancel
        </div>
      </NavLink>
      <NavLink to="newlog" style={{textDecoration: 'none'}}>
        <div className="clearButton"><img className="ring"src={cirkel} height="12" alt="cirkel"/> Clear</div> {/*onClick={this.clearAll}*/}
      </NavLink>

        <h3 className="log">{this.props.title}</h3>
        <div class="date">
          <span>{this.formatDate()}</span>
        </div>

        {/*BS SECTION*/}
        <div className="bsSection">
          <h5 className="sectionhead">Blood sugar</h5>
          <div className="miniButton"  onClick={this.clearAll}>CGM <img className="sensorwhite"src={sensorwhite} height="12" alt="sensorwhite"/></div>


          <input className="inputSize" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" step="0.1" placeholder={this.state.bloodSugar} onBlur={this.calcBS}></input>
          <span className="textSize">mmol/L</span>
        </div>


        {/*CARBS SECTION*/}
        <div className= "bsSection">
          <h5 className="sectionhead">Carbs</h5>
          <div className="carbsSection">
            <div className="logContent">
              {/*Expand function*/}
              <Collapsible trigger=
                <div className="expandDiv">
                  <div className= "arrowDiv">
                    <img className={this.state.arrowClass} src={arrow} height="40" alt="arrow" onClick={this.rotateImage}/>
                    <p className="underRubrik" onClick={this.rotateImage}>Total carbs </p>
                  </div>
                </div>>
              <div className="carbsContainer">
                <table>
                  <tr>
                    <th>Food</th>
                    <th className= "carbTable">Weight</th>
                    <th className= "carbTable">Carbs</th>
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
            </Collapsible>
            </div>
            <div className="valueContent">
              <input className="inputSize" type="number" min="0" inputmode="numeric" pattern="[0-9]*" title="Non-negative integral number" step="0.1" placeholder={this.state.carbs} onBlur={this.calcCarbs}></input>
              <span className="textSize1">grams</span>
            </div>
          </div>

        </div>

        {/*INSULIN SECTION*/}

        <div>
          <h5 className="sectionhead">Insulin dose</h5>
          <div className="insulinSection">
            <div className="actInsDiv">Active insulin: {this.state.activeInsulin.toPrecision(2)}</div>  {/*byt ut 0.93 mot variabel activeInsulin*/}
            <div className="valueContent1">
              <input className="inputSize" type="number" step="0.1" value={this.state.insulinDose.toPrecision(2)}></input> {/* onBlur={this.calcInsManual}*/}
              <span className="textSize1">units</span>
            </div>
          </div>

        </div>



            {/*SAVE BUTTON*/}
            <NavLink to="mainpage" style={{textDecoration: 'none'}}>
              <div className="mainButton" style={{marginTop: '10%'}} >Save</div> {/*onClick={this.calcActiveInsulin()}*/}
              {/* LÄGG TILL NY LOG I LOG-BOK */}
            </NavLink>


          </div>
        )
      }
    }

    export default Log;
