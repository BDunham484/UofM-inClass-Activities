-- Write your Schema Here -- 
DROP DATABASE IF EXISTS  data_db;
CREATE DATABASE data_db;

USE data_db;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customer_order (
    id INT NOT NULL,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);
