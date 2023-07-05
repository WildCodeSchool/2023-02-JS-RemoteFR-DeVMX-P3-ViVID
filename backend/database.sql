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
  email varchar(255) NOT NULL,
  hashedPassword varchar(255) NOT NULL,
  role_id int NOT NULL, FOREIGN KEY (role_id) REFERENCES roles(id),
  inscription_date date NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, hashedPassword, role_id, inscription_date) 
VALUES 
  (
    'Vivid',
    'videos',
    'vivid@mail.com',
    'test',
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

CREATE TABLE videos (
  id int(11) UNSIGNED primary key NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  duration varchar(50) NOT NULL,
  views_count int DEFAULT NULL,
  upload_date DATE NOT NULL,
  thumbnail varchar(255) NOT NULL,
  video varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO videos (title, duration, views_count, upload_date, thumbnail, video) 
VALUES(
    'Nature sauvage',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/blue-forest.jpg',
    '/uploads/videos/1b966a3a-bc5a-46da-a2a0-adb4941e645b-river_road_forest.mp4'
  ),
  (
    'Plaine sauvages',
    "00:02:00",
    123,
    '2023-06-08',
    '/assets/images/cloud-city.jpg',
    '-'
  ),
  (
    'Paris Urbains',
    "00:02:00",
    2350,
    '2023-06-08',
    '/assets/images/cloud-mountain.jpg',
    '-'
  ),
  (
    'plan des forets',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/forest-beach.jpg',
    '-'
  ),
  (
    'Amazonie',
    "00:02:00",
    283,
    '2023-06-08',
    '/assets/images/forest-beach2.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/red-mountain.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/mountain.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/sea.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/snow-road.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/street.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/urbain.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/verdure.jpg',
    '-'
  ),
  (
    'red mountain',
    "00:02:00",
    23,
    '2023-06-08',
    '/assets/images/white-city.jpg',
    '-'
  );

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

  -- CREATE TABLE sections -- START

CREATE TABLE sections (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  section VARCHAR(255) NOT NULL,
  is_dynamic TINYINT(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;  

INSERT INTO sections (section, is_dynamic) VALUES ('slider', 0), ('grid', 0), ('carousel', 0);

-- CREATE TABLE section_category -- START

CREATE TABLE section_category  (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  section_id int NOT NULL, FOREIGN KEY (section_id) REFERENCES sections(id),
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id),
  position int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- CREATE TABLE video_section --

CREATE TABLE video_section  (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  section_id int NOT NULL, FOREIGN KEY (section_id) REFERENCES sections(id),
  video_id int(11) UNSIGNED NOT NULL, FOREIGN KEY (video_id) REFERENCES videos(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
