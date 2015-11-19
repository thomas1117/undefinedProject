
var React = require('react');
var ReactDOM = require('react-dom');

var LoginRegister = React.createClass({
	render: function(){
		return(
			<div id="formContainer">
				<div id="login">
					<h2>Login</h2>
					<label>User Name:</label>
					<input id="userName"/>
					<label>Password:</label>
					<input id="password"/>
					<button type='submit'>Submit</button>
				</div>

				<div id="register">
					<h2>Register</h2>
					<label>Your Email:</label>
					<input id="email"/>
					<button id="signUp">Sign Up</button>
					<button id="guest">Guest</button>
				</div>
			</div>


		)
	}
})

module.exports = LoginRegister;



