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
          <div className="textbox">
          <NavLink to="mainpage" style={{textDecoration: 'none'}}>
            <div className="backButton">
              <img className="back" src={backWhite} height="20" alt="backWhite"/>   Go back
            </div>
          </NavLink>
          <h3 className="log2">Help </h3>

<div className="textStyleHelp2">
Don't know how to calcualte your carbs?
Want to keep track on your blood sugar?
Want to see all your previous posts?
Read down below for directions!<br></br><br></br></div>

<div className="textStyleHelp">New Log<br></br></div>

<div className="textStyleHelp2">
Push this button if you want to create a new log.
Enter your currently measured blood sugar in the Blood Sugar section
(Tip! Use the CGM button as described below).

<br></br><br></br>
Either search and add the foods of your meal to the list and
diatot will calculate total carbs for you, or
type in the total carbs of your meal. Diatot will now calculate your
recomended dose of insulin. Use the save button at
the bottom of the page to save your post to your log book when you're done.</div>

<div className="textStyleHelp"><br></br>CGM<br></br></div>

<div className="textStyleHelp2">
Press the CGM button, scan your sensor and
diatot will automatically enter your blood sugar into a new log post.</div>

<div className="textStyleHelp"><br></br>Log Book<br></br></div>

<div className="textStyleHelp2">
Under this section all of your previous post are saved.<br></br><br></br></div>

</div>
</Content>
</Layout>
    </div>
  </div>

    );
  }
}
