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

INSERT INTO videos(title, duration, views_count, upload_date, cover_img) 
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

-- CREATE TABLE USERS -- START
DROP TABLE IF EXISTS users;
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
VALUES 
  (
    'Vivid',
    'videos',
    'vivid@mail.com',
    '**********',
    'admin',
    '2023-06-07'
  ),
  (
    'John',
    'Doe',
    'john.doe@mail.com',
    '*********',
    'user',
    '2023-06-08'
  ), 
  (
    'Jane',
    'Doe',
    'jane.doe@mail.com',
    '********',
    'user',
    '2023-06-08'
  );

-- CREATE TABLE FAVORITES -- START
DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int(11) UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  video_id int(11) UNSIGNED NOT NULL,
  FOREIGN KEY (video_id) REFERENCES videos(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- CREATE TABLE CATEGORIES -- START
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
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
  
  -- CREATE TABLE VIDEO_CATEGORY -- START
DROP TABLE IF EXISTS video_category;

CREATE TABLE video_category (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  video_id int(11) UNSIGNED NOT NULL,
  FOREIGN KEY (video_id) REFERENCES videos(id),
  category_id int NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
