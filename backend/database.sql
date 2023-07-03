------ CREATE TABLE ROLES ------ 
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO roles (role) VALUES ("user"), ("admin");

------ CREATE TABLE USERS ------ 
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  hashedPassword varchar(255) NOT NULL,
  role_id VARCHAR(100) NOT NULL, FOREIGN KEY (role_id) REFERENCES roles(id),
  inscription_date date NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, hashedPassword, role_id, inscription_date) 
VALUES 
  (
    'Vivid',
    'videos',
    'vivid@mail.com',
    '',
    2,
    '2023-06-07'
  ),
  (
    'John',
    'Doe',
    'john.doe@mail.com',
    '',
    1,
    '2023-06-08'
  ), 
  (
    'Jane',
    'Doe',
    'jane.doe@mail.com',
    '',
    1,
    '2023-06-08'
  );

-- CREATE TABLE VIDEOS -- START
DROP TABLE IF EXISTS videos;
CREATE TABLE videos (
  id int(11) UNSIGNED primary key NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  duration int NOT NULL,
  views_count int NOT NULL,
  upload_date DATE NOT NULL,
  cover_img varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO videos (title, duration, views_count, upload_date, cover_img) 
VALUES(
    'Nature sauvage',
    120,
    23,
    '2023-06-08',
    '/assets/images/blue-forest.jpg'
  ),
  (
    'Plaine sauvages',
    20,
    123,
    '2023-06-08',
    '/assets/images/cloud-city.jpg'
  ),
  (
    'Paris Urbains',
    250,
    2350,
    '2023-06-08',
    '/assets/images/cloud-mountain.jpg'
  ),
  (
    'plan des forets',
    120,
    23,
    '2023-06-08',
    '/assets/images/forest-beach.jpg'
  ),
  (
    'Amazonie',
    180,
    283,
    '2023-06-08',
    '/assets/images/forest-beach2.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/red-mountain.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/mountain.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/sea.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/snow-road.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/street.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/urbain.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/verdure.jpg'
  ),
  (
    'red mountain',
    120,
    23,
    '2023-06-08',
    '/assets/images/white-city.jpg'
  );

-- CREATE TABLE FAVORITES -- START
DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id),
  video_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (video_id) REFERENCES videos(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- CREATE TABLE CATEGORIES -- START
DROP TABLE IF EXISTS categories;

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
DROP TABLE IF EXISTS video_category;

CREATE TABLE video_category (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  video_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (video_id) REFERENCES videos(id),
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

  -- CREATE TABLE sections -- START
DROP TABLE IF EXISTS sections;
CREATE TABLE sections (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  section VARCHAR(255) NOT NULL,
  is_dynamic TINYINT(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;  

INSERT INTO sections (section) VALUES ('slider', 0), ('grid', 0), ('carousel', 0);

-- CREATE TABLE section_category -- START
DROP TABLE IF EXISTS section_category;
CREATE TABLE section_category  (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  section_id int NOT NULL, FOREIGN KEY (section_id) REFERENCES sections(id),
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id),
  position int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- CREATE TABLE video_section --
DROP TABLE IF EXISTS video_section;
CREATE TABLE video_section  (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  section_id int NOT NULL, FOREIGN KEY (section_id) REFERENCES sections(id),
  video_id int NOT NULL, FOREIGN KEY (video_id) REFERENCES videos(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
