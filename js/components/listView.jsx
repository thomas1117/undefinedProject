var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css');
require('../../css/listView.css');



var ListView = React.createClass({
	render: function () {
		
		var here=this.props.data.map(function(obj) {
			
				return(
						<div id="listDiv">
							<span id="listTitle"></span><span id="deadline"></span>
							<img id="listImg" src={obj.image}/>
							<span id="listName">{obj.name}</span>
							<span id="listPrice">{obj.price}</span>
						</div>
					)
		})
				return(<div class="container2">{here}</div>)
       
 	}	
});


		
module.exports = ListView;






