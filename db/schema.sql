-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS gn8frimh9j39wfjg;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE gn8frimh9j39wfjg;

USE gn8frimh9j39wfjg;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAUL FALSE,
  PRIMARY KEY (id)
);

