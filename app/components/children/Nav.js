const React = require('react');
const NavLink = require('react-router-dom').NavLink;



class Nav extends React.Component {
constructor(props){
	super(props);
	this.state = {


	}
}


render(){
	return (
			<nav className="navbar navbar-right navbar-fixed-top">
  				<div className="container">

					<ul className="nav">
						<li id="nav">
							<NavLink activeClassName='active' to='/portfolio'>Portfolio</NavLink>
						</li>
						<li id="nav">
							<NavLink activeClassName='active' to='/contact'>Contact</NavLink>
						</li>

						<li id="nav">
							<NavLink exact activeClassName='active' to='/'>Home</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

module.exports = Nav;

