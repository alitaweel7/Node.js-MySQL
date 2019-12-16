DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (45) NOT NULL,
  department_name VARCHAR
    (45) NOT NULL,
  price INT default 0,
  stock INT default 0,
  PRIMARY KEY
    (item_id)
);

    insert into products
        (product_name, department_name, price, stock)
    VALUES
        ('Takyea', 'Bottles', '30.00' , '100');

    insert into products
        (product_name, department_name, price, stock)
    VALUES
        ('Apple', 'Phone', '1000.00' , '100');

    insert into products
        (product_name, department_name, price, stock)
    VALUES
        ('Playstation', 'Electronics', '300.00' , '100');

    insert into products
        (product_name, department_name, price, stock)
    VALUES
        ('Adidas', 'Clothing', '40.00' , '200');

    insert into products
        (product_name, department_name, price, stock)
    VALUES
        ('Table', 'Furniture', '70.00' , '50');

    SELECT *
    from products;