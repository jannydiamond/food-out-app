CREATE TABLE `users` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`username` varchar(255) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`salt` varchar NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	`roleID` int(10) NOT NULL,
	`deleted` bool(1) NOT NULL DEFAULT '0',
	`created` TIMESTAMP NOT NULL,
	`updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `suggestions` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`locationID` int(10) NOT NULL,
	`userID` int(10) NOT NULL,
	`deleted` bool(1) NOT NULL DEFAULT '0',
	`created` TIMESTAMP NOT NULL,
	`updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `locations` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`street` varchar(255),
	`houseNr` varchar(5),
	`plz` int(5),
	`city` varchar(255),
	`imgSrc` varchar(255),
	`website` varchar(255),
	`description` varchar,
	`districtID` int(10),
	`foodtypeID` TIMESTAMP,
	`created` TIMESTAMP NOT NULL,
	`updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `districts` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `foodtypes` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `appointments` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`locationID` int(10) NOT NULL,
	`date` DATE NOT NULL,
	`time` DATETIME NOT NULL,
	`deleted` bool(1) NOT NULL DEFAULT '0',
	`created` TIMESTAMP NOT NULL,
	`updated` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `participants` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`appointmentID` int(10) NOT NULL,
	`userID` int(10) NOT NULL,
	`statusID` int(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `status` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
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

