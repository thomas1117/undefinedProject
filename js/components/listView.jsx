var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var ListView = React.createClass({
	render: function () {
		
		var here=this.props.data.map(function(obj) {
			
				return(
						<div className="listDiv">
							<span className="listTitle"></span><span id="deadline"></span>
							<img className="listImg" src={obj.image}/>
							<span className="listName">{obj.name}</span>
							<span className="listPrice">${obj.price}</span>
						</div>
					)
		})
				return(<div className="container2">{here}</div>)
       
 	}	
});


		
module.exports = ListView;






