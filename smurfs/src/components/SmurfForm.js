import React, { Component } from "react";
import axios from "axios";
import { NewContext } from "../contexts/SmurfContext";

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { name, age, height } = this.state;

    axios
      .post("http://localhost:3333/smurfs", { name, age, height })
      .then(result => {
        console.log(result);
      });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="height"
          placeholder="height"
          value={this.state.height}
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit}>Add Smurf</button>
      </form>
    );
  }
}

export default SmurfForm;
