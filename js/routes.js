var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.route;

var Routes = (
	<DefaultRoute Handler={require("/")} />
	<Route name = "funderDetail" handler={require(".components/funderDetail")} />
	<Route name = "funderView" handler={require(".components/funderView")} />
	<Route name = "guestDetail" handler={require(".components/guestDetail")} />
	<Route name = "guestView" handler={require(".components/guestView")} />
	<Route name = "listDetail" handler={require(".components/listDetail")} />
	<Route name = "listItem" handler={require(".components/listItem")} />
	<Route name = "listView" handler={require(".components/listView")} />
	<Route name = "loginRegister" handler={require(".components/loginRegister")} />
	<Route name = "registerForm" handler={require(".components/registerForm")} />
</Route>
);

module.exports = routes;