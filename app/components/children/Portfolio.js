var React = require('react');


class Portfolio extends React.Component{
constructor(props){
	super(props);
	this.state = {
		images: [
		{
		image: "http://imgur.com/N7Xi8ps",
		name: "Animal Trivia Game",
		link: "https://nameless-wildwood-93811.herokuapp.com/" 
		},
		{
		image: "http://imgur.com/d9dfxlY",
		name: "Crystal Collector Game",
		link: "https://boiling-hamlet-40831.herokuapp.com/"
		},
		{
		image: "http://imgur.com/Eqjh8BN",
		name: 'Giphy Finder',
		link: 'https://afternoon-hollows-99543.herokuapp.com/'
		},
		{
		image: 'http://imgur.com/d0Er43i',
		name: 'Star Wars Friend Finder',
		link: 'https://fierce-beyond-18320.herokuapp.com/'	
		},
		{
		image: 'http://imgur.com/QDZTSZb',
		name: 'RCB Pet Adoption Website',
		link: "https://secure-reaches-39913.herokuapp.com/"
		},
		{
		image: 'http://imgur.com/zhog0O4',
		name: "Halloween Hangman",
		link: "https://vast-meadow-87935.herokuapp.com/"	
		}
	],
	currentimage: "http://imgur.com/N7Xi8ps",
	currentname: "Animal Trivia Game",
	currentlink: "https://nameless-wildwood-93811.herokuapp.com/",
	count: 0

	}
	this.onSubmit = this.onSubmit.bind(this);

}


onSubmit(event){
console.log('im clicked');
console.log(this.state.count)
if(this.state.count < (this.state.images.length -1)){
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