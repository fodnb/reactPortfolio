const React = require('react');
const NavLink = require('react-router-dom').NavLink;

class Header extends React.Component {
constructor(props){
	super(props);
	this.state = {


	}
}


render(){
	return (
		<div id="header" className="fluid-container">
			<div className="container">
  				<div className="page-header">
    				<h1 id="headername">Daniel McGhee</h1>      
  				</div>

  				<p id='headerp'>Full Stack Developer</p>      
			</div>
		</div>
	)
}


}

module.exports = Header;





