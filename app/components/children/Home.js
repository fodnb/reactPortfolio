const React = require('react');


class Home extends React.Component {
constructor(props){
	super(props);
	this.state = {


	}
}


render(){

	

	return (
		<div className="container">

		<div className="row">

			<div className="col-sm-1">		
			</div>

			<div className="col-sm-6" id="home">
			<h2 id="h2about"><span id="homespan">A Journey to Take!</span></h2>
			<img className="myPhoto" src='http://i.imgur.com/qthzDfS.jpg' alt="myphoto"/>
			<section>
				<p id="homep"> Hello World...!! Web Development is my passion and I love that I always have a lot to learn. One thing I've learned is that problem solving is at the core of this creative domain and I enjoy piecing the puzzles together.  I'm looking forward to the troubles of breaking down the barriers in my own skillset and proving that I have what it takes.</p>

				<p id="homep">I'm looking for the next Challenge and the opportunity to prove I can take those next steps. I want to combine the skillset I have from previous experiences including Management, Customer Service and Team Building and bring those into my newfound passion.</p>

				<p id="homep">A few things I personally enjoy are: Creating new projects, playing sports, watching movies, hiking, traveling. </p>
			
			</section>
			</div>

			<div className="col-sm-4" id='home-contact'>
					<div id="insideContact">
					<h2><span id="homespan"> Let's Connect </span></h2>
					<div id="contactDiv">
					<a id='homea' href="https://github.com/fodnb" target="_blank">
					<img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/29-128.png" alt="GitHub"/>
					</a>
					<a id='homea' href="https://www.linkedin.com/in/daniel-mcghee-aa8b2b55" target="_blank">
					<img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/9-128.png" alt="linkedin"/>
					</a>
					<a id='homea' href="https://stackoverflow.com/users/edit/7249826" target="_blank">
					<img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/overflow-128.png" alt="stackoverflow"/>
					</a>

					</div>
					</div>
			</div>
			<div className="col-sm-1">
			</div>


		</div>

		</div>
		)
}


}

module.exports = Home;