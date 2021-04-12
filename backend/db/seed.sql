CREATE TABLE `quack` (
  `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  `createdAt` text,
  `userId` INTEGER NOT NULL,
  `text` text
);

INSERT INTO `quack` (`id`, `createdAt`, `userId`, `text`) VALUES
(1, '2019-08-08T05:43:18.023Z', 1, 'Hello, People of the World!'),
(2, '2019-08-06T14:10:51.023Z', 2, 'Como estas?'),
(3, '2019-08-03T09:09:34.023Z', 3, 'Hello, People of the World! Hello, People of the World! Hello, People of the World! Hello, People of the World! Hello, World!');


CREATE TABLE `user` (
  `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `name` text NOT NULL,
  `userName` text NOT NULL,
  `profileImageUrl` text NOT NULL
);

INSERT INTO `user` (`id`, `name`, `email`, `password`, `userName`, `profileImageUrl`) VALUES
(1, 'Young Gatchell', 'yg123@quacker.cz', 'notHashedPassword1', 'yg123', 'http://mrmrs.github.io/photos/p/1.jpg'),
(2, 'Gatchell Young', 'gyoung@quacker.cz', 'notHashedPassword2', 'gyoung', 'http://mrmrs.github.io/photos/p/2.jpg'),
(3, 'Mitchel Old', 'oldmit@quacker.cz', 'notHashedPassword3', 'oldmit', 'http://mrmrs.github.io/photos/p/3.jpg');