require("../css/main.css");

var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({
	render:function() {
		return(<h1>test</h1>)
	}
})

ReactDOM.render(<Test />, document.getElementById('container'));




// $(document).ready(function(){
//  var Router = require('./router.jsx');
// });