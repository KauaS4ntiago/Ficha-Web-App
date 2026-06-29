CREATE DATABASE ficharpg;

USE ficharpg;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE characters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE attribute (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    value TINYINT NOT NULL CHECK (value BETWEEN -4 AND 5),
    FOREIGN KEY (character_id) REFERENCES characters(id)
);

CREATE TABLE skill (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    value TINYINT NOT NULL CHECK (value BETWEEN 5 AND 20),
    FOREIGN KEY (character_id) REFERENCES characters(id)
);

CREATE TABLE ability (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    FOREIGN KEY (character_id) REFERENCES characters(id)
);