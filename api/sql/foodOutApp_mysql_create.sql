CREATE TABLE `users` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(255) NOT NULL UNIQUE,
	`password` VARCHAR(255) NOT NULL,
	`salt` VARCHAR(10) NOT NULL,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`roleID` INT(10) NOT NULL,
	`deleted` BOOL(1) NOT NULL DEFAULT '0',
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `suggestions` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`locationID` INT(10) NOT NULL,
	`userID` INT(10) NOT NULL,
	`deleted` BOOL(1) NOT NULL DEFAULT '0',
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `locations` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`street` VARCHAR(255),
	`houseNr` VARCHAR(5),
	`plz` INT(5),
	`city` VARCHAR(255),
	`imgSrc` VARCHAR(255),
	`website` VARCHAR(255),
	`description` TEXT,
	`districtID` INT(10),
	`foodtypeID` INT(10),
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `districts` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `foodtypes` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `appointments` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`locationID` INT(10) NOT NULL,
	`date` DATE NOT NULL,
	`time` DATETIME NOT NULL,
	`deleted` BOOL(1) NOT NULL DEFAULT '0',
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `participants` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`appoINTmentID` INT(10) NOT NULL,
	`userID` INT(10) NOT NULL,
	`statusID` INT(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `status` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `users` ADD CONSTRAINT `users_fk0` FOREIGN KEY (`roleID`) REFERENCES `roles`(`id`);

ALTER TABLE `suggestions` ADD CONSTRAINT `suggestions_fk0` FOREIGN KEY (`locationID`) REFERENCES `locations`(`id`);

ALTER TABLE `suggestions` ADD CONSTRAINT `suggestions_fk1` FOREIGN KEY (`userID`) REFERENCES `users`(`id`);

ALTER TABLE `locations` ADD CONSTRAINT `locations_fk0` FOREIGN KEY (`districtID`) REFERENCES `districts`(`id`);

ALTER TABLE `locations` ADD CONSTRAINT `locations_fk1` FOREIGN KEY (`foodtypeID`) REFERENCES `foodtypes`(`id`);

ALTER TABLE `appointments` ADD CONSTRAINT `appointments_fk0` FOREIGN KEY (`locationID`) REFERENCES `locations`(`id`);

ALTER TABLE `participants` ADD CONSTRAINT `participants_fk0` FOREIGN KEY (`appointmentID`) REFERENCES `appointments`(`id`);

ALTER TABLE `participants` ADD CONSTRAINT `participants_fk1` FOREIGN KEY (`userID`) REFERENCES `users`(`id`);

ALTER TABLE `participants` ADD CONSTRAINT `participants_fk2` FOREIGN KEY (`statusID`) REFERENCES `status`(`id`);

