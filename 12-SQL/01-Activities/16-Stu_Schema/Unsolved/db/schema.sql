-- Write your schema here --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE products ( 
    id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    n_stock BOOLEAN NOT NULL, 
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL 
);

CREATE TABLE categories (
    id INT NOT NULL,
    category_name VARCHAR(30),
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);