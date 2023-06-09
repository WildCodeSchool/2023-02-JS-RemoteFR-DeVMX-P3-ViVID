CREATE TABLE users (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  role varchar(255) NOT NULL,
  inscription_date date NOT NULL
  -- favorite_id int(11) FOREIGN KEY NOT NULL REFERENCES 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, password, role, inscription_date) 
VALUES ('Vivid', 'videos', 'vivid@mail.com', '**********', 'admin', '2023-06-07'),
('John', 'Doe', 'john.doe@mail.com', '*********', 'user', '2023-06-08'), 
('Jane', 'Doe', 'jane.doe@mail.com', '********', 'user', '2023-06-08');
