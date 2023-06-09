-- CREATE TABLE CATEGORIES -- START
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO categories (name)
VALUES 
('Ciel & Nuage'),
('Montagne'),
('Forêts'),
('Mer & Océans'),
('Urbain'),
('Champ');