dconst React = require('react');
const helpers = require('./../utils/helpers.js');

class Contact extends React.Component {
constructor(props){
	super(props);
	this.state = {
		name: '',
		email: '',
		message: ''
	}
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

}



handleChange(event) {

const target = event.target;
const value = target.value;
const name = target.name;


     this.setState({
       [name]: value
     });

}

handleSubmit(event){
	event.preventDefault();

	console.log(this.state);
	// console.log(this.refs);
	helpers.sendMessage(this.state.name, this.state.email, this.state.message);

		
	this.refs.name.value="";
	this.refs.email.value="";
	this.refs.message.value="";


	// this.setState({
	// 	name: '',
	// 	email: '',
	// 	message: ''
	// })

}


componentDidUpdate(){


}	


render(){
	return (
		<div className="container">
			<div className="row">


				<div className="col-sm-5" id="contactmeform">
					<form onSubmit={this.handleSubmit} name="contactForm">

								<h2 id="inputh2"><span id="spaninputh2">Send a Message.	</span></h2>
							  <div className="form-group">
							    <label>Name</label>
							    <input type="text" className="form-control" ref="name" onChange={this.handleChange} name="name" id="name" placeholder="Name"/>
							  </div>	
							  <div className="form-group">
							    <label>Email address</label>
							    <input type="email" className="form-control" ref="email" onChange={this.handleChange} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
							    <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
							  </div>
							  <div className="form-group">
							    <label>Leave a message.</label>
							    <textarea className="form-control" ref="message" onChange={this.handleChange} id="message" name='message' rows="3"></textarea>
							  </div>

							  
  								<input value="Submit" className="btn" type="submit"/>					
  				</form>
				</div>
				<div className="col-sm-2">	
				</div>


				<div className="col-sm-4" id='contact-contact'>
					<div id="insideCContact">
					<h2 id="contacth2"><span id="contactspan"> Connect with Me </span></h2>
					<section>
					<a id='homea' href="https://github.com/fodnb" target="_blank">
					<img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/29-128.png" alt="GitHub"/>
					</a>
					<a id='homea' href="https://www.linkedin.com/in/daniel-mcghee-aa8b2b55" target="_blank">
					<img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/9-128.png" alt="linkedin"/>
					</a>
					<a id='homea' href="https://stackoverflow.com/users/edit/7249826" target="_blank">
					<img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/overflow-128.png" alt="stackoverflow"/>
					</a>

					</section>
					</div>
				</div>


		</div>
		</div>
	
		)
}


}

module.exports = Contact;