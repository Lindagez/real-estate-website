CREATE TABLE `user`(
    `id` CHAR(36) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `middleName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `phone2` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `zipCode` VARCHAR(255) NOT NULL DEFAULT '0000',
    `street` VARCHAR(255) NULL DEFAULT 'n/a',
    `role` SMALLINT NOT NULL DEFAULT '1',
    `status` VARCHAR(255) NOT NULL DEFAULT 'active',
    `isVerified` TINYINT(1) NOT NULL DEFAULT '0',
    `profileImageUrl` VARCHAR(500) NULL DEFAULT 'n/a',
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
);
ALTER TABLE
    `user` ADD PRIMARY KEY(`id`);
CREATE TABLE `property`(
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `price` VARCHAR(255) NOT NULL,
    `quantity` INT NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'active',
    `description` VARCHAR(2000) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `subCity` VARCHAR(255) NOT NULL DEFAULT 'n/a',
    `zipCode` SMALLINT NOT NULL DEFAULT '0',
    `street` VARCHAR(255) NOT NULL DEFAULT 'n/a',
    `location` VARCHAR(500) NOT NULL DEFAULT 'n/a',
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
    `deletedAt` TIMESTAMP NULL
);
ALTER TABLE
    `property` ADD PRIMARY KEY(`id`);
CREATE TABLE `image`(
    `id` CHAR(36) NOT NULL,
    `filename` VARCHAR(255) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `imageUrl` VARCHAR(1000) NOT NULL,
    `propertyId` CHAR(36) NOT NULL
);
ALTER TABLE
    `image` ADD PRIMARY KEY(`id`);
CREATE TABLE `order`(
    `id` CHAR(36) NOT NULL,
    `totalPrice` DOUBLE(8, 2) NOT NULL,
    `completedPrice` DOUBLE(8, 2) NOT NULL,
    `remainingPrice` DOUBLE(8, 2) NOT NULL,
    `isValidated` TINYINT(1) NOT NULL DEFAULT '0',
    `status` VARCHAR(255) NOT NULL DEFAULT 'active',
    `userId` CHAR(36) NOT NULL,
    `propertyId` CHAR(36) NOT NULL,
    `deliveryDate` TIMESTAMP NOT NULL,
    `orderDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
);
ALTER TABLE
    `order` ADD PRIMARY KEY(`id`);
CREATE TABLE `agreement`(
    `id` CHAR(36) NOT NULL,
    `userId` CHAR(36) NOT NULL,
    `motherName` VARCHAR(255) NOT NULL,
    `woreda` VARCHAR(255) NOT NULL,
    `regId` CHAR(36) NOT NULL,
    `educationLevel` VARCHAR(255) NOT NULL,
    `fieldOfStudy` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'pending',
    `agreementDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedDate` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
);
ALTER TABLE
    `agreement` ADD PRIMARY KEY(`id`);
CREATE TABLE `video`(
    `id` CHAR(36) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(2000) NOT NULL,
    `uploaderId` CHAR(36) NOT NULL,
    `videoUrl` VARCHAR(500) NOT NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'active',
    `uploadedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
);
ALTER TABLE
    `video` ADD PRIMARY KEY(`id`);
CREATE TABLE `news`(
    `id` CHAR(36) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(2000) NOT NULL,
    `authorId` CHAR(36) NOT NULL,
    `imageUrl` VARCHAR(500) NULL,
    `videoUrl` VARCHAR(500) NULL,
    `status` VARCHAR(255) NOT NULL DEFAULT 'active',
    `publishedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
);
ALTER TABLE
    `news` ADD PRIMARY KEY(`id`);
CREATE TABLE `registration`(
    `id` CHAR(36) NOT NULL,
    `userId` CHAR(36) NOT NULL,
    `propertyId` CHAR(36) NOT NULL,
    `passportNo` VARCHAR(255) NOT NULL,
    `kebeleIdNo` VARCHAR(255) NOT NULL,
    `houseNo` VARCHAR(255) NOT NULL,
    `ownershipId` VARCHAR(255) NOT NULL DEFAULT 'not assigned',
    `status` VARCHAR(255) NOT NULL DEFAULT 'pending',
    `agreementDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
);
ALTER TABLE
    `registration` ADD PRIMARY KEY(`id`);
ALTER TABLE
    `order` ADD CONSTRAINT `order_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `user`(`id`);
ALTER TABLE
    `video` ADD CONSTRAINT `video_uploaderid_foreign` FOREIGN KEY(`uploaderId`) REFERENCES `user`(`id`);
ALTER TABLE
    `news` ADD CONSTRAINT `news_authorid_foreign` FOREIGN KEY(`authorId`) REFERENCES `user`(`id`);
ALTER TABLE
    `agreement` ADD CONSTRAINT `agreement_regid_foreign` FOREIGN KEY(`regId`) REFERENCES `registration`(`id`);
ALTER TABLE
    `image` ADD CONSTRAINT `image_propertyid_foreign` FOREIGN KEY(`propertyId`) REFERENCES `property`(`id`);
ALTER TABLE
    `registration` ADD CONSTRAINT `registration_propertyid_foreign` FOREIGN KEY(`propertyId`) REFERENCES `property`(`id`);
ALTER TABLE
    `agreement` ADD CONSTRAINT `agreement_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `user`(`id`);
ALTER TABLE
    `registration` ADD CONSTRAINT `registration_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `user`(`id`);
ALTER TABLE
    `order` ADD CONSTRAINT `order_propertyid_foreign` FOREIGN KEY(`propertyId`) REFERENCES `property`(`id`);