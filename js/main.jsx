require("../css/main.css");
require("../css/normalize.css");

var React = require('react');
var ReactDOM = require('react-dom');
var FunderDetail = require('./components/funderDetail.jsx');
var ListItem = require('./components/listitem.jsx');

ReactDOM.render(<FunderDetail />, document.getElementById('funderDetail'));
ReactDOM.render(<ListItem />, document.getElementById('listItem'));



// $(document).ready(function(){
//  var Router = require('./router.jsx');
// });