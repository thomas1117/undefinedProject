var React = require('react');

var Nav = React.createClass({
	render:function() {
		return(
			<div id="nav">
				<button id="add">Add Item</button>
			</div>
		)
	}
})

module.exports = Nav;

$("body").on('click',"#add",function(e) {
	e.preventDefault();
	$("#addDiv").show();
})