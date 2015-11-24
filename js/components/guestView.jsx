var React = require('react');


var GuestView = React.createClass({
  render: function () {
    var bla = this.props.data.map(function(obj){
      return (
        <div key={obj.id} className="guestDiv">
          <ul className="guestUl">
            <li className="guestLi">
              <img className="guestImg" src={obj.image} />
              <span className="guestName">{obj.name}</span>
              <span className="guestPrice">{obj.price}</span>
            </li>
          </ul>
        </div>
      )
    });

    return <div>{bla}</div>;
  }
});

module.exports = GuestView;