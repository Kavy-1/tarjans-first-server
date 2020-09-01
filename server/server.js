// Import the express library 
// from node_modules/express
const express = require( `express` );

// Go go gadget express!
// Makes an app, aka a "server"
const app = express();

// Incantation for serving static files
app.use( express.static( `server/public` ) );

// When I get a request at "/hello"
// send back a response of "Hello World"
app.get(`/hello`, function( req, res ){
    res.send();
} );

// Start up the server
app.listen( 3000, function(){
    console.log( `I'm listening on 3000` );
} );