// Import the express library 
// from node_modules/express
const express = require( `express` );

// Go go gadget express!
// Makes an app, aka a "server"
const app = express();

// Start up the server
app.listen( 3000, function(){
    console.log( `I'm listening` );
} );