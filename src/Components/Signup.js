import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class Signup extends Component {
  state = {
    firstname: "",
    date: new Date(),
    contact: "",
    email: "",
    error: {
      nameError: "",
      dobError: "",
      contactError: "",
      emailError: "",
    },
    formValid: false,
  };

  //event object
  HandleChangedate = (e) => {
    console.log(e);
    this.validateBirthday(e);
  };
  handleChange = (e) => {
    // console.log(e);
    //console.log(e.target.value);
    //console.log(typeof e.target.value);
    //console.log(e.target.id);

    if (e.target.id === "firstname") {
      //this is referring to AddData
      this.validateName(e.target.value);
    }

    if (e.target.id === "contact") {
      this.validateContact(e.target.value);
    }
    if (e.target.id === "email") {
      this.validateEmail(e.target.value);
    }

    // this.setState({
    //     [e.target.id]: e.target.value
    // });
  };

  validateName = (name) => {
    let nameError = this.state.error.nameError;
    let formValid = this.state.formValid;

    if (name.trim() === "") {
      nameError = "This field is required";
      formValid = false;
    } else if (name.trim().length <= 3) {
      nameError = "Please enter more than 3 characters";
      formValid = false;
    } else {
      formValid = true;
      nameError = "";
    }

    //property shorthand & spread operator
    this.setState({
      firstname: name,
      formValid,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };
  validateBirthday = (dob) => {
    let dobError = this.state.error.dobError;
    let formValid = this.state.formValid;
    let currentDate = new Date(new Date().toDateString());
  
    if (dob === "") {
        dobError = "This field is required";
        formValid = false;
    } else if (currentDate <= dob) {
      dobError = "Please enter a valid date";
      formValid = false;
    } else {
      formValid = true;
      dobError = "";
    }

    //property shorthand & spread operator
    this.setState({
      date: dob,
      formValid,
      error: { ...this.state.error, dobError },
    });

    return formValid;
  };

  validateContact = (contact) => {
    let contactError = this.state.error.contactError;
    let formValid = this.state.formValid;

    if (contact.trim() === "") {
      contactError = "This field is required";
      formValid = false;
    } else if (contact.trim().length !== 10) {
      contactError = "This field is invalid";
      formValid = false;
    } else {
      formValid = true;
      contactError = "";
    }

    this.setState({
      error: { ...this.state.error, contactError },
      contact,
      formValid,
    });
    return formValid;
  };

  validateEmail = (email) => {
    let formValid = this.state.formValid;
    let emailError = this.state.formValid;

    //regex (regular expression), patterns
    var pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email)) {
      formValid = false;
      emailError = "Please enter valid email";
    } else {
      formValid = true;
      emailError = "";
    }

    this.setState({
      email,
      formValid,
      error: { ...this.state.error, emailError },
    });

    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault(); //not refresh the page

    if (
      this.validateName(this.state.firstname) &&
      this.validateBirthday(this.state.date) &&
      this.validateEmail(this.state.email) &&
      this.validateContact(this.state.contact)
    ) {
      alert("Form is submitted");
      this.props.addData(this.state);
      this.setState({
        firstname: "",
        date: new Date(),
        contact: "",
        email: "",
      });
    } else {
      alert("Invalid input are detected");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.firstname}
          id="firstname"
          placeholder="Please enter name"
        />
        <p style={{ color: "red", fontSize: "20px" }}>
          {this.state.error.nameError}
        </p>
        <label>Date of birth</label>
        <DatePicker
          id="dob"
          selected={this.state.date}
          onChange={this.HandleChangedate}
        />
        <p style={{ color: "red", fontSize: "20px" }}>
          {this.state.error.dobError}
        </p>
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          onChange={this.handleChange}
          id="contact"
          value={this.state.contact}
          placeholder="Please enter contact"
        />
        <p style={{ color: "red", fontSize: "20px" }} id="message">{this.state.error.contactError}</p>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          id="email"
          value={this.state.email}
          placeholder="Please enter email"
        />
        <p style={{ color: "red", fontSize: "20px" }}>{this.state.error.emailError}</p>
        <button>Submit</button>
      </form>
    );
  }
}
