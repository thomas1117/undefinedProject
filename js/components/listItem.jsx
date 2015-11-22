var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var ListItem = React.createClass({
		_submit: function(e) {
		var model= new User();
		model.set ({
		name:$("#titleAdd").val(),
		price:$("#priceAdd").val(),
		item_link:$("#urlAdd").val(),
		list:'1',
		image:$("#imgAdd").val(),
		description:$("#descriptionAdd").val()
		});
		e.preventDefault();

		model.save(null,{
		url: "https://afternoon-scrubland-9189.herokuapp.com/api/items/",
		success:function(resp) {
			console.log(resp);
		},
		error:function(err) {
			console.log(err);
		}

});
		$("#titleAdd").val('');
		$("#priceAdd").val('');	
		$("#urlAdd").val('');	
		$("#imgAdd").val('');
		$("#descriptionAdd").val('');	
		},
	render: function() {
		return (
			<div id="addDiv">
				<form className="addItemForm" onSubmit={this._submit}>
					<div id="addHeader">
					<h2>Add Item</h2>
					</div>
					<div id="inputAddDiv">
					<input id="titleAdd" placeholder="title"/><br />
					<input id="priceAdd" placeholder="price"/><br />
					<input id="urlAdd" placeholder="link"/><br />
					<input id="imgAdd" placeholder="Img Url"/><br/>
					<input id="descriptionAdd" placeholder="description"/>
					</div>
					<button id="addSubmit">Submit</button>
					
						
				
					
				</form>
			</div>
>>>>>>> master

// var UserInput = Backbone.Collection.extend({

<<<<<<< HEAD
// 	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/"
// });
=======
});

module.exports = ListItem;

//Backbone

var User = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		}
		
});

var UserInput = Backbone.Collection.extend({

	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/"
});
>>>>>>> master
