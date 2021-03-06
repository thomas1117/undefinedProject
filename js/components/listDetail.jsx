var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var listDetailView = Backbone.Model.extend({
        initialize: function() {
            console.log("a new detail list has been created");
        }
});

var ListDetailView = Backbone.Collection.extend({
    url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});

var myListDetailView = new ListDetailView();

myListDetailView.fetch({
    success: function(resp) {
        var test = resp.toJSON();
        var mapped=test[0].results.map(function(obj){
            return {
                'item_set': obj.item_set
            }
        });
        var pageData=mapped[0].item_set.map(function(obj){
            return {
                'title': obj.title,
                'name': obj.name,
                'price': obj.price,
                'image': obj.image                
            }
        })
        console.log(pageData);
        ReactDOM.render(<listDetailView data={pageData}/>, document.getElementById('container'));
    },
    error: function(error) {
        console.log(error);
    }
});

var theListDetailView = React.createClass({
    render: function () {
        var here=this.props.data.map(function(obj) {
            console.log(obj);
            return (
             <div className="listsDiv">
                  <ul className="listsUl">
                      <li className="listsLi">
                         <img className="listsImg" src={obj.image}/>
                         <span className="listsTitle">{obj.title}</span>
                         <span className="listsName">{obj.name}</span>
                         <span className="listsPrice">{obj.price}</span>
                      </li>
                  </ul>
             </div>
            )
        });
       return(<div>{here}</div>);        
    }
});


module.exports = listDetailView;



