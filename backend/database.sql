DROP TABLE IF EXISTS videos;
CREATE TABLE videos (
  id int primary key NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  duration int NOT NULL,
  views_count int NOT NULL,
  upload_date DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
  videos (title, duration, views_count, upload_date)
VALUES
  (
    'Nature sauvage',
    120,
    23,
    '2023-06-08'
  ),
  (
    'Plaine sauvages',
    20,
    123,
    '2023-06-08'
  ),
  (
    'Paris Urbains',
    250,
    2350,
    '2023-06-08'
  ),
  (
    'plan des forets',
    120,
    23,
    '2023-06-08'
  ),
  (
    'Amazonie',
    180,
    283,
    '2023-06-08'
  ),
  (
    'Nature sauvage',
    120,
    23,
    '2023-06-08'
  );