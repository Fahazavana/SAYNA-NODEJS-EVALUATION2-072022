CREATE SCHEMA IF NOT EXISTS `db_dclic`;

CREATE TABLE IF NOT EXISTS `db_dclic`.`Avis` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(25) NOT NULL,
  `lastname` VARCHAR(25) NOT NULL,
  `avis` TEXT NULL DEFAULT NULL,
  `note` INT NULL DEFAULT NULL,
  `formation` ENUM('Frontend', 'Backend', 'Marketing', 'UX-UI') NOT NULL DEFAULT 'Frontend',
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

USE `db_dclic`;


INSERT INTO `Avis` VALUES (1,'Jean','Lucien','C\'était un très bonne aventure, qui ma permis d\'apprendre beaucoup de chose',5,'Backend','2022-08-01 13:36:26'),
                          (2,'Mr ','X','Very Good',5,'Frontend','2022-08-01 13:38:40'),(3,'Mr ','X','Very Good',5,'Frontend','2022-08-01 13:38:52'),
                          (4,'Luca','Fahazavana','Super formation',4,'Backend','2022-08-01 14:03:36');
