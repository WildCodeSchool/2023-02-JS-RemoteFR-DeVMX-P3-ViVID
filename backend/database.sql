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

INSERT INTO videos (title, duration, views_count, upload_date, thumbnail, video, is_public) 
VALUES
("Champ 1", "00:00:10", 0, "2023-07-11", "/uploads/images/1ae84d94-e3e0-4a56-a609-9603a9348fb0-Fields_1.png", "/uploads/videos/e8459567-bdf3-4eba-9c96-4a94559420e1-Field(1).mp4", 1),
("Champ 2", "00:00:10", 0, "2023-07-11", "/uploads/images/840b82e8-9fca-4458-bcf2-0f71b456f44a-Fields_2.png", "/uploads/videos/e04d56f7-194b-47ef-915b-ad602c010b7f-Field(2).mp4", 0), 
("Champ 3", "00:00:10", 0, "2023-07-11", "/uploads/images/1b7b340b-900f-4a3d-87d9-cdd0a039d74d-Fields_3.png", "/uploads/videos/64184414-3a4e-4f46-9413-d5e5b77981e7-Field(3).mp4", 1),   
("Champ 4", "00:00:10", 0, "2023-07-11", "/uploads/images/65ef6285-716d-41be-b367-c7272670f436-Fields_4.png", "/uploads/videos/0ee0fe03-5418-4e30-b915-fed8bf22c46d-Field(4).mp4", 1),  
("Forêt 1", "00:00:08", 0, "2023-07-11", "/uploads/images/b6012fc2-f7e5-4690-a42f-2a6004b7dcb5-Forest_1.png", "/uploads/videos/5d41215c-d56e-47a7-8067-7acf532a8d5a-Forest(1).mp4", 1),  
("Forêt 2", "00:00:09", 0, "2023-07-11", "/uploads/images/a0976bd8-cab7-4a5d-826d-6e31f84dc19b-Forest_2.png", "/uploads/videos/595782e5-e93c-41c5-94c1-30d3738105db-Forest(2).mp4", 1),  
("Forêt 3", "00:00:09", 0, "2023-07-11", "/uploads/images/1aea810f-df63-4429-94e7-3bfa96a57626-Forest_3.png", "/uploads/videos/5700ffff-6cdb-4cf9-bb9f-01c3cef52c48-Forest(3).mp4", 0),  
("Forêt 4", "00:00:10", 0, "2023-07-11", "/uploads/images/ff9c7151-1f13-4319-b246-e5240de9b903-Forest_4.png", "/uploads/videos/b3076c09-ef41-4140-aea0-b5627e3a9267-Forest(4).mp4", 1),  
("Forêt 5", "00:00:10", 0, "2023-07-11", "/uploads/images/30d75198-7c27-46a2-bd76-671496ede79c-Forest_5.png", "/uploads/videos/5194f9f5-7722-41b9-98a5-474fda14e87c-Forest(5).mp4", 1),  
("Montagne 1", "00:00:10", 0, "2023-07-11", "/uploads/images/87681119-e590-4b9f-a2a9-9d87b40bc7ad-Mountain_1.png", "/uploads/videos/a344a81c-6fdf-48b1-9078-25e0917fd150-Mountain(1).mp4", 1),
("Montagne 2", "00:00:10", 0, "2023-07-11", "/uploads/images/39288559-2462-4834-8b90-c616be3a16e6-Mountain_2.png", "/uploads/videos/f1ae3464-e904-47ab-b1bf-3b0162150f7d-Mountain(2).mp4", 1),
("Montagne 3", "00:00:10", 0, "2023-07-11", "/uploads/images/96b774fa-11b2-496f-bf8f-c873cff4dca8-Mountain_3.png", "/uploads/videos/f0c10f93-b932-43c5-97df-7e78d93c8eac-Mountain(3).mp4", 1),
("Montagne 4", "00:00:08", 0, "2023-07-11", "/uploads/images/1e69bce0-cb1c-4e49-9818-e51c799274cb-Mountain_4.png", "/uploads/videos/b377866e-f686-4545-bc28-443db0158a4a-Mountain(4).mp4", 0),
("Mer & Océans 1", "00:00:11", 0, "2023-07-11", "/uploads/images/1af4cdcc-7013-4857-ae04-d0e48ea1c4ba-Sea_Oceans_1.png", "/uploads/videos/52ef7803-3fa7-49d3-944d-813e7c691f86-Sea_Oceans(1).mp4", 0),
("Mer & Océans 2", "00:00:10", 0, "2023-07-11", "/uploads/images/32f9be6c-f822-4b39-aed2-08501d8b1b3e-Sea_Oceans_2.png", "/uploads/videos/c148b2b5-3fb9-42ac-b84c-022063eb6028-Sea_Oceans(2).mp4", 1),
("Mer & Océans 3", "00:00:10", 0, "2023-07-11", "/uploads/images/6e50492e-c8c3-4eba-890c-8512dd58154b-Sea_Oceans_3.png", "/uploads/videos/5c3c52bb-9fdd-41c3-9898-cfab429032ab-Sea_Oceans(3).mp4", 1),
("Mer & Océans 4", "00:00:10", 0, "2023-07-11", "/uploads/images/3c8b8bd2-4927-44db-8ab9-c8fe80f512eb-Sea_Oceans_4.png", "/uploads/videos/f6d09dcd-c32f-415d-91b0-00df264f09ea-Sea_Oceans(4).mp4", 1),
("Ciel & Nuage 1", "00:00:10", 0, "2023-07-11", "/uploads/images/817232d0-2bb9-44a2-98f9-e4d70380268b-Sky_Clouds_1.png", "/uploads/videos/3ae5cadd-e2ae-40d5-8f57-ebaf74d089e6-Sky_Clouds(1).mp4", 1),
("Ciel & Nuage 2", "00:00:11", 0, "2023-07-11", "/uploads/images/db35aa19-4a8e-4fad-9955-be4b67bc71b9-Sky_Clouds_2.png", "/uploads/videos/9195a263-377a-40da-b8e1-a923a3fc4567-Sky_Clouds(2).mp4", 1),
("Ciel & Nuage 3", "00:00:11", 0, "2023-07-11", "/uploads/images/d4eec768-2761-4b6f-806e-a74d5801d40f-Sea_Oceans_3.png", "/uploads/videos/665dc38d-ae69-4cd8-8c71-f0a12e7a09d7-Sky_Clouds(3).mp4", 1),
("Ciel & Nuage 4", "00:00:11", 0, "2023-07-11", "/uploads/images/fc850209-d858-4592-b4e1-a488d2d873d1-Sky_Clouds_4.png", "/uploads/videos/a5f48291-85d6-428c-bc7b-ab555c03abc5-Sky_Clouds(4).mp4", 1),
("Ciel & Nuage 5", "00:00:10", 0, "2023-07-11", "/uploads/images/82f65c15-3cb7-41ed-9696-d515b35f94e4-Sky_Clouds_5.png", "/uploads/videos/58c12f0a-9ba4-4dab-af25-d84fbd0649b6-Sky_Clouds(5).mp4", 0),
("Urbain 1", "00:00:10", 0, "2023-07-11", "/uploads/images/ee708b58-038b-4d8d-9d93-37ccd2d0648f-Urban_1.png", "/uploads/videos/5b3ce8a3-1abf-4576-8620-068063d20bed-Urban(1).mp4", 1),   
("Urbain 2", "00:00:16", 0, "2023-07-11", "/uploads/images/f1ebbb01-ff62-4f7b-bf49-8c2a444ced4a-Urban_2.png", "/uploads/videos/23f4cca6-7d12-4162-b32e-d879ec314554-Urban(2).mp4", 0),  
("Urbain 3", "00:00:11", 0, "2023-07-11", "/uploads/images/7208c8f8-e3ba-410a-a76d-eb496baff802-Urban_3.png", "/uploads/videos/28e917ec-01b0-45ff-ac95-fff204d1769b-Urban(3).mp4", 1),   
("Urbain 4", "00:00:10", 0, "2023-07-11", "/uploads/images/f824c1d3-52e0-4125-88a2-0d2a17e3572f-Urban_4.png", "/uploads/videos/c53c3082-094d-4db3-8e2e-8a93d7fb6512-Urban(4).mp4", 1),   
("Urbain 5", "00:00:10", 0, "2023-07-11", "/uploads/images/c7a7fb20-cf34-42b1-b30b-1698e2f0c4e4-Urban_5.png", "/uploads/videos/0ca09bfe-b0d2-44b2-a4cb-137f8cef9f20-Urban(5).mp4", 1),   
("Urbain 6", "00:00:10", 0, "2023-07-11", "/uploads/images/99b8d2ed-7386-4128-b4d3-43a30bcafe50-Urban_6.png", "/uploads/videos/97f2218b-2c61-43a2-a46d-7e3f5e9ecc8c-Urban(6).mp4", 1),
("field", "00:00:17", 0, "2023-07-09", "/uploads/images/e6c52be1-ec1f-489a-865f-2cfdaf3371b3-field.png", "/uploads/videos/0b1479d5-e73f-44c5-af6a-78c9fddb4450-field.mp4", 1),
("mer", "00:00:18", 0, "2023-07-09", "/uploads/images/bcfd75e6-f8a9-4de3-a165-6e4c3a4efa4a-mer.png", "/uploads/videos/eb81ae28-288b-42f7-bbd1-d62f10835085-mer.mp4", 1),
("montagne", "00:00:20", 0, "2023-07-09", "/uploads/images/5d9ff10f-58f5-4941-8ddb-d20c080a13e3-montagne.png", "/uploads/videos/cbd84a08-a5a8-4d29-abed-a415645def73-montagne.mp4", 0),
("river, road & forest", "00:00:12", 0, "2023-07-09", "/uploads/images/e065504b-3618-4cb4-a4ac-1884e57de606-river_road_forest.png", "/uploads/videos/5ff157ca-51be-444d-94a6-fc31e30facaa-river_road_forest.mp4", 1),
("sunset", "00:00:21", 0, "2023-07-09", "/uploads/images/f8897740-0895-4fd8-9e01-34d72e14c9ef-sunset.png", "/uploads/videos/d77f4504-0ba1-4f6e-9754-997e528f8440-sunset.mp4", 1),
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
