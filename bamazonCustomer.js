// VARIABLES 

// Adding dependencies and storing into variables
var mysql = require('mysql');
var inquirer = require('inquirer');


// var server = http.createServer(handleRequest);
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Taw9951019797',
    database: 'Bamazon'
});




// FUNCTIONS //



// Connects to database and console logs connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    start();
})

