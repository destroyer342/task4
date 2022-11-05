
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Display from "./Components/Display";

export default class Router extends Component {
    state = {
        personData: []
      }
    
    addData = (user) => {
        console.log(user);
        let personData = [...this.state.personData, user];
    
        this.setState({
          personData
        });
      }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <br/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup addData={this.addData} />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/movie" element={<Movie />} /> */}
          </Routes>
          <Display personData={this.state.personData} />
        </BrowserRouter>
      </div>
    );
  }
}
