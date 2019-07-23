import React, { Component } from 'react';
import SmurfForm from "./SmurfForm"
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor( props ) {
    super( props )
    this.state={}
  }
  
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return ( <div key={smurf.id}>
              <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
               
               deleteSmurf={this.props.deleteSmurf}
              />
              
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
