var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader('authorization','token' );
    }
});

var LoginRegister = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		userVerified = new UserVerify();
		
		userVerified.set({
		username: $("#userName").val(),
		password: $("#password").val()
	 });

		userVerified.save(null,{
			url: "https://afternoon-scrubland-9189.herokuapp.com/api/api-token-auth/",
			success:function(resp) {
			var test=resp.toJSON();
			username=test.username;
			
			
			
			// $("#loginRegister").hide();
			var UserList = Backbone.Model.extend({
				initialize:function() {
					console.log("here is your data");
				}
			})
			var UserListCollect = Backbone.Collection.extend({
				url:"https://afternoon-scrubland-9189.herokuapp.com/api/lists/?username="+username,
			})

			var userList = new UserList();
			userList.fetch({
				url:"https://afternoon-scrubland-9189.herokuapp.com/api/lists/?username="+username,
				success:function(resp){
					var test=resp.toJSON();
					console.log(test);
					console.log(test.results);
					var mapped=test.results[0].item_set.map(function(obj){
						return {
							'image':obj.image
						}

					})
					console.log(mapped);
				}

			})
				

		},
			error:function(err) {
				console.log(err);
			}
		});

	},
	render: function(){
		return(
			<div id="formContainer">
				<div id="loginHeader">
				<span id="log">Login</span>
				<span id="reg">Register</span>
				</div>
				<div id="login">
					
					<form method='POST' onSubmit={this._submit}>
						
						<input id="userName" placeholder="Username"/>
						
						<input id="password" placeholder="Password"/>
						<button type='submit'>Submit</button>
					</form>
				</div>

				<div id="register">
					
					<form>
						
						<input id="email" placeholder="Your Email"/>
						<button id="signUp">Sign Up</button>
						<button id="guest">Guest</button>
					</form>
				</div>
			</div>


		)
	}
})

module.exports = LoginRegister;

var UserVerify = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		}
		
});

var UserVerified = Backbone.Collection.extend({

	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/"
});

userVerified = new UserVerify();












