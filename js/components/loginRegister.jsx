var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var ListView = require("./listView.jsx");



var LoginRegister = React.createClass({
	_click:function(e) {
		e.preventDefault();
		console.log("test");
		$("#registerForm").show();
	},
	_guest:function(e) {
		e.preventDefault();
		$("#guestView").show();
	},
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
			
			
			
			$("#loginRegister").hide();
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
					
					
					$("#listView").show()
					$("#nav").show().html('<span id="yourList">Your List</span>')
					var mapped=test.results[0].item_set.map(function(obj){
						return {

							'image':obj.image,
							'name':obj.name,
							'price':obj.price,
							'image':obj.image,
							'description':obj.description,
							'item_link':obj.item_link
							
						}

					})
				
				ReactDOM.render(<ListView data={mapped}/>, document.getElementById("listView"));
				
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
						<button href="/user/" type='submit'>Submit</button>
					</form>
				</div>

				<div id="register">
					
					<form>
						
						<input id="email" placeholder="Your Email"/>
						<button id="signUp" onClick={this._click}>Sign Up</button>
						<button id="guest" onClick={this._guest}>Guest</button>
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













