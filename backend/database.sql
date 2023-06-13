CREATE TABLE users (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  role varchar(255) NOT NULL,
  inscription_date date NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, password, role, inscription_date) 
VALUES ('Vivid', 'videos', 'vivid@mail.com', '**********', 'admin', '2023-06-07'),
('John', 'Doe', 'john.doe@mail.com', '*********', 'user', '2023-06-08'), 
('Jane', 'Doe', 'jane.doe@mail.com', '********', 'user', '2023-06-08');

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int(11) UNSIGNED FOREIGN KEY NOT NULL REFERENCES users(id),
  video_id int(11) UNSIGNED FOREIGN KEY NOT NULL REFERENCES videos(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS video_category;

CREATE TABLE video_category (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  video_id int(11) UNSIGNED FOREIGN KEY NOT NULL REFERENCES videos(id)
  category_id int(11) UNSIGNED FOREIGN KEY NOT NULL REFERENCES categories(id),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;