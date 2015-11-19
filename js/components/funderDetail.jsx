var React = require('react'); 
var ReactDOM = require('react-dom');

var FunderDetail = React.createClass({
	render: function () {
	
		return(	
			<div>
				<ul>
					<li>{this.props.picture}picture</li>
					<li>{this.props.detail}title</li>
					<li>{this.props.amount}amount</li>
					<li>{this.props.url}url</li>
					<li><input type={this.props.FundAmount}FundAmount /></li>
					<li><button>{this.props.submit}submit</button></li>
					<li className="progressBar"> progress</li>
					<li>{this.props.message} to go til goal</li>
						
				</ul>
			</div>
			)
		}
});



module.exports = FunderDetail; 