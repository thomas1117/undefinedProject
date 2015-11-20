var React = require('react');
var ReactDOM = require('react-dom');

var LoginRegister = React.createClass({
	render: function(){
		return(
			<div id="formContainer">
				<div id="login">
					<h2>Login</h2>
					<form>
						<label>User Name:</label>
						<input id="userName"/>
						<label>Password:</label>
						<input id="password"/>

				<div id="loginHeader">
				<span id="log">Login</span>
				<span id="reg">Register</span>
				</div>
				<div id="login">
					
					<form>
						
						<input id="userName" placeholder="Username"/>
						
						<input id="password" placeholder="Password"/>

						<button type='submit'>Submit</button>
					</form>
				</div>

				<div id="register">

					<h2>Register</h2>
					<form>
						<label>Your Email:</label>
						<input id="email"/>

					
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