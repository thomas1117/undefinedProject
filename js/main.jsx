require("../css/main.css");
require("../css/normalize.css");

var React = require('react');
var ReactDOM = require('react-dom');

var ListView = require("./components/listView.jsx");

ReactDOM.render(<ListView />, document.getElementById("listView"));


// var GuestView = require("./components/guestView.jsx");

// ReactDOM.render(<GuestView />, document.getElementById("guestView"));


// var FunderView = require("./components/funderView.jsx");

// ReactDOM.render(<FunderView />, document.getElementById("funderView"));


var ListDetail = require("./components/listDetail.jsx");

ReactDOM.render(<ListDetail />, document.getElementById("listDetail"));

