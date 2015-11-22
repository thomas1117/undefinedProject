var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('Backbone');

var RegisterForm = React.createClass({
	
	_submit: function(e) {
	var model= new User();
		model.set ({

		username:$("#userNameForm").val(),
		email:$("#emailForm").val(),
		password:$("#passwordForm").val()
		});
	
	e.preventDefault();

	model.save(null,{
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/",
	success:function(resp) {
		console.log(resp);
	},
	error:function(err) {
		console.log(err);
	}

});
		
	},


	render: function(){
			return(
				<div id="registerDiv">
				<div id = "header">
					<h2>Register</h2>
				</div>
					<form id="registerForm" onSubmit={this._submit}>
					<div id="inputDiv">
						<span id="fNameLabel" className="errorVal"></span>
						<input id="fName" placeholder="First Name"/>
						<span className="errorVal"></span>
						<input id="lName" placeholder="Last Name"/>
						<span id="emailLabel" className="errorVal"></span>
						<input id="emailForm" placeholder="email"/>
						<span id="usernameLabel" className="errorVal"></span>
						<input id="userNameForm" placeholder="Username"/>
						<span id="passwordLabel"className="errorVal"></span>
						<input id="passwordForm" placeholder="password"/>
						<span className="errorVal"></span>
						<button id="submitReg" type="submit">Submit</button>
					</div>
					</form>
				</div>
			)
	}
})

module.exports = RegisterForm;

////Backbone

var User = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		},
		validate: function(attrs) {
		if(!attrs.email) {
			$("#emailLabel").html("email is required")
		}
		if(!attrs.username) {
			$("#usernameLabel").html("username is required")
		}
		if(!attrs.username) {
			$("#passwordLabel").html("password is required")
		}
	}
		
});

var UserInput = Backbone.Collection.extend({

	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/"
});


	










