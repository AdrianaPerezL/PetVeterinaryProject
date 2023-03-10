import React, { Component } from 'react'

export default class Pets extends Component {
  render() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Add Pet</title>
        <meta content name="description" />
        <meta content name="keywords" />
     
  
        <header id="header" className="fixed-top ">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto"><a href="index.html"><img src="..\src\assets\img\logo.png" alt="" width="100px" /></a></h1>
        
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#portfolio">Pet Shop</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                <li><a className="getstarted scrollto" href="#about">Log in</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </header>
        </div>  
        )
       
  }
}

