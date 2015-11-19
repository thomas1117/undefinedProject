require("../css/main.css");
require("../css/normalize.css");

var React = require('react');
var ReactDOM = require('react-dom');
var FunderDetail = require('./components/funderDetail.jsx');

ReactDOM.render(<FunderDetail />, document.getElementById('funderDetail'));




// $(document).ready(function(){
//  var Router = require('./router.jsx');
// });