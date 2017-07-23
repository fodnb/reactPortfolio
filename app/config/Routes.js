var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

const Nav = require('./../components/children/Nav');
const Header = require('./../components/children/Header');
const Home = require("./../components/children/Home");
const Contact = require('./../components/children/Contact');
const Portfolio = require('./../components/children/Portfolio');
const Footer = require('./../components/children/Footer');

class Routes extends React.Component {
	render(){
		return (
				
				<Router>
				<div className="fluid-container">
				<Header />
				<Nav/>
				
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/contact' component={Contact}/>
					<Route path='/portfolio' component={Portfolio}/>
 				</Switch>
				<div id="footer">
 				<Footer />
 				</div>
				</div>
				
				</Router>	

			)
	}
}

module.exports = Routes;
