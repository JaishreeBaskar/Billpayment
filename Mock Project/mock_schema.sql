-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema billpayment
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema billpayment
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `billpayment` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema truyum
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema truyum
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `truyum` DEFAULT CHARACTER SET utf8 ;
USE `billpayment` ;

-- -----------------------------------------------------
-- Table `billpayment`.`billtype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`billtype` (
  `bt_electricity` VARCHAR(15) NULL DEFAULT NULL,
  `bt_telephone` VARCHAR(15) NULL DEFAULT NULL,
  `bt_dth` VARCHAR(15) NULL DEFAULT NULL,
  `bt_insurance` VARCHAR(15) NULL DEFAULT NULL,
  `bt_tax` VARCHAR(15) NULL DEFAULT NULL,
  `bt_creditcard` VARCHAR(15) NULL DEFAULT NULL,
  `bt_loanaccount` VARCHAR(15) NULL DEFAULT NULL,
  `bt_others` VARCHAR(15) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`role` (
  `ro_id` INT(11) NOT NULL,
  `ro_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`user` (
  `u_id` INT(15) NOT NULL AUTO_INCREMENT,
  `us_password` VARCHAR(255) NOT NULL,
  `us_userid` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`u_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`user_role` (
  `ur_id` INT(11) NOT NULL,
  `user_u_id` INT(15) NOT NULL,
  `role_ro_id` INT(11) NOT NULL,
  PRIMARY KEY (`ur_id`),
  INDEX `fk_user_role_user1_idx` (`user_u_id` ASC),
  INDEX `fk_user_role_role1_idx` (`role_ro_id` ASC),
  CONSTRAINT `fk_user_role_user1`
    FOREIGN KEY (`user_u_id`)
    REFERENCES `billpayment`.`user` (`u_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_role1`
    FOREIGN KEY (`role_ro_id`)
    REFERENCES `billpayment`.`role` (`ro_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`vendor` (
  `ve_nameofthevendor` VARCHAR(50) NOT NULL,
  `ve_companyreg.number` VARCHAR(45) NOT NULL,
  `ve_vendortype` VARCHAR(45) NOT NULL,
  `ve_address` VARCHAR(45) NOT NULL,
  `ve_country` VARCHAR(45) NOT NULL,
  `ve_state` VARCHAR(45) NOT NULL,
  `ve_emailaddress` VARCHAR(15) NOT NULL,
  `ve_contactnumber` INT(10) NOT NULL,
  `ve_website` VARCHAR(15) NOT NULL,
  `ve_certificateissueddate` VARCHAR(45) NOT NULL,
  `ve_certificatevaliditydate` VARCHAR(45) NOT NULL,
  `ve_yearofestablishment` VARCHAR(45) NOT NULL,
  `ve_paymentgateway` VARCHAR(15) NOT NULL,
  `ve_password` VARCHAR(15) NOT NULL,
  `ve_id` INT(15) NOT NULL AUTO_INCREMENT,
  `ve_status` TINYINT(1) NOT NULL,
  PRIMARY KEY (`ve_id`),
  INDEX `fk_vendor_user1_idx` (`ve_id` ASC),
  CONSTRAINT `fk_vendor_user1`
    FOREIGN KEY (`ve_id`)
    REFERENCES `billpayment`.`user` (`u_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`customer` (
  `cus_firstname` VARCHAR(50) NOT NULL,
  `cus_lastname` VARCHAR(50) NOT NULL,
  `cus_age` INT(2) NULL,
  `cus_gender` VARCHAR(45) NULL DEFAULT NULL,
  `cus_contactnumber` INT(10) NULL DEFAULT NULL,
  `cus_pan` VARCHAR(15) NULL DEFAULT NULL,
  `cus_aadharnumber` VARCHAR(15) NULL DEFAULT NULL,
  `c_id` INT(15) NOT NULL AUTO_INCREMENT,
  `cus_password` VARCHAR(255) NULL,
  `user_us_userid` VARCHAR(15) NOT NULL,
  `cus_userid` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`c_id`),
  INDEX `fk_customer_user1_idx` (`user_us_userid` ASC),
  CONSTRAINT `fk_customer_user1`
    FOREIGN KEY (`user_us_userid`)
    REFERENCES `billpayment`.`user` (`u_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `truyum` ;

-- -----------------------------------------------------
-- Table `truyum`.`menu_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truyum`.`menu_item` (
  `me_id` INT(11) NOT NULL AUTO_INCREMENT,
  `me_name` VARCHAR(100) NULL DEFAULT NULL,
  `me_price` DECIMAL(8,2) NULL DEFAULT NULL,
  `me_active` TINYINT(1) NULL DEFAULT NULL,
  `me_date_of_launch` DATE NULL DEFAULT NULL,
  `me_category` VARCHAR(45) NULL DEFAULT NULL,
  `me_free_delivery` TINYINT(1) NULL DEFAULT NULL,
  `me_image` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`me_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `truyum`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truyum`.`user` (
  `us_id` INT(11) NOT NULL AUTO_INCREMENT,
  `us_name` VARCHAR(60) NULL DEFAULT NULL,
  `us_firstname` VARCHAR(30) NOT NULL,
  `us_lastname` VARCHAR(30) NOT NULL,
  `us_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`us_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 101022
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `truyum`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truyum`.`cart` (
  `ct_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ct_us_id` INT(11) NULL DEFAULT NULL,
  `ct_pr_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ct_id`),
  INDEX `ct_us_fk_idx` (`ct_us_id` ASC),
  INDEX `ct_pr_fk_idx` (`ct_pr_id` ASC),
  CONSTRAINT `ct_pr_fk`
    FOREIGN KEY (`ct_pr_id`)
    REFERENCES `truyum`.`menu_item` (`me_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ct_us_fk`
    FOREIGN KEY (`ct_us_id`)
    REFERENCES `truyum`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `truyum`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truyum`.`favorites` (
  `fav_us_id` INT(11) NOT NULL,
  `fav_pr_id` INT(11) NOT NULL,
  INDEX `FK674md8fk0brqphiqm6bftk86i` (`fav_pr_id` ASC),
  INDEX `FKq2m1ln92ck23git5dh53utrtw` (`fav_us_id` ASC))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `truyum`.`movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truyum`.`movie` (
  `mo_id` INT(11) NOT NULL AUTO_INCREMENT,
  `mo_active` BIT(1) NULL DEFAULT NULL,
  `mo_box_office` BIGINT(20) NULL DEFAULT NULL,
  `mo_date_of_launch` DATETIME NULL DEFAULT NULL,
  `mo_genre` VARCHAR(255) NULL DEFAULT NULL,
  `me_has_teaser` BIT(1) NULL DEFAULT NULL,
  `mo_image_url` VARCHAR(255) NULL DEFAULT NULL,
  `mo_title` VARCHAR(255) NULL DEFAULT NULL,
  `mo_has_teaser` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`mo_id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `truyum`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truyum`.`role` (
  `ro_id` INT(11) NOT NULL,
  `ro_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `truyum`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `truyum`.`user_role` (
  `ur_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ur_us_id` INT(11) NOT NULL,
  `ur_ro_id` INT(11) NOT NULL,
  PRIMARY KEY (`ur_id`),
  INDEX `fk_user_role_user1_idx` (`ur_us_id` ASC),
  INDEX `fk_role_role1_idx` (`ur_ro_id` ASC),
  CONSTRAINT `fk_role_role1`
    FOREIGN KEY (`ur_ro_id`)
    REFERENCES `truyum`.`role` (`ro_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_user1`
    FOREIGN KEY (`ur_us_id`)
    REFERENCES `truyum`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
