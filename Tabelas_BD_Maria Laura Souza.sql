-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: locadvd
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `cli_codigo` int NOT NULL AUTO_INCREMENT,
  `cli_nome` varchar(20) NOT NULL,
  `cli_apelido` varchar(15) DEFAULT NULL,
  `cli_telefone` varchar(15) NOT NULL,
  `cli_cadastro` varchar(20) NOT NULL,
  PRIMARY KEY (`cli_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,' Maria Laura','Laura','16991206911','02/12/2021'),(2,'Gabriel','Gabi','16991207756','02/12/2021'),(3,'Lerry','Lerrygo','16991376655','02/12/2021'),(4,'Guilherme','Gui','16991207755','04/12/2021');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locafilme`
--

DROP TABLE IF EXISTS `locafilme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locafilme` (
  `loc_codigo` int NOT NULL AUTO_INCREMENT,
  `loc_filme` varchar(20) NOT NULL,
  `loc_genero` varchar(10) NOT NULL,
  `loc_ator` varchar(10) NOT NULL,
  `loc_pais` varchar(20) DEFAULT NULL,
  `loc_valortotal` decimal(12,2) DEFAULT NULL,
  `cli_codigo` int NOT NULL,
  PRIMARY KEY (`loc_codigo`),
  KEY `cli_codigo _idx` (`cli_codigo`),
  CONSTRAINT `cli_codigo ` FOREIGN KEY (`cli_codigo`) REFERENCES `cliente` (`cli_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locafilme`
--

LOCK TABLES `locafilme` WRITE;
/*!40000 ALTER TABLE `locafilme` DISABLE KEYS */;
INSERT INTO `locafilme` VALUES (1,'A Múmia','Ação','Fraser','Estados Unidos',12.00,1),(2,'Duna','Ficção','Zendaya','Estados Unidos',12.00,2),(3,'It','Terror','Finn','Estados Unidos',12.00,3),(4,'Titanic','Aventura','DiCaprio','Estados Unidos',12.00,1);
/*!40000 ALTER TABLE `locafilme` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-04 10:11:50
