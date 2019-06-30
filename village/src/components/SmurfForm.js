import React, {Component} from "react";
import axios from "axios";
import Smurf from "./Smurf";
import {Link} from "react-router-dom"

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
			height: "",
			id:props.id,
		};
	}

	addSmurf = (event) => {
		event.preventDefault();
		const {name, age, height} = this.state;
		const newSmurf = {name, age, height};
		axios
			.post("http://localhost:3333/smurfs", newSmurf)
			.then((response) => {
				this.props.updateSmurfs(response.data);

				this.setState({
					name: "",
					age: "",
					height: "",
					
				});
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	};

	deleteSmurf = (event) => {
		event.preventDefault();
		const {id} = this.state;

		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then((response) => {
				this.props.updateSmurfs(response.data);

				this.setState({
					name: "",
					age: "",
					height: "",
					id: "",
				});
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	};

	handleInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	render() {
		return (
			<div className="SmurfForm">
			<Link to="/smurfs">smurfs</Link >
				<form onSubmit={this.addSmurf}>
					<input
						onChange={this.handleInputChange}
						placeholder="name"
						value={this.state.name}
						name="name"
					/>
					<input
						onChange={this.handleInputChange}
						placeholder="age"
						value={this.state.age}
						name="age"
					/>
					<input
						onChange={this.handleInputChange}
						placeholder="height"
						value={this.state.height}
						name="height"
					/>
					<button type="submit">Add to the village</button>
					<button type="submit" onClick={this.deleteSmurf}>delete</button>
				</form>
			</div>
		);
	}
}

export default SmurfForm;
