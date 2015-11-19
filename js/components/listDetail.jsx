var React = require("react");
var ReactDOM = require("react-dom");

var ListDetail = React.createClass({
	render: function () {
		return(
			
			<div>
				<div id="listDetailHeader">
					<h1>List Detail View</h1>
					<h2>XXXXXXX List</h2>
					<p>URL</p>
					<button id="editListButton">Edit List</button>
				</div>

				<div id="listDetailList">
					<ul>
					 	<li className="listDetailLi"></li>
					</ul>
				</div>

				<div id="addListView">
					<button id="addListDetailButton">Add Item</button>
				</div>

			</div>
		)
	}
});


module.exports = ListDetail;