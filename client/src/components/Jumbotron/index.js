import React from "react";
//import GoogleFontLoader from 'react-google-font-loader';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   Switch,
//   withRouter
// } from 'react-router-dom';
// import Login from "../Login";
import Button from "react-bootstrap/Button";
import "./style.css";

function Jumbotron({ children }) {


  return <div className="jumbotron">


    <a className="headEnd" style={{ fontFamily: 'Garamond' }}>Hypochondriac<span className="tailEnd">MD</span></a>

    <a href="/login"><Button className="logBut" variant="outline-secondary" size="sm">Log In</Button></a>


  </div>;
}

export default Jumbotron;
