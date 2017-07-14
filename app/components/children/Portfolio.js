var React = require('react');


class Portfolio extends React.Component{
constructor(props){
	super(props);
	this.state = {
		images: [
		{
		image: "https://files.slack.com/files-tmb/T3EQU9YN8-F5Z9YM736-7a29ea7126/animaltrivia_720.png",
		name: "Animal Trivia Game",
		link: "https://nameless-wildwood-93811.herokuapp.com/" 
		},
		{
		image: "https://files.slack.com/files-tmb/T3EQU9YN8-F5ZB9K4HK-016b0778e7/crystalcollector_720.png",
		name: "Crystal Collector Game",
		link: "https://boiling-hamlet-40831.herokuapp.com/"
		},
		{
		image: "https://files.slack.com/files-tmb/T3EQU9YN8-F5Z6B6V8T-00b0c816c0/giphyapp_720.png",
		name: 'Giphy Finder',
		link: 'https://afternoon-hollows-99543.herokuapp.com/'
		},
		{
		image: 'https://files.slack.com/files-tmb/T3EQU9YN8-F5ZBFN9FX-b0bba8df89/buildyouralliance_1024.png',
		name: 'Star Wars Friend Finder',
		link: 'https://fierce-beyond-18320.herokuapp.com/'	
		},
		{
		image: 'https://files.slack.com/files-tmb/T3EQU9YN8-F603NFPPH-a0428b7148/petfinder_720.png',
		name: 'RCB Pet Adoption Website',
		link: "https://secure-reaches-39913.herokuapp.com/"
		},
		{
		image: 'https://files.slack.com/files-pri/T3EQU9YN8-F68M2ARC1/halloweenhangman.png',
		name: "Halloween Hangman",
		link: "https://vast-meadow-87935.herokuapp.com/"	
		}
	],
	currentimage: "https://files.slack.com/files-tmb/T3EQU9YN8-F5Z9YM736-7a29ea7126/animaltrivia_720.png",
	currentname: "Animal Trivia Game",
	currentlink: "https://nameless-wildwood-93811.herokuapp.com/",
	count: 0

	}
	this.onSubmit = this.onSubmit.bind(this);

}


onSubmit(event){
console.log('im clicked');
console.log(this.state.count)
if(this.state.count < 5){
	var n = this.state.count + 1;
	this.setState({
		currentimage: this.state.images[n].image,
		currentname: this.state.images[n].name,
		currentlink: this.state.images[n].link,
		count: n
	})}else{
		var n = 0;
		this.setState({
		currentimage: this.state.images[n].image,
		currentname: this.state.images[n].name,
		currentlink: this.state.images[n].link,
		count: 0
		})
	}
console.log(this.state.currentname);



}


    render() {
        return (
			<div className="fluid-container">
			<div className="row">

				<div className="col-sm-3">
				</div>
				
				<div id="portdiv" className="col-sm-6">

				<img id="portfolioimg" src={this.state.currentimage}/>

				<a id="imgap" href={this.state.currentlink} target="#" >Visit: {this.state.currentname}</a><br/>
				<button onClick={this.onSubmit} id="portbutton" className="btn btn-lg btn-primary"> Next </button>
				</div> 

				<div className="col-sm-3">
				</div>


			</div>
			</div>
        )
    }
}	

module.exports = Portfolio;