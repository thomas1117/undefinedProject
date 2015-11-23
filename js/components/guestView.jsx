var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css')


var GuestView = Backbone.Model.extend({
	initialize: function() {
		console.log("a new guest view has been created");
	}
});

var TheGuestView = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/items/"
});

var theGuestView = new TheGuestView();

theGuestView.fetch({
    success: function(resp) {
        var test =resp.toJSON();
        console.log(test);
       	ReactDOM.render(<GuestView data={test}/>, document.getElementById("guestView"));
     	
    },

    error: function(error) {
        console.log(error);
    }
});



var GuestView = React.createClass({
	render: function() {
    
      var bla=this.props.data.map(function(obj) {
      		return(
        			<div id="guestDiv">
        				<ul id="guestUl">
        					<li id="guestLi">
        					 	<img id="guestImg" src={obj.image}/>
                        		<span id="guestName">{obj.name}</span>
                        		<span id="guestPrice">{obj.price}</span>
        					 </li>
        				</ul>
        			</div>
			       )
      })  
        return(<div>{bla}</div>)

		
   }   
});

module.exports = GuestView;


