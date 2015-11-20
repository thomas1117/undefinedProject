var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var FundView = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		}
		
});
var TheFundView = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});
var theFundView = new TheFundView();


theFundView.fetch({
    success: function(resp) {
        var test =resp.toJSON();
        console.log(test[0]);
        var mapped=test[0].results.map(function(obj){
        	return {
        		'price':obj.price,
        		'name': obj.name,
        		'image': obj.image
        }
    })
        console.log(mapped);
    },
    error: function(error) {
        console.log(error);
    }
});

var FunderView = React.createClass({
	render: function () {
		return(
			
			<div>
				<img src=""/>
				<h2></h2>
				<span id="price"></span>
			</div>
			)
		}
	
});

module.exports = FunderView;
