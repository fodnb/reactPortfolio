const React = require('react');


class Home extends React.Component {
constructor(props){
	super(props);
	this.state = {


	}
}


render(){

	

	return (
		<div className="fluid-container">

		<div className="row">

			<div className="col-sm-1">		
			</div>

			<div className="col-sm-5" id="home">
			<h2 id="h2about"><span id="homespan">About Me</span></h2>
			<img className="myPhoto" src='https://lh3.googleusercontent.com/za8XBnEyuVYcvtvGf6p7uHTLBqGAiegBKvtyC7uuzMGLePMPpIdLS9ut5Abb6xS-25cD3dE9=w220-h220-n-o-rw' alt="myphoto"/>
			<section>
				<p id="homep"> Hello World! I'm new to Web Development and I know that I have a lot to learn. Going through the process is going to be very hard but nothing great happens easily! I know there will be times when I'm doubtful of my abilities or times that I don't understand the content we're covering but I made a commitment and no one forced me to be here, So I will Prevail!</p>

				<p id="homep">I want to become a Web Developer and I'm looking to start a new career. I want to work in a field I always feel I can improve my skill set and have an upard mobility. On top of the field growing, a promising career is within the grasp of anyone who can learn.</p>

				<p id="homep">A few things I personally enjoy are Going to Rock Concerts, playing sports, watching movies, hiking, traveling. </p>
			
			</section>
			</div>

			<div className="col-sm-4" id='home-contact'>
					<div id="insideContact">
					<h2><span id="homespan"> Connect with Me </span></h2>
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
			<div className="col-sm-1">
			</div>


		</div>

		</div>
		)
}


}

module.exports = Home;