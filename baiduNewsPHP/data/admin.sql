CREATE DATABASE IF NOT EXISTS 'newsdata';
USE 'news';
-- 管理员表--
DROP TABLE IF EXISTS 'news_admin';
CREATE TABLE 'news_admin'(
 'id' int unsigned auto_increment key,
 'username' varchar(20) not null unique,
 'password' char(30) not null,
);
-- 分类表
DROP TABLE IF EXISTS 'news_cate';
CREATE TABLE 'news_cate'(
 'id' smallint unsigned auto_increment key,
'cName' varchar(50)  unique,

);
-- 新闻表
DROP TABLE IF EXISTS 'news_lists';
CREATE TABLE 'news_lists'(
 `newsid` int unsigned auto_increment key,
  `newstitle` varchar(100) not null , 
  `newsmaker` varchar(30) not null , 
  `addtime` date, 
  `newsimg` text, 
  `newscontent` text,
  'newscate' smallint unsigned not null;
);
-- 用户表
DROP TABLE IF EXISTS 'news_user';
CREATE TABLE 'news_lists'(
 `id` int unsigned auto_increment key,
  `username` varchar(20) not null unique , 
  `password` char(32) not null , 
  `sex` enum("男","女","保密")not null default "保密", 
  `face` varchar(20) not null , 
  `regTime` int unsigned not null
);
-- 相册表
DROP TABLE IF EXISTS 'news_album';
CREATE TABLE 'news_album'(
 `id` int unsigned auto_increment key,
  `pid` int unsigned  not null  , 
  `password` char(32) not null , 
  `albumPath` char(50) not null, 
);