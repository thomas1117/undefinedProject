var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css');


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
        var test =resp.toJSON();
        var mapped=test[0].results.map(function(obj){
            return {
            	'title':obj.title,
            	'deadline':obj.deadline
            }
            
        });   
        console.log(mapped);
       ReactDOM.render(<ListerView data={mapped}/>, document.getElementById("listView"));     
    },
    error: function(error) {
        console.log(error);
    }
});

var ListerView = React.createClass({
	render: function () {
       return(
          <div id="listDiv">
			<span id="listTitle">{this.props.data.title}</span><span id="deadline">{this.props.data.deadline}</span>
		  </div>
       )
 	}	
});
		
module.exports = ListerView;









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