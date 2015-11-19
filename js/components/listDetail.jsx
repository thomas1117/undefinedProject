


















var DetFundView = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		}
		
});
var FundView = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});
var fundView = new FundView();
fundView.fetch({
	success: function(resp) {
		console.log(resp.toJSON());
	},
	error: function(error) {
		console.log(err);
	}
});
var test = new FundView();
test.set({
	'title': 'test',
	'user': 2,
	
});