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
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});

var theGuestView = new TheGuestView();

theGuestView.fetch({
    success: function(resp) {
        var test =resp.toJSON();
        
        var mapped=test[0].results.map(function(obj){
            return {
                'item_set':obj.item_set
            }
        });

        var namePriceImage=mapped[0].item_set.map(function(obj){
        return {
            'name':obj.name,
            'image':obj.image,
            'price':obj.price
        }
       })
        console.log(namePriceImage);
        
       ReactDOM.render(<GuestView data={namePriceImage}/>, document.getElementById("guestView"));
     
    },

    error: function(error) {
        console.log(error);
    }
});



var GuestView = React.createClass({
	render: function() {
    var here = this.props.data.map(function(obj) {
        console.log(obj);
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
		});
		return(<div>{here}</div>);
   }   
});

module.exports = GuestView;


