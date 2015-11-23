var React = require('react');
var ReactDOM = require('react-dom');
var backbone= require('backbone');
var LoginRegister = require('./components/loginregister.jsx')


var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:{
		'user': 'user',
		"":"index"
	},
	index: function({
		ReactDOM.render(<LoginRegister router={this} />)
	})
})


var router = new Router();

router.on('route:user', function() {

	var UserVerify = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		}
		
});

var UserVerified = Backbone.Collection.extend({

	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/"
});

userVerified = new UserVerify();


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
				
				ReactDOM.render(<ListView data ={mapped}/>,document.getElementById('listView'));
				
				

			}
	
})







