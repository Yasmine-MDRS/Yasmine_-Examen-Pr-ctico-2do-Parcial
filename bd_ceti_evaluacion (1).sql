-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2025 a las 14:48:49
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_ceti_evaluacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `Usuario` varchar(20) NOT NULL,
  `Contraseña` varchar(20) NOT NULL,
  `Ruta_foto_perfil` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`Usuario`, `Contraseña`, `Ruta_foto_perfil`) VALUES
('1234', '1234', ''),
('123456', '123456', ''),
('20100323', '20100323', ''),
('21300623', '21300623', ''),
('21300653', '21300653', ''),
('21300680', '21300680', ''),
('22300903', '22300903', ''),
('22300907', '22300907', ''),
('22300908', '22300908', ''),
('22300909', '22300909', ''),
('22300910', '22300910', ''),
('22300913', '22300913', ''),
('22300926', '22300926', ''),
('22300934', '22300934', ''),
('22300936', '22300936', ''),
('22300940', '22300940', ''),
('22300942', '22300942', ''),
('22300944', '22300944', ''),
('22300947', '22300947', ''),
('22300948', '22300948', ''),
('22300950', '22300950', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion_maestro`
--

CREATE TABLE `calificacion_maestro` (
  `Calificacion` smallint(3) NOT NULL,
  `ID_Calificacion` varchar(10) NOT NULL,
  `ID_Maestro` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calificacion_maestro`
--

INSERT INTO `calificacion_maestro` (`Calificacion`, `ID_Calificacion`, `ID_Maestro`) VALUES
(0, 'CM001', '1084'),
(3, 'CM002', '1111'),
(0, 'CM003', '1194'),
(0, 'CM004', '1298'),
(0, 'CM005', '1393'),
(0, 'CM006', '1872'),
(0, 'CM007', '1910'),
(0, 'CM008', '2171'),
(0, 'CM009', '2222'),
(0, 'CM010', '2241'),
(0, 'CM011', '2366'),
(0, 'CM012', '2452'),
(0, 'CM013', '2570'),
(0, 'CM014', '2606'),
(0, 'CM015', '2639'),
(0, 'CM016', '2861'),
(0, 'CM017', '2890'),
(0, 'CM018', '2892'),
(0, 'CM019', '2897'),
(0, 'CM020', '3090'),
(0, 'CM021', '3112'),
(0, 'CM022', '3216'),
(0, 'CM023', '3333'),
(0, 'CM024', '3419'),
(0, 'CM025', '3507'),
(0, 'CM026', '3560'),
(0, 'CM027', '3584'),
(0, 'CM028', '3588'),
(0, 'CM029', '4297'),
(0, 'CM030', '4920'),
(0, 'CM031', '5645'),
(0, 'CM032', '5670'),
(0, 'CM033', '5671'),
(0, 'CM034', '5672'),
(0, 'CM035', '5673'),
(0, 'CM036', '5674'),
(0, 'CM037', '5675'),
(0, 'CM038', '5676'),
(0, 'CM039', '5677'),
(0, 'CM040', '5678'),
(0, 'CM041', '5679'),
(0, 'CM042', '5680'),
(0, 'CM043', '5681'),
(0, 'CM044', '5682'),
(0, 'CM045', '9023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion_materia`
--

CREATE TABLE `calificacion_materia` (
  `Calificacion` smallint(3) NOT NULL,
  `ID_Calificacion` varchar(10) NOT NULL,
  `ID_Materia` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calificacion_materia`
--

INSERT INTO `calificacion_materia` (`Calificacion`, `ID_Calificacion`, `ID_Materia`) VALUES
(0, 'CA01', '18MDBC30421'),
(5, 'CA02', '18MDBCE0420'),
(0, 'CA03', '18MDBCO0422'),
(0, 'CA04', '18MDBCS0524'),
(0, 'CA05', '18MDBMT0419'),
(0, 'CA06', '18MDECO0526'),
(0, 'CA07', '18MDEHU0629'),
(0, 'CA08', '18MDEMCC0525'),
(0, 'CA09', '18MDEMCC0628'),
(0, 'CA10', '18MDEMCC0731'),
(0, 'CA11', '18MDEMCC0732'),
(0, 'CA12', '18MDEMT0523'),
(0, 'CA13', '18MDEMT0627'),
(0, 'CA14', '18MPBDS0409'),
(0, 'CA15', '18MPBDS0410'),
(0, 'CA16', '18MPBDS0411'),
(0, 'CA17', '18MPBDS0412'),
(0, 'CA18', '18MPBDS0413'),
(0, 'CA19', '18MPBDS0514'),
(0, 'CA20', '18MPBDS0515'),
(0, 'CA21', '18MPBDS0517'),
(0, 'CA22', '18MPBDS0518'),
(0, 'CA23', '18MPEDS0516'),
(0, 'CA24', '18MPEDS0619'),
(0, 'CA25', '18MPEDS0620'),
(0, 'CA26', '18MPEDS0621'),
(0, 'CA27', '18MPEDS0622'),
(0, 'CA28', '18MPEDS0623'),
(0, 'CA29', '18MPEDS0724'),
(0, 'CA30', '18MPEDS0725'),
(0, 'CA31', '18MPEDS0726'),
(0, 'CA32', '18MPEDS0727'),
(0, 'CA33', '18MPEDS0728'),
(0, 'CA34', '18MPEDS0729'),
(0, 'CA35', '18MPEDS0730');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion_materiamaestro`
--

CREATE TABLE `calificacion_materiamaestro` (
  `Calificacion` smallint(3) NOT NULL,
  `ID_Calificacion` varchar(10) NOT NULL,
  `ID_Materia` varchar(15) NOT NULL,
  `ID_Maestro` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calificacion_materiamaestro`
--

INSERT INTO `calificacion_materiamaestro` (`Calificacion`, `ID_Calificacion`, `ID_Materia`, `ID_Maestro`) VALUES
(5, 'CMM01', '18MPBDS0412', '2570'),
(0, 'CMM02', '18MPBDS0413', '1910'),
(4, 'CMM03', '18MPBDS0411', '2897'),
(0, 'CMM04', '18MPBDS0409', '3584'),
(0, 'CMM05', '18MPBDS0518', '2570'),
(0, 'CMM06', '18MPBDS0515', '2892'),
(0, 'CMM07', '18MPBDS0517', '1910'),
(0, 'CMM08', '18MDBC30421', '3216'),
(0, 'CMM09', '18MDBCE0420', '1194'),
(0, 'CMM10', '18MDBCO0422', '2171');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestro`
--

CREATE TABLE `maestro` (
  `ID_Maestro` varchar(10) NOT NULL,
  `ID_Calificacion` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `maestro`
--

INSERT INTO `maestro` (`ID_Maestro`, `ID_Calificacion`) VALUES
('1084', 'CM001'),
('1111', 'CM002'),
('1194', 'CM003'),
('1298', 'CM004'),
('1393', 'CM005'),
('1872', 'CM006'),
('1910', 'CM007'),
('2171', 'CM008'),
('2222', 'CM009'),
('2241', 'CM010'),
('2366', 'CM011'),
('2452', 'CM012'),
('2570', 'CM013'),
('2606', 'CM014'),
('2639', 'CM015'),
('2861', 'CM016'),
('2890', 'CM017'),
('2892', 'CM018'),
('2897', 'CM019'),
('3090', 'CM020'),
('3112', 'CM021'),
('3216', 'CM022'),
('3333', 'CM023'),
('3419', 'CM024'),
('3507', 'CM025'),
('3560', 'CM026'),
('3584', 'CM027'),
('3588', 'CM028'),
('4297', 'CM029'),
('4920', 'CM030'),
('5645', 'CM031'),
('5670', 'CM032'),
('5671', 'CM033'),
('5672', 'CM034'),
('5673', 'CM035'),
('5674', 'CM036'),
('5675', 'CM037'),
('5676', 'CM038'),
('5677', 'CM039'),
('5678', 'CM040'),
('5679', 'CM041'),
('5680', 'CM042'),
('5681', 'CM043'),
('5682', 'CM044'),
('9023', 'CM045');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestro_id`
--

CREATE TABLE `maestro_id` (
  `ID_Maestro` varchar(10) NOT NULL,
  `Nombre` varchar(35) NOT NULL,
  `Apellido` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `maestro_id`
--

INSERT INTO `maestro_id` (`ID_Maestro`, `Nombre`, `Apellido`) VALUES
('1084', 'Esmeralda', 'Pizano Ortiz'),
('1111', 'Ismael', 'Lopez Buenrostro'),
('1194', 'Marina', 'Dobrova M. en C.'),
('1298', 'Jorge', 'Pamplona Campa'),
('1393', 'Mario Cesar', 'Manzo Pantoja'),
('1872', 'Clara Gabriela', 'Garcia Duran'),
('1910', 'Alejandra', 'Alcaraz Torres'),
('2171', 'Maria', 'Franco Serna'),
('2222', 'Magdha Eugenia', 'Gomez Valverde'),
('2241', 'Juan Manuel', 'Garcia Damian'),
('2366', 'Karla Arely', 'Isaac Rodriguez'),
('2452', 'Antonio', 'Lozano Gonzalez'),
('2570', 'Sergio Antonio', 'Ellerbracke Roman'),
('2606', 'Carlos Tomas', 'Santana Colin'),
('2639', 'Ana Elizabeth', 'Diaz Velez Berghouse'),
('2861', 'Diaz Ruelas', 'Karla Guadalupe'),
('2890', 'Luis Rene', 'Duran Hernandez'),
('2892', 'Ferrer Hernandez', 'Susana Elizabeth'),
('2897', 'Rodolfo Ulyses', 'Vazquez Cardenas'),
('3090', 'Jose Victor', 'Ramos Martinez'),
('3112', 'Estuardo', 'Azahar Gonzalez'),
('3216', 'Lorena', 'Aceves Jimenez'),
('3333', 'Olivia', 'Obledo Reinoza'),
('3419', 'Sergio', 'Becerra Delgado'),
('3507', 'Maricela Alicia', 'Loredo Guzman'),
('3560', 'Lourdes', 'Cantu Gandara'),
('3584', 'Andres', 'Figueroa Flores'),
('3588', 'Nancy del Carmen', 'Benavides Medina'),
('4297', 'Guillermo', 'Diaz Garcia'),
('4920', 'Akira Abraham', 'Lozano Ocegueda'),
('5645', 'Claudia Bethzabel', 'Pardo Rosales'),
('5670', 'Rodriguez Garcia', 'Carlos Alberto'),
('5671', 'Diana Marisol', 'Figueroa Flores'),
('5672', 'Laura Josefina', 'Martinez Mendoza'),
('5673', 'Salvador', 'Juarez Rivera'),
('5674', 'Solorio Elizabeth', 'Alvarez del castillo'),
('5675', 'Sonia Erika', 'Ibanes de la Torre'),
('5676', 'Clara Gabriela', 'Garcia Duran'),
('5677', 'Cesar Oswaldo', 'Martinez Godinez'),
('5678', 'Angelica Patricia', 'Abrego Martinez'),
('5679', 'Karla Guadalupe', 'Diaz Ruelas'),
('5680', 'Susana Guadalupe', 'Marquez Cobian'),
('5681', 'Luz Araceli', 'Garcia Beltran'),
('5682', 'Erika Berenica', 'Cornejo Macias'),
('9023', 'Carlos Tomas', 'Santana Colin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `ID_Materia` varchar(15) NOT NULL,
  `ID_Calificacion` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`ID_Materia`, `ID_Calificacion`) VALUES
('18MDBC30421', 'CA01'),
('18MDBCE0420', 'CA02'),
('18MDBCO0422', 'CA03'),
('18MDBCS0524', 'CA04'),
('18MDBMT0419', 'CA05'),
('18MDECO0526', 'CA06'),
('18MDEHU0629', 'CA07'),
('18MDEMCC0525', 'CA08'),
('18MDEMCC0628', 'CA09'),
('18MDEMCC0731', 'CA10'),
('18MDEMCC0732', 'CA11'),
('18MDEMT0523', 'CA12'),
('18MDEMT0627', 'CA13'),
('18MPBDS0409', 'CA14'),
('18MPBDS0410', 'CA15'),
('18MPBDS0411', 'CA16'),
('18MPBDS0412', 'CA17'),
('18MPBDS0413', 'CA18'),
('18MPBDS0514', 'CA19'),
('18MPBDS0515', 'CA20'),
('18MPBDS0517', 'CA21'),
('18MPBDS0518', 'CA22'),
('18MPEDS0516', 'CA23'),
('18MPEDS0619', 'CA24'),
('18MPEDS0620', 'CA25'),
('18MPEDS0621', 'CA26'),
('18MPEDS0622', 'CA27'),
('18MPEDS0623', 'CA28'),
('18MPEDS0724', 'CA29'),
('18MPEDS0725', 'CA30'),
('18MPEDS0726', 'CA31'),
('18MPEDS0727', 'CA32'),
('18MPEDS0728', 'CA33'),
('18MPEDS0729', 'CA34'),
('18MPEDS0730', 'CA35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiamaestro`
--

CREATE TABLE `materiamaestro` (
  `ID_MateriaMaestro` int(10) NOT NULL,
  `ID_Calificacion` varchar(10) NOT NULL,
  `ID_Maestro` varchar(10) NOT NULL,
  `ID_Materia` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materiamaestro`
--

INSERT INTO `materiamaestro` (`ID_MateriaMaestro`, `ID_Calificacion`, `ID_Maestro`, `ID_Materia`) VALUES
(14, 'CMM01', '2570', '18MPBDS0412'),
(15, 'CMM02', '1910', '18MPBDS0413'),
(16, 'CMM03', '2897', '18MPBDS0411'),
(17, 'CMM04', '3584', '18MPBDS0409'),
(18, 'CMM05', '2570', '18MPBDS0518'),
(19, 'CMM06', '2892', '18MPBDS0515'),
(20, 'CMM07', '1910', '18MPBDS0517'),
(21, 'CMM08', '3216', '18MDBC30421'),
(22, 'CMM09', '1194', '18MDBCE0420'),
(23, 'CMM10', '2171', '18MDBCO0422');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia_id`
--

CREATE TABLE `materia_id` (
  `ID_Materia` varchar(15) NOT NULL,
  `Nombre_Materia` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materia_id`
--

INSERT INTO `materia_id` (`ID_Materia`, `Nombre_Materia`) VALUES
('18MDBC30421', 'Ecologia'),
('18MDBCE0420', 'Fisica II'),
('18MDBCO0422', 'Ingles IV'),
('18MDBCS0524', 'Ciencia, Tecnologia, Sociedad '),
('18MDBMT0419', 'Calculo diferencial'),
('18MDECO0526', 'Ingles V'),
('18MDEHU0629', 'Temas de Filosofia'),
('18MDEMCC0525', 'Administracion'),
('18MDEMCC0628', 'Metodologia de la Investigacio'),
('18MDEMCC0731', 'Emprendimiento I'),
('18MDEMCC0732', 'INGLES VII'),
('18MDEMT0523', 'Calculo Integral'),
('18MDEMT0627', 'Probabilidad y Estadistica'),
('18MPBDS0409', 'Sistemas Digitales II'),
('18MPBDS0410', 'Analisis y Diseno de Sistemas'),
('18MPBDS0411', 'Infraestructura de Redes Local'),
('18MPBDS0412', 'Programacion Orientada a Obeje'),
('18MPBDS0413', 'Temas de Electronica I'),
('18MPBDS0514', 'Arquitectura y Organizacion de'),
('18MPBDS0515', 'Bases de Datos I'),
('18MPBDS0517', 'Temas de Electronica II'),
('18MPBDS0518', 'Estructuras de Datos'),
('18MPEDS0516', 'Enrutamiento de Redes'),
('18MPEDS0619', 'Bases de datos II'),
('18MPEDS0620', 'Interfaces'),
('18MPEDS0621', 'Programacion Movil I'),
('18MPEDS0622', 'Sistemas Operativos'),
('18MPEDS0623', 'Sistemas Embebidos I'),
('18MPEDS0724', 'Programacion Movil II'),
('18MPEDS0725', 'Programación avanzada I'),
('18MPEDS0726', 'Programacion Web I'),
('18MPEDS0727', 'Proyecto integrador de desarro'),
('18MPEDS0728', 'Servicios de red y cómputo nub'),
('18MPEDS0729', 'Sistemas embebidos II'),
('18MPEDS0730', 'Sistemas de medición y control');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relaciones`
--

CREATE TABLE `relaciones` (
  `Usuario` varchar(20) NOT NULL,
  `ID_Materia` varchar(15) NOT NULL,
  `ID_MateriaMaestro` int(10) NOT NULL,
  `ID_Maestro` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`Usuario`);

--
-- Indices de la tabla `calificacion_maestro`
--
ALTER TABLE `calificacion_maestro`
  ADD PRIMARY KEY (`ID_Calificacion`),
  ADD KEY `ID_Maestro` (`ID_Maestro`);

--
-- Indices de la tabla `calificacion_materia`
--
ALTER TABLE `calificacion_materia`
  ADD PRIMARY KEY (`ID_Calificacion`),
  ADD KEY `ID_Materia` (`ID_Materia`);

--
-- Indices de la tabla `calificacion_materiamaestro`
--
ALTER TABLE `calificacion_materiamaestro`
  ADD PRIMARY KEY (`ID_Calificacion`),
  ADD KEY `ID_Materia` (`ID_Materia`),
  ADD KEY `ID_Maestro` (`ID_Maestro`);

--
-- Indices de la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD PRIMARY KEY (`ID_Maestro`),
  ADD KEY `ID_Calificacion` (`ID_Calificacion`);

--
-- Indices de la tabla `maestro_id`
--
ALTER TABLE `maestro_id`
  ADD PRIMARY KEY (`ID_Maestro`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`ID_Materia`),
  ADD KEY `ID_Calificacion` (`ID_Calificacion`);

--
-- Indices de la tabla `materiamaestro`
--
ALTER TABLE `materiamaestro`
  ADD PRIMARY KEY (`ID_MateriaMaestro`),
  ADD KEY `ID_Calificacion` (`ID_Calificacion`),
  ADD KEY `ID_Maestro` (`ID_Maestro`),
  ADD KEY `ID_Materia` (`ID_Materia`);

--
-- Indices de la tabla `materia_id`
--
ALTER TABLE `materia_id`
  ADD PRIMARY KEY (`ID_Materia`);

--
-- Indices de la tabla `relaciones`
--
ALTER TABLE `relaciones`
  ADD KEY `Usuario` (`Usuario`),
  ADD KEY `ID_Materia` (`ID_Materia`),
  ADD KEY `ID_MateriaMaestro` (`ID_MateriaMaestro`),
  ADD KEY `ID_Maestro` (`ID_Maestro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `materiamaestro`
--
ALTER TABLE `materiamaestro`
  MODIFY `ID_MateriaMaestro` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificacion_maestro`
--
ALTER TABLE `calificacion_maestro`
  ADD CONSTRAINT `calificacion_maestro_ibfk_1` FOREIGN KEY (`ID_Maestro`) REFERENCES `maestro_id` (`ID_Maestro`);

--
-- Filtros para la tabla `calificacion_materia`
--
ALTER TABLE `calificacion_materia`
  ADD CONSTRAINT `calificacion_materia_ibfk_1` FOREIGN KEY (`ID_Materia`) REFERENCES `materia_id` (`ID_Materia`);

--
-- Filtros para la tabla `calificacion_materiamaestro`
--
ALTER TABLE `calificacion_materiamaestro`
  ADD CONSTRAINT `calificacion_materiamaestro_ibfk_1` FOREIGN KEY (`ID_Materia`) REFERENCES `materia` (`ID_Materia`),
  ADD CONSTRAINT `calificacion_materiamaestro_ibfk_2` FOREIGN KEY (`ID_Maestro`) REFERENCES `maestro` (`ID_Maestro`);

--
-- Filtros para la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD CONSTRAINT `maestro_ibfk_1` FOREIGN KEY (`ID_Maestro`) REFERENCES `maestro_id` (`ID_Maestro`),
  ADD CONSTRAINT `maestro_ibfk_2` FOREIGN KEY (`ID_Calificacion`) REFERENCES `calificacion_maestro` (`ID_Calificacion`);

--
-- Filtros para la tabla `materia`
--
ALTER TABLE `materia`
  ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`ID_Materia`) REFERENCES `materia_id` (`ID_Materia`),
  ADD CONSTRAINT `materia_ibfk_2` FOREIGN KEY (`ID_Calificacion`) REFERENCES `calificacion_materia` (`ID_Calificacion`);

--
-- Filtros para la tabla `materiamaestro`
--
ALTER TABLE `materiamaestro`
  ADD CONSTRAINT `materiamaestro_ibfk_1` FOREIGN KEY (`ID_Calificacion`) REFERENCES `calificacion_materiamaestro` (`ID_Calificacion`),
  ADD CONSTRAINT `materiamaestro_ibfk_2` FOREIGN KEY (`ID_Maestro`) REFERENCES `maestro` (`ID_Maestro`),
  ADD CONSTRAINT `materiamaestro_ibfk_3` FOREIGN KEY (`ID_Materia`) REFERENCES `materia` (`ID_Materia`);

--
-- Filtros para la tabla `relaciones`
--
ALTER TABLE `relaciones`
  ADD CONSTRAINT `relaciones_ibfk_1` FOREIGN KEY (`Usuario`) REFERENCES `alumno` (`Usuario`),
  ADD CONSTRAINT `relaciones_ibfk_2` FOREIGN KEY (`ID_Materia`) REFERENCES `materia` (`ID_Materia`),
  ADD CONSTRAINT `relaciones_ibfk_3` FOREIGN KEY (`ID_MateriaMaestro`) REFERENCES `materiamaestro` (`ID_MateriaMaestro`),
  ADD CONSTRAINT `relaciones_ibfk_4` FOREIGN KEY (`ID_Maestro`) REFERENCES `maestro` (`ID_Maestro`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
