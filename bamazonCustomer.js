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


// Starts Bamazon 
var start = function () {
    connection.query('SELECT * FROM products', function (err, res) {
        for (var i = 0; i < res.length; i++) {

            console.log('Item Id: ' + res[i].item_id + ' '
                + ' Product: ' + res[i].product_name + ' ' + "DEPARTMENT: " + res[i].department_name + ' Price: $' + res[i].price + ' | ' + ' Available: ' + res[i].stock_quantity);
        }
        purchaseItem();
    })

}

// Function to purchase an item.
var purchaseItem = function () {
    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message: "Please enter Item ID you would like to purchase",
        validate: function (value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return 'Please enter a valid Product ID'
        }

    }, {
        name: "stock_quantity",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function (value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }
            return 'Please enter a valid quantity.'
        }

    }]).then(function (answer) {
        connection.query('SELECT * FROM products WHERE item_id = ?', [answer.item_id], function (err, res) {
            console.log(res);
            if (answer.stock_quantity > res[0].stock_quantity) {
                console.log('INSUFFICIENT QUANTITY');

                quitBamazon();
            } else {
                let priceTotal = res[0].price * answer.stock_quantity;
                currentDepartment = res[0].department_name;
                console.log('Your Total Amount is $' + priceTotal);
                console.log('Thank you for your order');
                console.log('');
                var math = res[0].stock_quantity - parseInt(answer.stock_quantity);
                connection.query('UPDATE products SET stock_quantity= ' + math + ' WHERE item_id =' + answer.item_id);
                quitBamazon();
            }
        });
    });

};


// Function to quit Bamazon
var quitBamazon = function () {
    connection.end();
}
