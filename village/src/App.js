import React, {Component} from "react";
import axios from "axios";
import {Route, NavLink} from "react-router-dom";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import "./App.css"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
		};
  }
  updateSmurfs=( smurfs ) => {
    this.setState( {
     smurfs:smurfs
   })
 }


	componentDidMount() {
		axios
			.get("http://localhost:3333/smurfs")
			.then((response) => {
				this.setState({
					smurfs: response.data,
				});
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		return (
			<div className="App">
				<nav>
					<NavLink to="/" activeClassName="activeNavButton">
						Smurfs
					</NavLink>
					<NavLink to="smurf-form" activeClassName="activeNavButton">
						SmurfForm
					</NavLink>
				</nav>

				<Route
					path="/"
					exact
					render={(props) => (
						<Smurfs {...props} smurfs={this.state.smurfs} updateSmurfs={this.updateSmurfs}/>
					)}
				/>
				<Route path="/smurf-form" exact 	render={(props) => (
          <SmurfForm {...props} smurfs={this.state.smurfs} updateSmurfs={this.updateSmurfs}/>
        )}
      />
			</div>
		);
	}
}

export default App;
