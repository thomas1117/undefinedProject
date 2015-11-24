var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css')






var GuestView = React.createClass({
	render: function() {
    
      var bla=this.props.data.map(function(obj) {
      		return(
        			<div id="guestDiv">
        				<ul id="guestUl">
        					<li id="guestLi">
        					 	<img id="guestImg" src={obj.image}/>
                        		<span id="guestName">{obj.name}</span>
                        		<span id="guestPrice">{obj.price}</span>
        					 </li>
        				</ul>
        			</div>
			       )
      })  
        return(<div>{bla}</div>)

		
   }   
});

module.exports = GuestView;


