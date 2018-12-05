import React, { Component } from 'react';
import BSSect from './BSSect';

const Section = (props) => {
  return (
    <div>
      <div className="section">
        <h5>{props.children}</h5>
        <div className="miniButton">CGM</div>
        <div className="miniButton">Blood sugar</div>
        {props.type}
      </div>
    </div>)
}

export default Section;
