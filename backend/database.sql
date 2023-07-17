-- CREATE TABLE ROLES -- 
CREATE TABLE roles (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO roles (role) VALUES ("user"), ("admin");

-- CREATE TABLE USERS -- 
CREATE TABLE users (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  hpassword varchar(255) NOT NULL,
  role_id int NOT NULL, FOREIGN KEY (role_id) REFERENCES roles(id),
  inscription_date date NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, hpassword, role_id, inscription_date) 
VALUES 
(
    'Vivid',
    'videos',
    'vivid@mail.com',
    '$argon2id$v=19$m=65536,t=3,p=1$XGszlKsnrd7ebOkqWMucTg$3oUIyPPa8RvW/beMBr8YEN7/M8z6MxFuwF0EDy7A7lw',
    2,
    '2023-06-07'
  ),
  (
    'John',
    'Doe',
    'john.doe@mail.com',
    'test',
    1,
    '2023-06-08'
  ), 
  (
    'Jane',
    'Doe',
    'jane.doe@mail.com',
    'test',
    1,
    '2023-06-08'
  );

-- CREATE TABLE VIDEOS -- START

CREATE TABLE videos (
  id int(11) UNSIGNED primary key NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  duration varchar(50) NOT NULL,
  views_count int DEFAULT NULL,
  upload_date DATE NOT NULL,
  thumbnail varchar(255) NOT NULL,
  video varchar(254) NOT NULL,
  is_public TINYINT(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- CREATE TABLE FAVORITES -- START

CREATE TABLE favorites (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id),
  video_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (video_id) REFERENCES videos(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- CREATE TABLE CATEGORIES -- START
CREATE TABLE categories (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO categories (category)
VALUES 
  ('Home'),
  ('Ciel & Nuage'),
  ('Montagne'),
  ('Forêts'),
  ('Mer & Océans'),
  ('Urbain'),
  ('Champ');

-- CREATE TABLE VIDEO_CATEGORY -- START

CREATE TABLE video_category (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  video_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (video_id) REFERENCES videos(id),
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO video_category (video_id, category_id)
VALUES 
(1, 7),(2, 7),(3, 7),(4, 7),(5, 4),(6, 4),(7, 4),(8, 4),(9, 4),(10, 3),
(11, 3),(12, 3),(13, 3),(14, 5),(15, 5),(16, 5),(17, 5),(18, 2),(19, 2),(20, 2),
(21, 2),(22, 2),(23, 6),(24, 6),(25, 6),(26, 6), (27, 6),(28, 6),(29, 7),(30, 5),
(31, 3),(32, 4),(33, 2),(34, 6); 

  -- CREATE TABLE sections -- START

CREATE TABLE sections (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  section VARCHAR(255) NOT NULL,
  is_dynamic TINYINT(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;  

INSERT INTO sections (section, is_dynamic) VALUES ('grid', 0), ('slider', 0), ('carousel', 0);

-- CREATE TABLE video_section --

CREATE TABLE video_section  (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  video_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (video_id) REFERENCES videos(id),
  section_id int NOT NULL, FOREIGN KEY (section_id) REFERENCES sections(id),
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO video_section (video_id, section_id, category_id) VALUES 
(10, 2, 1),
( 8, 2, 1),
( 6, 2, 1),
(17, 2, 1),
(29, 3, 2),
(17, 3, 2),
(10, 3, 2),
(22, 3, 2),
(33, 3, 2),
(20, 3, 2),
( 4, 3, 2),
(19, 3, 2),
(11, 3, 3),
(12, 3, 3),
(13, 3, 3),
(31, 3, 3),
(32, 3, 4),
( 9, 3, 4),
( 5, 3, 4),
( 8, 3, 4),
(17, 2, 5),
(30, 2, 5),
(16, 2, 5),
(15, 2, 5);
