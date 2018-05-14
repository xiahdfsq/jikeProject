-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2016 �?02 �?29 �?08:40
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `newsdata`
--
CREATE DATABASE IF NOT EXISTS `newsdata` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `newsdata`;

-- --------------------------------------------------------

--
-- 表的结构 `newadmin`
--

CREATE TABLE IF NOT EXISTS `newadmin` (
  `adminid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `adname` varchar(20) NOT NULL,
  `adpassword` int(3) NOT NULL,
  PRIMARY KEY (`adminid`),
  UNIQUE KEY `adname` (`adname`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `newadmin`
--

INSERT INTO `newadmin` (`adminid`, `adname`, `adpassword`) VALUES
(1, 'admin', 123);

-- --------------------------------------------------------

--
-- 表的结构 `newsbaijia`
--

CREATE TABLE IF NOT EXISTS `newsbaijia` (
  `baijiaid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `baijiatitle` varchar(100) NOT NULL,
  `baijiamaker` varchar(50) NOT NULL,
  `baijiatime` date NOT NULL,
  `baijiaimg` text NOT NULL,
  `baijiacontent` text NOT NULL,
  PRIMARY KEY (`baijiaid`),
  KEY `baijiatitle` (`baijiatitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `newsbaijia`
--

INSERT INTO `newsbaijia` (`baijiaid`, `baijiatitle`, `baijiamaker`, `baijiatime`, `baijiaimg`, `baijiacontent`) VALUES
(1, '第一篇', '可可', '2016-02-28', '1350700536093.jpg', '百家类目第一篇'),
(2, '第二篇', '可可', '2016-02-29', '1350700535514.jpg', '百家第二篇');

-- --------------------------------------------------------

--
-- 表的结构 `newslist`
--

CREATE TABLE IF NOT EXISTS `newslist` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsmaker` varchar(50) NOT NULL,
  `addtime` date NOT NULL,
  `newsimg` text NOT NULL,
  `newscontent` text NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `newslist`
--

INSERT INTO `newslist` (`newsid`, `newstitle`, `newsmaker`, `addtime`, `newsimg`, `newscontent`) VALUES
(1, '第一篇', '君君', '2016-02-26', '1350700536525.jpg', '第一篇新闻关于就业的'),
(2, '第二篇', '君君', '2016-02-26', '1350700536525.jpg', '第二篇新闻关于跨境贸易的'),
(3, '第三篇', '君君', '2016-02-28', '1350700536525.jpg', '我的第三篇新闻'),
(4, '第四篇', '君君', '2016-02-28', '1350700536525.jpg', '我的第四篇新闻'),
(5, '第五篇', '君君', '2016-02-28', '1350700536525.jpg', '我的第五篇新闻');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
