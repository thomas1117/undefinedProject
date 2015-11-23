var React = require('react');
var ReactDOM = require('react-dom');
var backbone= require('backbone');

var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:[
		'user/:username': 'user',
		"":"index"
	]
})


var router = new Router();

router.on('route:user', function() {
	ReactDOM.render(<ListView />, document.getElementById("listView"));
})


$('body').on('submit', 'button', function(e){
	e.preventDefault();

	router.navigate(href, {trigger:true})
})




