const React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


const Home = require('./children/Home.js');
const Contact = require('./children/Contact.js');
const Portfolio = require('./children/Portfolio.js');
const helpers = require('./utils/helpers.js');
const Nav = require("./children/Nav");



class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newterm: '',
			sDate: "",
			eDate: "",
			results: [],
			history: []
		}
		this.setTerm = this.setTerm.bind(this);
	}

	setTerm(term, startDate, endDate){
		this.setState({newterm: term, sDate: startDate, eDate: endDate})
	}

	componentDidMount(){
		helpers.getHistory().then(function(response) {
      // console.log(response);
      if (response !== this.state.history) {
        // console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
	}


	  componentDidUpdate() {

    // Run the query for the address
    helpers.runQuery(this.state.newterm, this.state.sDate, this.state.eDate).then(function(data) {
      	console.log("data");
      	console.log(data);
      if (data !== this.state.results) {
        console.log(data);
        this.setState( {results: data} );
        console.log("----------");
        console.log(this.state.results);
        console.log("----------");
        // After we've received the result... then post the search term to our history.
        // helpers.postHistory(results.title, results.link, results.date).then(function() {
        //   console.log("Updated!");
        //   console.log(results)


          // After we've done the post... then get the updated history
         helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            this.setState({ history: response.data });

          }.bind(this));
        // }.bind(this));
      }
    }.bind(this));
  }
	render(){



		return(
			<Router>
			<div className="container">	
			<div className="jumbotron">
          <h1 className="panel-title text-center">NY TIMES REACT APP</h1>
       		</div>
       			<Nav />

       			<Switch>
				<Route path='/saved' component={Saved}/>
				<Route path='/search' component={Search}/>
				<Route render={function () {
					return <p>Not Found</p>
				} } />
				</Switch>
		
			</div>


			</Router>

			)
	}
}

module.exports = App;

