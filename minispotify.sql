-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2021 a las 19:58:00
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `minispotify`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `follows`
--

CREATE TABLE `follows` (
  `ID_PLAYLIST` varchar(10) NOT NULL,
  `ID_USER` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlist`
--

CREATE TABLE `playlist` (
  `ID_PLAYLIST` varchar(10) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `URL_PORTADA` varchar(250) DEFAULT NULL,
  `CREATION_DATE` timestamp NOT NULL DEFAULT current_timestamp(),
  `DESCRIPTION` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `playlist`
--

INSERT INTO `playlist` (`ID_PLAYLIST`, `NAME`, `URL_PORTADA`, `CREATION_DATE`, `DESCRIPTION`) VALUES
('P2b7a26756', 'Playlist1', 'https://image.slidesharecdn.com/elrockenlos80sf-130911195537-phpapp02/95/el-rock-en-los-80sf-1-638.jpg?cb=1378929393', '2021-11-27 22:56:34', 'Primera playlist creada desde la api :)'),
('P8ec68b920', 'Rock en Español', 'http://localhost/Spotify//Uploads/Img/P8ec68b920061.jpeg', '2021-12-14 19:11:36', ''),
('P8ef855020', 'Pop80', 'http://localhost/Spotify//Uploads/Img/P8ef855020061.jpeg', '2021-12-14 19:24:53', 'pop que me gusta'),
('Pa3a110b03', 'space90', 'http://localhost/Spotify//Uploads/Img/Pa3a110b03061.jpeg', '2021-12-15 18:55:13', 'sdasdas'),
('Pb64b61020', 'SuperPop', 'http://localhost/Spotify//Uploads/Img/Pb64b61020061.jpeg', '2021-12-16 16:09:26', '<h1>POPPPPPP</h1>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlist_song`
--

CREATE TABLE `playlist_song` (
  `ID_PLAYLIST` varchar(10) NOT NULL,
  `ID_SONG` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `playlist_song`
--

INSERT INTO `playlist_song` (`ID_PLAYLIST`, `ID_SONG`) VALUES
('P8ef855020', '#a5c35c18p'),
('P8ec68b920', '#95a616c4r'),
('P8ec68b920', 'Sbfd463aar'),
('P8ec68b920', 'S8e189f3bp'),
('P8ec68b920', 'Se991f491r');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `song`
--

CREATE TABLE `song` (
  `ID_SONG` varchar(10) NOT NULL,
  `SONGNAME` varchar(70) NOT NULL,
  `GENDER` varchar(20) NOT NULL,
  `URL_PORTADA` varchar(250) DEFAULT NULL,
  `URL_AUDIO` varchar(200) NOT NULL,
  `DATE_UPLOAD` timestamp NOT NULL DEFAULT current_timestamp(),
  `DATE_PREMIERE` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `song`
--

INSERT INTO `song` (`ID_SONG`, `SONGNAME`, `GENDER`, `URL_PORTADA`, `URL_AUDIO`, `DATE_UPLOAD`, `DATE_PREMIERE`) VALUES
('#13d01256N', 'Break Stuff', 'Nu metal', 'http://localhost/Spotify//Uploads/Img/Break Stuff.jpeg', 'http://localhost/Spotify//Uploads/Musics/Break Stuff.mp3', '2021-11-26 20:01:05', '2021-11-11'),
('#95a616c4r', 'Y es que sucede asi', 'rock', 'http://localhost/Spotify//Uploads/Img/Y es que sucede asi.jpeg', 'http://localhost/Spotify//Uploads/Musics/Y es que sucede asi.mp3', '2021-12-02 23:44:33', '2021-12-03'),
('#a5c35c18p', 'where were you in the morning?', 'pop', 'http://localhost/Spotify//Uploads/Img/Sa5c9e65fpo61.jpeg', 'http://localhost/Spotify//Uploads/Musics/Sa5c9e65fpo61.mp3', '2021-12-03 18:04:37', '2021-12-03'),
('#e7eae629r', 'Sentimiento Original', 'reggae', 'http://localhost/Spotify//Uploads/Img/Sentimiento Original.jpeg', 'http://localhost/Spotify//Uploads/Musics/Sentimiento Original.mp3', '2021-11-24 18:04:30', '2021-11-10'),
('S7c52c187r', 'Could You Be Loved', 'reggae', 'http://localhost/Spotify//Uploads/Img/S7c52c187re61.jpeg', 'http://localhost/Spotify//Uploads/Musics/S7c52c187re61.mp3', '2021-12-13 22:11:56', '2021-12-13'),
('S7d35a5d7g', 'Smells like teen spirit', 'grunge', 'http://localhost/Spotify//Uploads/Img/S7d35a5d7gr61.jpeg', 'http://localhost/Spotify//Uploads/Musics/S7d35a5d7gr61.mp3', '2021-12-13 23:12:26', '0000-00-00'),
('S8e189f3bp', 'NID', 'punk rock', 'http://localhost/Spotify//Uploads/Img/S8e189f3bpu61.jpeg', 'http://localhost/Spotify//Uploads/Musics/S8e189f3bpu61.mp3', '2021-12-14 18:25:14', '2021-12-09'),
('S8eed1a08p', 'Everlong', 'post grunge', 'http://localhost/Spotify//Uploads/Img/S8eed1a08po61.jpeg', 'http://localhost/Spotify//Uploads/Musics/S8eed1a08po61.mp3', '2021-12-14 19:21:53', '2021-12-03'),
('Sbfd463aar', 'Mil Horas', 'rock', 'http://localhost/Spotify//Uploads/Img/Sbfd463aaro61.jpeg', 'http://localhost/Spotify//Uploads/Musics/Sbfd463aaro61.mp3', '2021-12-04 23:44:06', '2021-12-02'),
('Se991f491r', 'Kingston Town', 'reggae', 'http://localhost/Spotify//Uploads/Img/Se991f491re61.jpeg', 'http://localhost/Spotify//Uploads/Musics/Se991f491re61.mp3', '2021-12-06 23:13:35', '2021-12-09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `songs_follows`
--

CREATE TABLE `songs_follows` (
  `ID_SONG` varchar(10) NOT NULL,
  `ID_USER` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `ID_USER` varchar(10) NOT NULL,
  `TOKEN` varchar(200) DEFAULT NULL,
  `DATECREATE` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `token`
--

INSERT INTO `token` (`ID_USER`, `TOKEN`, `DATECREATE`) VALUES
('#000000001', 'f293dcbc42b6ab7379d021c25bb6c2a2', '2021-12-17 16:54:49'),
('#650dfa81F', '3c979051454086987d31dd4939035b34', '2021-12-13 22:04:47'),
('#92f3ff2eN', 'bc9f26b23c2139b2a01bb7221c5ba87f', '2021-12-04 23:50:08'),
('#9303e180P', '32a5004eef0e5474d88dc7238814b467', '2021-12-17 16:41:47'),
('#bcadb5fcL', 'b2844574fab82c1e0b40249aa6a55c86', '2021-12-01 18:36:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID_USER` varchar(10) NOT NULL,
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  `EMAIL` varchar(80) NOT NULL,
  `NAME` varchar(40) DEFAULT NULL,
  `LASTNAME` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID_USER`, `USERNAME`, `PASSWORD`, `EMAIL`, `NAME`, `LASTNAME`) VALUES
('#000000001', 'JosephSB', '74bb5e037dfa69e4d444eb3b8b9ab37a', 'jguku2002@gmail.com', 'Joseph', 'Silva Bendezu'),
('#650dfa81F', 'Fab5689', 'b8b1ad539cae855f8c4a1f4a09cb750c', 'thiagofabricio@gmail.com', 'Fabricio', 'Mijahuanca'),
('#92f3ff2eN', 'Nicol75', '4c147eb0e091ef6fcace2232158a3b2a', 'nicol@gmail.com', 'Nicol', 'Mijahuanca'),
('#9303e180P', 'Slash01', 'db5676bb196f1e273620ee1c16000bb9', 'nicol@gmail.com', 'Pepe', 'Quintana'),
('#bcadb5fcL', 'Luciana12', '2834c38610769f8d70bf434daa83321c', 'luciana@gmail.com', 'Luciana', 'Mijahuanca Bendezu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_playlist`
--

CREATE TABLE `usuarios_playlist` (
  `ID_PLAYLIST` varchar(10) NOT NULL,
  `ID_USER` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_playlist`
--

INSERT INTO `usuarios_playlist` (`ID_PLAYLIST`, `ID_USER`) VALUES
('P2b7a26756', '#000000001'),
('P8ec68b920', '#000000001'),
('P8ef855020', '#000000001'),
('Pb64b61020', '#000000001'),
('Pa3a110b03', '#9303e180P');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_song`
--

CREATE TABLE `usuarios_song` (
  `ID_SONG` varchar(10) NOT NULL,
  `ID_USER` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_song`
--

INSERT INTO `usuarios_song` (`ID_SONG`, `ID_USER`) VALUES
('#13d01256N', '#000000001'),
('#a5c35c18p', '#000000001'),
('#e7eae629r', '#000000001'),
('S8e189f3bp', '#000000001'),
('S8eed1a08p', '#000000001'),
('Sbfd463aar', '#000000001'),
('S7c52c187r', '#650dfa81F'),
('S7d35a5d7g', '#650dfa81F'),
('#95a616c4r', '#92f3ff2eN'),
('Se991f491r', '#9303e180P');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`ID_PLAYLIST`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Indices de la tabla `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`ID_PLAYLIST`);

--
-- Indices de la tabla `playlist_song`
--
ALTER TABLE `playlist_song`
  ADD KEY `ID_PLAYLIST` (`ID_PLAYLIST`),
  ADD KEY `ID_SONG` (`ID_SONG`);

--
-- Indices de la tabla `song`
--
ALTER TABLE `song`
  ADD PRIMARY KEY (`ID_SONG`);

--
-- Indices de la tabla `songs_follows`
--
ALTER TABLE `songs_follows`
  ADD PRIMARY KEY (`ID_SONG`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`ID_USER`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID_USER`);

--
-- Indices de la tabla `usuarios_playlist`
--
ALTER TABLE `usuarios_playlist`
  ADD PRIMARY KEY (`ID_PLAYLIST`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Indices de la tabla `usuarios_song`
--
ALTER TABLE `usuarios_song`
  ADD PRIMARY KEY (`ID_SONG`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`ID_PLAYLIST`) REFERENCES `playlist` (`ID_PLAYLIST`),
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`ID_USER`) REFERENCES `usuarios` (`ID_USER`);

--
-- Filtros para la tabla `playlist_song`
--
ALTER TABLE `playlist_song`
  ADD CONSTRAINT `playlist_song_ibfk_1` FOREIGN KEY (`ID_PLAYLIST`) REFERENCES `playlist` (`ID_PLAYLIST`),
  ADD CONSTRAINT `playlist_song_ibfk_2` FOREIGN KEY (`ID_SONG`) REFERENCES `song` (`ID_SONG`);

--
-- Filtros para la tabla `songs_follows`
--
ALTER TABLE `songs_follows`
  ADD CONSTRAINT `songs_follows_ibfk_1` FOREIGN KEY (`ID_SONG`) REFERENCES `song` (`ID_SONG`),
  ADD CONSTRAINT `songs_follows_ibfk_2` FOREIGN KEY (`ID_USER`) REFERENCES `usuarios` (`ID_USER`);

--
-- Filtros para la tabla `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `token_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `usuarios` (`ID_USER`);

--
-- Filtros para la tabla `usuarios_playlist`
--
ALTER TABLE `usuarios_playlist`
  ADD CONSTRAINT `usuarios_playlist_ibfk_1` FOREIGN KEY (`ID_PLAYLIST`) REFERENCES `playlist` (`ID_PLAYLIST`),
  ADD CONSTRAINT `usuarios_playlist_ibfk_2` FOREIGN KEY (`ID_USER`) REFERENCES `usuarios` (`ID_USER`);

--
-- Filtros para la tabla `usuarios_song`
--
ALTER TABLE `usuarios_song`
  ADD CONSTRAINT `usuarios_song_ibfk_1` FOREIGN KEY (`ID_SONG`) REFERENCES `song` (`ID_SONG`),
  ADD CONSTRAINT `usuarios_song_ibfk_2` FOREIGN KEY (`ID_USER`) REFERENCES `usuarios` (`ID_USER`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
