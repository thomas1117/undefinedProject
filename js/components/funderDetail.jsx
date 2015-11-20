var React = require('react'); 
var ReactDOM = require('react-dom');
var FunderDetail = React.createClass({
	render: function () {
	
		return(	
			<div>
				<ul>
					<li><img /> picture</li>
					<li>title</li>
					<li>amount</li>
					<li>url</li>
					<label><input /></label>
					<li><button>submit</button></li>
					<li> <div>progress</div></li>
					<li> to go til goal</li>
						
				</ul>
			</div>
			)
		}
});
module.exports = FunderDetail; 