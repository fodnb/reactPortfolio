const React = require('react');

class Contact extends React.Component {
constructor(props){
	super(props);
	this.state = {


	}
}


render(){
	return (
		<div className="container">
			<div className="row">


				<div className="col-sm-5" id="contactmeform">
					<form>


							  <div className="form-group">
							    <label for="name">Name</label>
							    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Name"/>
							  </div>	
							  <div className="form-group">
							    <label for="email">Email address</label>
							    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
							    <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
							  </div>
							  <div className="form-group">
							    <label for="exampleTextarea">Example textarea</label>
							    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
							  </div>

							  
							  <button type="submit" className="btn btn-primary">Submit</button>
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