import React from 'react';

const Sect = (props) => {
  return (
    <div>

      <div className="bssect">
        <h5>{props.children}</h5>
          <div className="miniButton">CGM</div>
          <div className="miniButton">Blood sugar</div>
          {props.type}
      </div>
    </div>
  )

{/*onClick={this.CGM}*/}
{/*{props.children}*/}
{/*onClick={this.BS}*/}
{/*{props.children}*/}

}

export default Sect;
