CREATE DATABASE IF NOT EXISTS los_pollos_db;

USE los_pollos_db;

CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    phone_number VARCHAR(20)
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    name VARCHAR(255),
    price FLOAT,
    img VARCHAR(255),
    available TINYINT(1),
    category VARCHAR(255)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    order_date DATETIME,
    order_status VARCHAR(50),
    total_amount FLOAT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Order_Lines (
    order_line_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price FLOAT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    order_id INT,
    stripe_payment_id VARCHAR(255),
    amount FLOAT,
    payment_date DATETIME,
    payment_status VARCHAR(50),
    event_type VARCHAR(100),
    event_date DATETIME,
    event_details TEXT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);
