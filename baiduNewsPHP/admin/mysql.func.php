<?php 
header('Content-type: application/json;charset=utf-8');
$con=mysql_connect("localhost","root","")or die("数据库连接失败Error:".mysql_errno().":".mysql_error());
mysql_query("set names 'utf8'");
mysql_select_db("newsdata",$con)or die("数据库打开失败Error:".mysql_error());
    // 推举类目新闻插入
    mysql_select_db("newsdata",$con);
    $newstitle = $_REQUEST['newstitle'];
    $newsmaker=$_REQUEST['newsmaker'];
    $addtime=$_REQUEST['addtime'];
    $newsimg=$_REQUEST['newsimg'];
    $newscontent=$_REQUEST['newscontent'];
    $sql="INSERT INTO `newslist`( `newstitle`, `newsmaker`, `addtime`, `newsimg`, `newscontent`) 
     VALUES ('$newstitle','$newsmaker','$addtime','$newsimg','$newscontent')";
    mysql_query("set names'utf8'");
    mysql_query($sql);
    // 百家类目新闻插入
    echo '添加新闻成功';
    $baijiatitle = $_REQUEST['baijiatitle'];
    $baijiamaker=$_REQUEST['baijiamaker'];
    $baijiatime=$_REQUEST['baijiatime'];
    $baijiaimg=$_REQUEST['baijiaimg'];
    $baijiacontent=$_REQUEST['baijiacontent'];
    $sqlbaijia="INSERT INTO `newsbaijia`( `baijiatitle`, `baijiamaker`, `baijiatime`, `baijiaimg`, `baijiacontent`) 
     VALUES ('$baijiatitle','$baijiamaker','$baijiatime','$baijiaimg','$baijiacontent')";
    mysql_query("set names'utf8'");
    mysql_query($sqlbaijia);
?>