require("../css/main.css");
require("../css/loginRegister.css");
require("../css/registerForm.css");
require("../css/normalize.css");

var React = require('react');
var ReactDOM = require('react-dom');
var LoginRegister= require('./components/loginRegister.jsx');
var RegisterForm = require('./components/registerForm.jsx');


ReactDOM.render(<LoginRegister />, document.getElementById('loginRegister'));
ReactDOM.render(<RegisterForm />, document.getElementById('registerForm'));

// var Movie = Backbone.Model.extend({
//   initialize: function () {
//     console.log("A new movie has been created");
//   }

// var Movies=Backbone.Collection.extend({
// url:"https://test1117.parseapp.com/classes/Movies",
// model: Movie,
// _parse_class_name:"Movies"

// });

// test.save(null, {
//   success: function(resp) {
//     console.log("success: ",resp)
//   },
//   error: function(err) {
//     console.log("error: ",err)
//   }
// });

// var test = new Movie({
// 	title:test,
// 	director: test,
// })