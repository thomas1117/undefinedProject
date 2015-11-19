require("../css/main.css");
require("../css/normalize.css");

var React = require('react');
var ReactDOM = require('react-dom');
var LoginRegister= require('./components/loginRegister.jsx');
var RegisterForm = require('./components/registerForm.jsx');


ReactDOM.render(<LoginRegister />, document.getElementById('loginRegister'));
ReactDOM.render(<RegisterForm />, document.getElementById('registerForm'));

