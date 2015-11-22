var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css');
require('../../css/listView.css');
var LoginRegister = require("./loginRegister.jsx");





var ListView = React.createClass({
	render: function () {
		var here=this.props.data.map(function(obj) {
			return(
          <div id="listDiv">
			<span id="listTitle"></span><span id="deadline"></span>
			<img id="listImg" src={obj.image}/>
			<span id="listName">{obj.name}</span>
			<span id="listPrice">${obj.price}</span>
		  </div>
       		)
		})
		return(<div id="container">{here}</div>)
       
 	}	
});
		
module.exports = ListView;









	// <div>
	// 		
	// 			<div id="myPledgesHeader">
	// 				<h3>My Pledges</h3>
	// 			</div>
	// 			<div>
	// 				<ul id="myPledgesUL">
	// 					<li className="myPledgesLi"></li> // this needs to include a list of pledges made, including total $$ amount, item title, and URL (and list owner?)
	// 				</ul>
	// 			</div>
	// 			<div id="totalPledges">
	// 				<p className="totalPledgesP">Total Pledges:<span className="totalPledgesSp"></span></p>//this needs to be a cumulative $$ total of all pledges made
	// 			</div>
	// 		</div>