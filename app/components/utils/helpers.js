const axios = require('axios');




var helper = {

	sendMessage(name, email, message){

	return axios.post('/api', {name: name, email: email, message: message});
	console.log("in post history");

	}


};


module.exports = helper;