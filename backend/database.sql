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
  "john",
  "vi",
  "john.vi@mail.com",
  "$argon2id$v=19$m=65536,t=3,p=1$WeVXPq3AaQKeX8ct7hqPeA$IH6zeqLfD3DIX/prHBkqNxUd1o1gZksQjZCiWsT+9g4",
  1,
  "2023-06-06"
  ), 
  (
    'Jane',
    'Doe',
    'jane.doe@mail.com',
    'test',
    1,
    '2023-06-08'
  ),
  (
    'john',
    'vi',
    'john.vi@mail.com',
    '$argon2id$v=19$m=65536,t=3,p=1$WeVXPq3AaQKeX8ct7hqPeA$IH6zeqLfD3DIX/prHBkqNxUd1o1gZksQjZCiWsT+9g4t',
    1,
    '2023-06-08'
  ),
  (
   'test',
   'toto',
   'test@toto.com',
   '$argon2id$v=19$m=65536,t=3,p=1$sqwnBVt3ObyTo2WKrZjOag$MXiXgzSjFWlRhUFllIbaPaX9mQPZiEQZT7shNul+bV8',
   1,
   '1899-11-29'
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

INSERT INTO videos (title, duration, views_count, upload_date, thumbnail, video, is_public) 
VALUES
("Champ 1", "00:00:10", 0, "2023-07-11", "/uploads/images/1ae84d94-e3e0-4a56-a609-9603a9348fb0-Fields_1.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Champ 2", "00:00:10", 0, "2023-07-11", "/uploads/images/840b82e8-9fca-4458-bcf2-0f71b456f44a-Fields_2.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0), 
("Champ 3", "00:00:10", 0, "2023-07-11", "/uploads/images/1b7b340b-900f-4a3d-87d9-cdd0a039d74d-Fields_3.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),   
("Champ 4", "00:00:10", 0, "2023-07-11", "/uploads/images/65ef6285-716d-41be-b367-c7272670f436-Fields_4.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),  
("Forêt 1", "00:00:08", 0, "2023-07-11", "/uploads/images/b6012fc2-f7e5-4690-a42f-2a6004b7dcb5-Forest_1.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),  
("Forêt 2", "00:00:09", 0, "2023-07-11", "/uploads/images/a0976bd8-cab7-4a5d-826d-6e31f84dc19b-Forest_2.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),  
("Forêt 3", "00:00:09", 0, "2023-07-11", "/uploads/images/1aea810f-df63-4429-94e7-3bfa96a57626-Forest_3.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),  
("Forêt 4", "00:00:10", 0, "2023-07-11", "/uploads/images/ff9c7151-1f13-4319-b246-e5240de9b903-Forest_4.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),  
("Forêt 5", "00:00:10", 0, "2023-07-11", "/uploads/images/30d75198-7c27-46a2-bd76-671496ede79c-Forest_5.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),  
("Montagne 1", "00:00:10", 0, "2023-07-11", "/uploads/images/87681119-e590-4b9f-a2a9-9d87b40bc7ad-Mountain_1.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Montagne 2", "00:00:10", 0, "2023-07-11", "/uploads/images/39288559-2462-4834-8b90-c616be3a16e6-Mountain_2.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),
("Montagne 3", "00:00:10", 0, "2023-07-11", "/uploads/images/96b774fa-11b2-496f-bf8f-c873cff4dca8-Mountain_3.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Montagne 4", "00:00:08", 0, "2023-07-11", "/uploads/images/1e69bce0-cb1c-4e49-9818-e51c799274cb-Mountain_4.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),
("Mer & Océans 1", "00:00:11", 0, "2023-07-11", "/uploads/images/1af4cdcc-7013-4857-ae04-d0e48ea1c4ba-Sea_Oceans_1.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),
("Mer & Océans 2", "00:00:10", 0, "2023-07-11", "/uploads/images/32f9be6c-f822-4b39-aed2-08501d8b1b3e-Sea_Oceans_2.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Mer & Océans 3", "00:00:10", 0, "2023-07-11", "/uploads/images/6e50492e-c8c3-4eba-890c-8512dd58154b-Sea_Oceans_3.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Mer & Océans 4", "00:00:10", 0, "2023-07-11", "/uploads/images/3c8b8bd2-4927-44db-8ab9-c8fe80f512eb-Sea_Oceans_4.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Ciel & Nuage 1", "00:00:10", 0, "2023-07-11", "/uploads/images/817232d0-2bb9-44a2-98f9-e4d70380268b-Sky_Clouds_1.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Ciel & Nuage 2", "00:00:11", 0, "2023-07-11", "/uploads/images/db35aa19-4a8e-4fad-9955-be4b67bc71b9-Sky_Clouds_2.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("Ciel & Nuage 3", "00:00:11", 0, "2023-07-11", "/uploads/images/d4eec768-2761-4b6f-806e-a74d5801d40f-Sea_Oceans_3.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4.mp4", 1),
("Ciel & Nuage 4", "00:00:11", 0, "2023-07-11", "/uploads/images/fc850209-d858-4592-b4e1-a488d2d873d1-Sky_Clouds_4.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4.mp4", 1),
("Ciel & Nuage 5", "00:00:10", 0, "2023-07-11", "/uploads/images/82f65c15-3cb7-41ed-9696-d515b35f94e4-Sky_Clouds_5.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),
("Urbain 1", "00:00:10", 0, "2023-07-11", "/uploads/images/ee708b58-038b-4d8d-9d93-37ccd2d0648f-Urban_1.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),   
("Urbain 2", "00:00:16", 0, "2023-07-11", "/uploads/images/f1ebbb01-ff62-4f7b-bf49-8c2a444ced4a-Urban_2.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),  
("Urbain 3", "00:00:11", 0, "2023-07-11", "/uploads/images/7208c8f8-e3ba-410a-a76d-eb496baff802-Urban_3.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),   
("Urbain 4", "00:00:10", 0, "2023-07-11", "/uploads/images/f824c1d3-52e0-4125-88a2-0d2a17e3572f-Urban_4.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),   
("Urbain 5", "00:00:10", 0, "2023-07-11", "/uploads/images/c7a7fb20-cf34-42b1-b30b-1698e2f0c4e4-Urban_5.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),   
("Urbain 6", "00:00:10", 0, "2023-07-11", "/uploads/images/99b8d2ed-7386-4128-b4d3-43a30bcafe50-Urban_6.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("field", "00:00:17", 0, "2023-07-09", "/uploads/images/e6c52be1-ec1f-489a-865f-2cfdaf3371b3-field.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("mer", "00:00:18", 0, "2023-07-09", "/uploads/images/bcfd75e6-f8a9-4de3-a165-6e4c3a4efa4a-mer.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("montagne", "00:00:20", 0, "2023-07-09", "/uploads/images/5d9ff10f-58f5-4941-8ddb-d20c080a13e3-montagne.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 0),
("river, road & forest", "00:00:12", 0, "2023-07-09", "/uploads/images/e065504b-3618-4cb4-a4ac-1884e57de606-river_road_forest.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("sunset", "00:00:21", 0, "2023-07-09", "/uploads/images/f8897740-0895-4fd8-9e01-34d72e14c9ef-sunset.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1),
("urbain", "00:00:05", 0, "2023-07-09", "/uploads/images/7c5785f9-4ace-4b1a-a7b2-961f7f320f49-urbain.png", "/uploads/videos/ddf1ca02-04a3-4143-b036-0a684ec445dc-urbain.mp4", 1);

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
  section_id int NOT NULL, FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
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
