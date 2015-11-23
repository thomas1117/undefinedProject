var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css');

var listDetailView = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detail list has been created");
		}
});

var ListDetailView = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/items/"
});

var myListDetailView = new ListDetailView();

myListDetailView.fetch({
	success: function(resp) {
		var test = resp.toJSON();
		console.log(test);
		ReactDOM.render(<listDetailView data={test}/>, document.getElementById('listDetail'));
	},
	error: function(error) {
		console.log(error);
	}
});

var theListDetailView = React.createClass({
	render: function () {
		var here=this.props.data.map(function(obj) {
			return (
              <div id="listsDiv">
	              <ul id="listsUl">
		              <li id="listsLi">
		                 <img id="listsImg" src={obj.image}/>
						 <span id="listsTitle">{obj.title}</span>
		                 <span id="listsName">{obj.name}</span>
		                 <span id="listsPrice">{obj.price}</span>
		              </li>
	              </ul>
              </div>
             )
		});
        return(<div>{here}</div>);		
	}
});


module.exports = listDetailView;



