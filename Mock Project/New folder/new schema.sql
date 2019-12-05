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
-- Table `billpayment`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`customer` (
  `cus_firstname` VARCHAR(50) NULL DEFAULT NULL,
  `cus_lastname` VARCHAR(50) NULL DEFAULT NULL,
  `cus_age` INT(2) NULL DEFAULT NULL,
  `cus_gender` VARCHAR(45) NULL DEFAULT NULL,
  `cus_contactnumber` INT(10) NULL DEFAULT NULL,
  `cus_pan` VARCHAR(15) NULL DEFAULT NULL,
  `cus_aadharnumber` VARCHAR(15) NULL DEFAULT NULL,
  `cus_password` VARCHAR(255) NOT NULL,
  `cus_userid` VARCHAR(50) NOT NULL,
  `c_id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`c_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`role` (
  `ro_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ro_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`user` (
  `us_userid` VARCHAR(15) NOT NULL,
  `us_password` VARCHAR(255) NULL DEFAULT NULL,
  `u_id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`u_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 105
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`user_role` (
  `ur_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_u_id` INT(11) NOT NULL,
  `role_ro_id` INT(11) NOT NULL,
  PRIMARY KEY (`ur_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 117
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billpayment`.`vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billpayment`.`vendor` (
  `ve_nameofthevendor` VARCHAR(50) NOT NULL,
  `ve_companyregnumber` VARCHAR(45) NOT NULL,
  `ve_vendortype` VARCHAR(45) NOT NULL,
  `ve_address` VARCHAR(45) NOT NULL,
  `ve_country` VARCHAR(45) NOT NULL,
  `ve_state` VARCHAR(45) NOT NULL,
  `ve_emailaddress` VARCHAR(15) NOT NULL,
  `ve_contactnumber` INT(10) NOT NULL,
  `ve_website` VARCHAR(15) NOT NULL,
  `ve_certificateissueddate` DATE NOT NULL,
  `ve_certificatevaliditydate` DATE NOT NULL,
  `ve_yearofestablishment` DATE NOT NULL,
  `ve_paymentgateway` VARCHAR(15) NOT NULL,
  `ve_password` VARCHAR(255) NOT NULL,
  `ve_id` INT(15) NOT NULL AUTO_INCREMENT,
  `ve_status` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`ve_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
