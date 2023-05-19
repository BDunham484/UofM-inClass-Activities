-- Write your Schema Here -- 
DROP DATABASE IF EXISTS  data_db;
CREATE DATABASE data_db;

USE data_db;

CREATE TABLE (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE customer_order (
    id INT,
    customer_id INT NOT NULL,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES instructors(id)
    ON DELETE SET NULL
)
