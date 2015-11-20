var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('Backbone');
// require("../css/views.css");

var ListView = React.createClass({
	render: function () {
		return(
			
			<div>
				<div id="listMakerHeader">
					<h1>Your Lists</h1> //this needs to be the data field for the list itself
				</div>

				<div id="myLists">
					<h2>My Lists</h2>
					<ul>
					 	<li className="myListLi"></li> // this needs to include a list of lists
					</ul>
					<button id="addListButton">Add New List</button>
				</div>

				<div id="myPledgesHeader">
					<h2>My Pledges</h2>
				</div>

				<div>
					<ul id="myPledgesUL">
						<li className="myPledgesLi"></li> // this needs to include a list of pledges made, including total $$ amount, item title, and URL (and list owner?)
					</ul>
				</div>

				<div id="totalPledges">
					<p className="totalPledgesP">Total Pledges:<span className="totalPledgesSp"></span></p>//this needs to be a cumulative $$ total of all pledges made
				</div>

			</div>
			)
		}
	
});

	

module.exports = ListView;


var ListerView = Backbone.Model.extend({
		initialize: function() {
			console.log("a new ListerView has been created");
		}
		
});
var TheListerView = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});
var theListerView = new TheListerView();
theListerView.fetch({
	success: function(resp) {
		console.log(resp.toJSON());
	},
	error: function(error) {
		console.log(err);
	}
});
