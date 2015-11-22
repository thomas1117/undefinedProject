// var React = require('react');
// var ReactDOM = require('react-dom');

// var RegisterForm = React.createClass({

// 	render: function(){
// 			return(
// 				<div id="registerDiv">
// 					<form id="registerForm">
// 						<label>First Name:</label>
// 						<input id="fName"/>
// 						<label>Last Name:</label>
// 						<input id="lName"/>
// 						<label>Email:</label>
// 						<input id="email"/>
// 						<label>Address:</label>
// 						<input id="address"/>
// 						<label>City:</label>
// 						<input id="city"/>
// 						<label>Zip:</label>
// 						<input id="zip"/>
// 						<label>Phone Number:</label>
// 						<input id="phoneNumber"/>
// 						<label id="creditLabel">Credit Card:</label>
// 						<input id="creditCard"/>
// 						<input id="cvc" placeholder="CVC"/>
// 						<label id="expLab">Expiration</label>
// 						<div>
// 							<select name='expireMM' id='expireMM'>
// 							    <option value=''>Month</option>
// 							    <option value='01'>Janaury</option>
// 							    <option value='02'>February</option>
// 							    <option value='03'>March</option>
// 							    <option value='04'>April</option>
// 							    <option value='05'>May</option>
// 							    <option value='06'>June</option>
// 							    <option value='07'>July</option>
// 							    <option value='08'>August</option>
// 							    <option value='09'>September</option>
// 							    <option value='10'>October</option>
// 							    <option value='11'>November</option>
// 							    <option value='12'>December</option>
// 							</select>
// 							<select name='expireMM' id='expireMM'>
// 							    <option value=''>Year</option>
// 							    <option value='15'>2015</option>
// 							    <option value='16'>2016</option>
// 							    <option value='17'>2017</option>
// 							    <option value='18'>2018</option>
// 							    <option value='19'>2019</option>
// 							    <option value='20'>2020</option>
							    
// 							</select> 
// 						</div>
// 						<label>User Name:</label>
// 						<input id="userNameForm"/>
// 						<label>Password:</label>
// 						<input id="passwordForm"/>
// 						<button id="submitReg">Submit</button>

// 	_submit: function(e) {
// 		var model= new User();
// 	model.set ({
// 	username:$("#userNameForm").val(),
// 	email:$("#emailForm").val(),
// 	password:$("#passwordForm").val(),
// 	});
	
// 	e.preventDefault();

// 	model.save(null,{
// 	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/",
// 	success:function(resp) {
// 		console.log(resp);
// 	},
// 	error:function(err) {
// 		console.log(err);
// 	}

// });
		
// 	},
// 	render: function(){
// 			return(
// 				<div id="registerDiv">
// 				<div id = "header">
// 					<h2>Register</h2>
// 				</div>
// 					<form id="registerForm" onSubmit={this._submit}>
// 					<div id="inputDiv">
// 						<input id="fName" placeholder="First Name"/>
// 						<input id="lName" placeholder="Last Name"/>
// 						<input id="emailForm" placeholder="email"/>
// 						<input id="userNameForm" placeholder="Username"/>
// 						<input id="passwordForm" placeholder="password"/>
// 						<button id="submitReg" type="submit">Submit</button>
// 					</div>
// 					</form>
// 				</div>
// 			)
// 	}
// })

// module.exports = RegisterForm;

// ////Backbone

// var User = Backbone.Model.extend({
// 		initialize: function() {
// 			console.log("a new detfund has been created");
// 		}
		
// });

// var UserInput = Backbone.Collection.extend({

// 	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/"
// });


// var userReg= new User();

// userReg.set ({
// 	username:'test',
// 	email:'test@gmail.com',
// 	password:'test',
// })


// console.log(userReg);


// userReg.save(null,{
// 	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/",
// 	success:function(resp) {
// 		console.log(resp);
// 	},
// 	error:function(err) {
// 		console.log(err);
// 	}
// });


	









// >>>>>>> 18d4d0ec3cb443d4d8fc5b464d0d762d695e74d1


