var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css');
require('../../css/listView.css');
var LoginRegister = require("./loginRegister.jsx");





var ListView = React.createClass({
	render: function () {
		
		var here=this.props.data.map(function(obj) {
			return <SubListView obj={obj} />
		})
		return(
			<div id="container2">{here}</div>
		)
       
 	}	
});

var SubListView = React.createClass({
	render: function () {
		return (
			<div id="listDiv">
				<span id="listTitle"></span><span id="deadline"></span>
				<img id="listImg" src={this.props.obj.image}/>
				<span id="listName">{this.props.obj.name}</span>
				<span id="listPrice">${this.props.obj.price}</span>
			  </div>
		)
	}
})
		
module.exports = ListView;






