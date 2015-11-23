var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var ListView = require("./listView.jsx");
var Routes = require("../routes.jsx");



var LoginRegister = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		var username = $("#userName").val();
		var password = $("#password").val();
		$.ajax({
			url:"https://afternoon-scrubland-9189.herokuapp.com/api/api-token-auth/",
			method:'post',
			data: {username: username, password:password}
		}).then(function(resp){
			console.log(resp);
			setToken(resp.token);
			this.props.router.navigate('/user');
			

		})
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
						<button id="signUp" onClick={this._click}>Sign Up</button>
						<button id="guest" onClick={this._guest}>Guest</button>
					</form>
				</div>
			</div>


		)
	}
})

module.exports = LoginRegister;




function setToken(token) {
	var backboneSync = Backbone.sync;
	Backbone.sync = function(method,model,options) {
		options.headers = {
			'Authorization': 'Bearer' + token
		};

		backboneSync(method,model,options);
	};
}




				

		
			






