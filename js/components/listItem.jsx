var React = require('react');
var ReactDOM = require('react-dom');

var ListItem = React.createClass({
	render: function() {
		return (
			<div>
				<form>
				<span>Add Item</span>
					<label>Title</label>
					<input type="text"/>

					<label>Amount</label>
					<input type="text"/>

					<label>Url</label>
					<input type="text"/>

					<label>Picture</label>
					<input type="text"/>

					<span>Visibility</span>
					<label> Yes</label>
					<input type="radio" />
					<label> No</label>
					<input type="radio" />
				</form>
			</div>

			)
	}

});

module.exports = ListItem;
