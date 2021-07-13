import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css"; // for imorting css



const name = "Rahul";
const img1 = "";
const img2 = "";
const img3 = "";
const img4 = "";
const link = "www.google.com ";

const heading = {
    color : '#fa9191',
    textTransform : "capitalize",
    textAlign: "center",
    fontWeight: 'bold',
    margin: '70px 0'
}; //

const head = {
    color : 'blue',
    textTransform : "capitalize",
    textAlign: "center",
    fontWeight: 'bold',
    margin: '70px 0'
};

ReactDOM.render( 
    
    
    <div style = {heading}> 
    <h1 style={head}>my name is { name }</h1>

    <heading />

    <h1>hello rozer</h1>
    <img src = { img1 } alt = "google"/>
    <img src = { img2 } alt = "google"/>
    <img src = { img3 } alt = "google"/>
    <a href = {link} >
    <img src = { img4 } alt = "google"/>
    </a>
    </div>,
    
    document.getElementById('root')
);